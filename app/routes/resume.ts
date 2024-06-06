import { Context } from "hono";
import { createRoute } from "honox/factory";

export const POST = createRoute(async (c: Context) => {
  const auth = c.req.header("X-PERSONAL-AUTH");
  if (import.meta.env.PROD && auth !== c.env.AUTH_SECRET) {
    return c.text("UNAUTHORIZED", 401);
  }
  const { file }: { file: File } = await c.req.parseBody();
  console.log(file.name); // File | string
  const object = await c.env.PERSONAL_BUCKET.put(file.name, file, {});
  c.header("etag", object.httpEtag);
  console.log(object);
  return c.text("Success");
});

export default createRoute(async (c: Context) => {
  const object = await c.env.PERSONAL_BUCKET.get("brandon_cox_2024.pdf");
  console.log(object);

  if (object === null) {
    return c.notFound();
  }

  c.header("etag", object.httpEtag);
  if (object.range) {
    c.header(
      "content-range",
      `bytes ${object.range.offset}-${object.range.end ?? object.size - 1}/${
        object.size
      }`
    );
  }

  return c.body(object.body, 206);
});

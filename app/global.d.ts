import {} from "hono";

type Head = {
  title?: string;
};

declare module "hono" {
  interface Env {
    Variables: {};
    Bindings: {
      API_HOST: string;
      PAGE_TITLE: string;
      AUTH_SECRET: string;
      PERSONAL_BUCKET: R2Bucket;
    };
  }
  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head):
      | Response
      | Promise<Response>;
  }
}

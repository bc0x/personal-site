import { createRoute } from "honox/factory";
import { ResumeIcon } from "../icons/resume.icon";
import { EmailIcon } from "../icons/email.icon";
import { LinkIcon } from "../icons/link.icon";
import Ascii from "../islands/ascii";

export default createRoute(async (c) => {
  return c.render(
    <html className="hero-background">
      <Ascii />
      <div className="hero min-h-screen background-image">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/static/pic.jpg"
            className="max-w-xs rounded-lg shadow-2xl md:max-w-md"
          />
          <div className="ml-2">
            <h1 className="text-5xl font-bold max-w-fit text-center md:text-left">
              Brandon Cox
            </h1>
            <h3 className="text-2xl font-bold text-center md:text-left">
              software engineer and architect
            </h3>
            <p className="py-6 text-lg text-center md:text-left"></p>
            <div className="flex flex-col max-w-xs md:flex-row">
              <a
                target="_blank"
                href="/resume"
                className="btn btn-primary text-lg mb-2"
              >
                <ResumeIcon />
                <p className="font-mono">resume</p>
              </a>
              <a
                href="mailto: personal-site.341f4@passmail.net"
                className="btn btn-secondary text-lg mb-2 md:ml-2"
              >
                <EmailIcon />
                <p className="font-mono">email</p>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/bcox-dev/"
                className="btn btn-secondary text-lg mb-2 md:ml-2"
              >
                <LinkIcon />
                <p className="font-mono">linkedin</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </html>,
    { title: c.env.PAGE_TITLE ?? "bcox" }
  );
});

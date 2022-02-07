import { TemplateFactory } from "./template";
import { header } from "./header";

const temp = TemplateFactory.getInstance({
  header: header({ title: "송금신청이 완료되었습니다" }),
  contents: "Contents"
});

const template = temp.render();
// mailer(template)

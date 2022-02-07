class Tmeplate {
  private header: string;
  private footer: string;
  private css: string;
  private contents?: string;

  constructor({ header, contents = "" }: { header: string; contents: string }) {
    this.header = header;
    this.footer = "footer";
    this.css = "css";
    this.contents = contents;
  }

  render() {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>The Moin</title>
          <style>
            /* 공통 */
            .container {
              word-break: break-word;
              font-family: "Spoqa Han Sans Neo", "sans-serif"; 
            }
            table {
              width: 100%;
            }
            .template {
              max-width: 768px;
            }
            ${this.css}
          </style>
        </head>
        <body class="container py-3 px-2 font-color-black">
          <table class="template py-2" cellpadding="0" cellspacing="0" border="0" align="center">
            <tr>
              <td>
                <!-- Header -->
                ${this.header}
                <!-- Contents -->
                ${this.contents}
                <!-- Footer -->
                ${this.footer}
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;
  }
}
type Intance = {
  header: string;
  contents: string;
};
export class TemplateFactory {
  private static instance: Tmeplate;

  constructor() {
    throw new Error("Use TemplateFactory.getInstance()");
  }

  public static getInstance({ header, contents = "" }: Intance) {
    if (!TemplateFactory.instance) {
      TemplateFactory.instance = new Tmeplate({ header, contents });
    }
    return TemplateFactory.instance;
  }
}

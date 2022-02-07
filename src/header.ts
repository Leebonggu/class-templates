interface Config {
  title: string;
  next_line_title?: string;
  description?: string;
}

export const header = ({ title, next_line_title, description }: Config) => {
  return `
    <table id="header" class='pt-1' cellpadding="0" cellspacing="0" border="0" align='center'>
      <tr class="h-5">
        <td class="h-3">
          <img src="https://img.themoin.com/public/img/new-moin-logo.png" alt="moin-logo">
        </td>
      </tr>
      <tr>
        <td class="h1">${title}</td>
      </tr>
      ${
        next_line_title
          ? `
            <tr>
              <td class="h1">${next_line_title}</td>
            </tr>
          `
          : '<div style="diplay: none"></div>'
      }
      ${
        description
          ? `
          <tr>
            <td class="font-normal pt-1">${description}.</td>
          </tr>
        `
          : '<div style="diplay: none"></div>'
      }
      </tr>
    </table>
  `;
};

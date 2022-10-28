


export class Home {
  head = `<head>
          <!-- Required meta tags -->
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <script src="https://cdn.tailwindcss.com"></script>
          <title>Hello, world!</title>
        </head>`;

  start(msg) {

    return `
      <!doctype html>
      <html lang="en">
        ${this.head}
        <body>
          <center>
            <h1 class="text-4xl font-bold">${msg}</h1>
          </center>

        </body>
      </html>
    `;
  }

}
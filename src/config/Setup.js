const { PORT, KEY_SECRET } = process.env;


// console.log("PORT: ", PORT);

export class Setup {
  #port;
  #keySecret;

  constructor() {
    this.#port = PORT;
    this.#keySecret = KEY_SECRET;
  }

  getPort() {
    return this.#port;
  }

  getKeySecrect() {
    return this.#keySecret;
  }
}
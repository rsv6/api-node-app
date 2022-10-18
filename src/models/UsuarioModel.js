

export class UsuarioModel {
  #nome;
  #login;
  #senha;
  #nivel;

  constructor(nome, login, senha, nivel) {
    this.#nome = nome;
    this.#login = login;
    this.#senha = senha;
    this.#nivel = nivel === "" || nivel === undefined ? "usuario" : undefined
  }
}
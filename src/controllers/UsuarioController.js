import { UsuarioModel } from "../models/UsuarioModel.js";
import { Jwt } from "../services/middles/Jwt.js";

export class UsuarioController {
  token = "";
  jwt = new Jwt();

  cadastraUsuario () {

    return (req, res) => {
      const { nome, login, senha } = req.body;
      const usuario = new UsuarioModel(nome, login, senha);

      res.status(201).json("Usuario criado!");
    }
  }

  loginUsuario() {

    return (req, res) => {
      const { login } = req.body;
      
      this.token = this.jwt.toAsign(login, Date());
      
      res.status(200).json({ "token": this.token});
    } 
  }

}
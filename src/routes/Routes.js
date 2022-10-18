import { Router } from "express";
import { DispositivoController } from "../controllers/dispositivoController.js";
import { verificaLogin } from "../services/middles/verificaLogin.js";
import { verificaToken } from "../services/middles/verificaToken.js";
import { UsuarioController } from "../controllers/UsuarioController.js";


export class Routes {

  router(){
    return Router()
      .all('/')
        .get('/api/solicitacao', verificaToken, new DispositivoController().solicitaLiberacao())  // Valida autenticacao de token.
        .get('/api/login', verificaLogin, new UsuarioController().loginUsuario())   // Valida login e senha, e gera token caso tenha registro.
  }
}
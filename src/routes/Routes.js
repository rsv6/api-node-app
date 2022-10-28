import { Router } from "express";
import { DispositivoController } from "../controllers/dispositivoController.js";
import { verificaLogin } from "../services/middles/verificaLogin.js";
import { verificaToken } from "../services/middles/verificaToken.js";
import { UsuarioController } from "../controllers/UsuarioController.js";
import { HomeController } from '../controllers/HomeController.js'


export class Routes {

  router(){
    return Router()
      .all('/')
        .get('/', new HomeController().start())
        .get('/api/solicitacao', verificaToken, new DispositivoController().solicitaLiberacao())  // Valida autenticacao de token.
        .get('/api/login', new UsuarioController().loginUsuario())   // Valida login e senha, e gera token caso tenha registro.
  }
}
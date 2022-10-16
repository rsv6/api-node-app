import { Router } from "express";
import { DispositivoController } from "../controllers/dispositivoController.js";
import { verificaUsuario } from "../services/middles/verificaUsuario.js";


export class Routes {

  router(){
    return Router()
      .all('/')
        .get('/api/solicitacao', verificaUsuario, new DispositivoController().solicitaLiberacao())
  }
}
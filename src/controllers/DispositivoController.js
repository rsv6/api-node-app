import { DispositivoModel } from "../models/dispositivoModel.js";

export class DispositivoController {

  solicitaLiberacao() {

    return (req, res) => {
      const { usuario, modelo, mac } = req.body;
      
      const dispositivo = new DispositivoModel();
      dispositivo.adicionarDispositivo(usuario, modelo, mac);
      console.log("Rota: ", dispositivo)

      res.status(200).json({ error: false, authe: true, dispositivo: dispositivo });
    }
  }
}
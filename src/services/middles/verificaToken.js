import { Jwt } from "./Jwt.js";

export const verificaToken = (req, res, next) => {
  let jwt = new Jwt();
  let token = req.headers['authorization'];

  token = token.split(" ")[1];

  if (token !== "") {
    let result = jwt.verifyToken(token);

    if (result) {

      console.log("Token: ", token)
      next();
      
    } else {
      res.status(404).json({ error: true, authe: false })
    }
  } else {

    return res.status(404).json({ error: true, authe: false })
  }
}


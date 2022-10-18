import { Jwt } from "./Jwt.js";

export const verificaToken = (req, res, next) => {
  let jwt = new Jwt();
  let token = req.headers['authorization'];
  
  // console.log(token)
  // console.log(token.split(" ")[1]);

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
    res.status(404).json({ error: true, authe: false })
  }
}


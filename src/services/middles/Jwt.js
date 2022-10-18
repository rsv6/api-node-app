import jwt from 'jsonwebtoken';
import { Setup } from '../../config/setup.js';

export class Jwt{

  keySecret = new Setup().getKeySecrect();
  verified;

  toAsign (login, date) {
    return jwt.sign({ login: login, date: date}, this.keySecret )
  }

  verifyToken (token) {
    
    this.verified = jwt.verify(token, this.keySecret);

    console.log("Valor do resultado JWT: ", this.verified);
    
    return this.verified
  }
}
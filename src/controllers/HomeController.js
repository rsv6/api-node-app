import { Home } from '../views/Home.js'

export class HomeController {
  msg = 'Olá, seja bem vindo(a)!';
  home = new Home();

  start() {
    return (req, res) => {
      res.status(200).send(this.home.start(this.msg));
    }
  }
}



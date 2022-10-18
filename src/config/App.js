import dotenv from 'dotenv/config';
import express, { json, urlencoded } from 'express';
import { Routes } from '../routes/Routes.js';
import { Setup } from './Setup.js';


export class App {
  app;  
  express;
  routes = new Routes();
  #port;

  init() {
    
    this.app = express();
    this.routes = new Routes()
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(this.routes.router());
    this.#port = new Setup().getPort();
    this.start();
  }

  start() {
    
    this.app.listen(this.#port, () => {
      console.log(`API Server running no port ${this.#port}`);
    })
  }
}

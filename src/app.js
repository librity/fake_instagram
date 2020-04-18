import 'dotenv';

import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import methodOverride from 'method-override';
import { errors as celebrateValidations } from 'celebrate';

import './database';
import router from './router';
import youch from './config/youch';

class App {
  constructor() {
    this.server = express();

    this.config();
    this.views();
    // this.middlewares();
    this.routes();
    this.exceptionHandlers();
  }

  config() {
    this.server.use(express.json());
    this.server.use(express.static(path.join(__dirname, '..', 'public')));
    this.server.use(express.urlencoded({ extended: true }));

    this.server.use(logger('dev'));
    this.server.use(cookieParser());
    this.server.use(methodOverride('_method'));
  }

  views() {
    this.server.set('views', path.join(__dirname, 'views'));
    this.server.set('view engine', 'ejs');
  }

  // middlewares() {}

  routes() {
    this.server.use(router);
  }

  exceptionHandlers() {
    this.server.use(celebrateValidations());

    this.server.use(youch);
  }
}

export default new App().server;

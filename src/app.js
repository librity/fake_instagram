import 'dotenv';

import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import methodOverride from 'method-override';
import { join } from 'path';

import expressLayouts from 'express-ejs-layouts';
import cors from 'cors';

import './database';
import templateLocals from './app/middlewares/templateLocals';
import router from './router';
import celebrateErrors from './config/celebrateErrors';
import youch from './config/youch';
import sessions from './config/sessions';

class App {
  constructor() {
    this.server = express();

    this.config();
    this.views();
    this.middlewares();
    this.routes();
    this.exceptionHandlers();
  }

  config() {
    this.server.use(express.json());
    this.server.use(express.static(join(__dirname, '..', 'public')));
    this.server.use(express.urlencoded({ extended: true }));

    this.server.use(logger('dev'));
    this.server.use(cookieParser());
    this.server.use(methodOverride('_method'));
    this.server.use(cors());
    this.server.use(sessions);
  }

  views() {
    this.server.set('views', join(__dirname, 'views'));
    this.server.set('view engine', 'ejs');

    this.server.use(expressLayouts);
    this.server.set('layout extractScripts', true);
    this.server.set('layout extractStyles', true);
    this.server.set('layout extractMetas', true);
    this.server.set('layout', 'layouts/default');
  }

  middlewares() {
    this.server.use(templateLocals);
  }

  routes() {
    this.server.use(router);
  }

  exceptionHandlers() {
    this.server.use(celebrateErrors);

    this.server.use(youch);
  }
}

export default new App().server;

import 'reflect-metadata';
import '@shared/typeorm';

import express from 'express';
import cors from 'cors';
import routes from './routes';
import middlewareError from './errors/Middleware';

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(middlewareError);

app.use(routes);

app.listen(port);

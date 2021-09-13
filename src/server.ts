import express from 'express';
import './database/connection';
import {serve, setup} from 'swagger-ui-express';

import cors from 'cors';

import routes from './routes';


import swaggerDocs from '../swagger.json';

const app = express();
const PORT = 3333

app.use(express.json());
app.use(cors())

app.use("/api-docs", serve, setup(swaggerDocs));
app.use("/v1", routes);

app.listen(PORT, () => {
    console.log("Servidor iniciado")
})
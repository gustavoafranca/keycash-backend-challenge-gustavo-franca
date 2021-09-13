import { Router } from "express";
import imoveisRouter from "./imoveis.routes";
import tipoRouter from "./tipo.routes";

const routes = Router();

routes.use("/tipo", tipoRouter)
routes.use("/imoveis", imoveisRouter)


export default routes;
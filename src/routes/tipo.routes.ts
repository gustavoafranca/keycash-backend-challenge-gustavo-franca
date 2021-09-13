import {Router} from 'express'
import TipoController from '../controller/TipoController';



const tipoRouter = Router();

tipoRouter.post('/create', TipoController.create)
tipoRouter.put('/update/:id', TipoController.update)
tipoRouter.delete('/delete/:id', TipoController.delete)
tipoRouter.get('/search', TipoController.search)
tipoRouter.get('/index', TipoController.index)
tipoRouter.get('/show/:id', TipoController.show)


export default tipoRouter;
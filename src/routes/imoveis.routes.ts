import {Router} from 'express'
import ImoveisController from '../controller/ImoveisController';



const imoveisRouter = Router();

imoveisRouter.post('/create', ImoveisController.create)
imoveisRouter.put('/update/:id', ImoveisController.update)
imoveisRouter.delete('/delete/:id', ImoveisController.delete)
imoveisRouter.get('/search', ImoveisController.search)
imoveisRouter.get('/index', ImoveisController.index)
imoveisRouter.get('/show/:id', ImoveisController.show)

export default imoveisRouter;
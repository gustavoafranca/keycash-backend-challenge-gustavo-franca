import { Request, response, Response } from "express";
import { getRepository, ILike } from "typeorm";
import Tipo from "../models/Tipo";
import View from "../views/TipoView"


export default {
	async create(req: Request, res: Response) {
		const tipo = <Tipo>req.body
		try {
			const repository = getRepository(Tipo)
			const create = repository.create(tipo)
			const isExist = await repository.find({
				tipo: tipo.tipo
			})
			if(!isExist[0]){
				const save = await repository.save(create)
				return res.status(201).json(View.render(save))
			}
			
			return res.status(422).send(`O tipo de imóvel já foi adicionado`)
		} catch (error) {
			return res.json(400)
		}
	},


	async update(req: Request, res: Response) {
		const {id} = req.params
		const tipo = <Tipo>req.body
		try {
			const repository = getRepository(Tipo)
			await repository.update(id, tipo)
			const value = <Tipo> await repository.findOne(id)
			return res.status(200).json(View.render(value))
		} catch (error) {
      return res.sendStatus(400)
		}
	},


	async delete(req: Request, res: Response) {
		const {id} = req.params
		try {
			const repository = getRepository(Tipo)
			await repository.delete(id)
			return res.sendStatus(204).send("deletado com sucesso")
		} catch (error) {
      return res.sendStatus(400)
		}
	},


	async search(req: Request, res: Response) {
		const {tipo} = req.query

		try {
			const repository = getRepository(Tipo)
			const result = await repository.find({
				where: {
					tipo: ILike(`%${tipo}%`)
				}
			})
			return res.status(200).json(View.renderMany(result))
		} catch (error) {
      return res.sendStatus(400)
		}
	},
	
	async index(req: Request, res: Response) {

		try {
			const repository = getRepository(Tipo)
			const result = await repository.find()
			return res.status(200).json(View.renderMany(result))
		} catch (error) {
      return res.sendStatus(400)
		}
	},

	async show(req: Request, res: Response) {
		try {
			const {id} = req.params
			const repository = getRepository(Tipo)
			const value = await repository.findOneOrFail(id)
			return res.status(201).json(View.render(value))
		} catch (error) {
      return res.sendStatus(400)
		}
	},
}
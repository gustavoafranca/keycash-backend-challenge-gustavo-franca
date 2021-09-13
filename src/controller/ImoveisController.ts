import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Imoveis from "../models/Imovel"
import View from "../views/ImoveisView"

export default {
	async create(req: Request, res: Response) {
		const {
			quarto,
			metragem,
			vagas,
			tipo,
		} = <Imoveis>req.body
		try {
			const repository = getRepository(Imoveis)
			const create = repository.create({
				quarto,
				metragem,
				vagas,
				tipo
			})
			const save = await repository.save(create)
			return res.status(201).json(View.render(save))
		} catch (error) {
			return res.json(400)
		}
	},


	async update(req: Request, res: Response) {
		const {id} = req.params
		const {
			quarto,
			metragem,
			vagas,
			tipo
		} = <Imoveis> req.body
		try {
			const repository = getRepository(Imoveis)
			await repository.update(id, {
				quarto,
				metragem,
				vagas,
				tipo
			})
			const value = <Imoveis> await repository.findOne(id)
			return res.status(200).json(View.render(value))
		} catch (error) {
			return res.sendStatus(400)
		}
	},


	async delete(req: Request, res: Response) {
		const {id} = req.params
		try {
			const repository = getRepository(Imoveis)
			await repository.delete(id)
			return res.sendStatus(204).send("deletado com sucesso")
		} catch (error) {
			return res.sendStatus(400)
		}
	},


	async search(req: Request, res: Response) {
		const {
			tipo,
			quarto,
			vagas,
			metragem
		} = req.query
		console.log(!!quarto)
		try {
			const repository = getRepository(Imoveis)
			const result = await repository.find({
				where: [
					{tipo},
					{quarto},
					{vagas},
					{metragem},
				]
			})
			return res.status(200).json(View.renderMany(result))
		} catch (error) {
			return res.sendStatus(400)
		}
	},


	async index(req: Request, res: Response) {
		try {
			const repository = getRepository(Imoveis)
			const result = await repository.find()
			return res.status(200).json(View.renderMany(result))
		} catch (error) {
			return res.sendStatus(400)
		}
	},

	async show(req: Request, res: Response) {
		const {id} = req.params
		try {
			const repository = getRepository(Imoveis)
			const value = await repository.findOneOrFail(id)
			return res.status(201).json(View.render(value))
		} catch (error) {
			return res.sendStatus(400)
		}
	},
}
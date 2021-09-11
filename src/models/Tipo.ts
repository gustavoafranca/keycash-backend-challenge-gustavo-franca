import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Imoveis from "./Imovel";


@Entity('tipo')
export default class Tipo {
	
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: 'varchar',
	})
	tipo: string;

	@OneToMany(type => Imoveis, tipo => Tipo)
	imoveis: Imoveis[];

	@CreateDateColumn()
	createAT: Date;

	@UpdateDateColumn()
	updateAT: Date;
}
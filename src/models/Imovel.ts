import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Tipo from "./Tipo";


@Entity('imoves')
export default class Imoveis {
	
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	quarto: number;

    @Column()
    metragem: number;

    @Column()
    vagas: number;

    @ManyToOne(type => Tipo, imoveis => Imoveis)
    tipo: Tipo;

	@CreateDateColumn()
	createAT: Date;

	@UpdateDateColumn()
	updateAT: Date;
}
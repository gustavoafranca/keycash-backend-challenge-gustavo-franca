import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTable1631401332253 implements MigrationInterface {
    name = 'CreateTable1631401332253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`db\`.\`tipo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tipo\` varchar(255) NOT NULL, \`createAT\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateAT\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`db\`.\`imoves\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quarto\` int NOT NULL, \`metragem\` int NOT NULL, \`vagas\` int NOT NULL, \`createAT\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateAT\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`tipoId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`db\`.\`imoves\` ADD CONSTRAINT \`FK_4d6a6f22c5e0117dcfafb782121\` FOREIGN KEY (\`tipoId\`) REFERENCES \`db\`.\`tipo\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`db\`.\`imoves\` DROP FOREIGN KEY \`FK_4d6a6f22c5e0117dcfafb782121\``);
        await queryRunner.query(`DROP TABLE \`db\`.\`imoves\``);
        await queryRunner.query(`DROP TABLE \`db\`.\`tipo\``);
    }

}

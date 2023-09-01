import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableTransactions1692828310518 implements MigrationInterface {
    name = 'createTableTransactions1692828310518'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transations" ("id" SMALLSERIAL NOT NULL, "userId" smallint NOT NULL, "date" TIMESTAMP WITH TIME ZONE NOT NULL, "transationType" character varying(64) NOT NULL, "description" character varying(128) NOT NULL, "value" integer NOT NULL, "status" character varying(64) NOT NULL, CONSTRAINT "PK_beb741830c6886e50cfd424877f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SMALLSERIAL NOT NULL, "name" character varying(64) NOT NULL, "gender" character varying(10) NOT NULL, "email" character varying(64) NOT NULL, "adress" character varying(128) NOT NULL, "phone" character varying(15) NOT NULL, "passwordHash" character varying(1024) NOT NULL, "saldo" double precision NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "transations" ADD CONSTRAINT "FK_5542b653cc0663ede29cdcaaaf8" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transations" DROP CONSTRAINT "FK_5542b653cc0663ede29cdcaaaf8"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "transations"`);
    }

}

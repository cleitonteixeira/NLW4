import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1614288423016 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: "users",
                columns: [
                    {
                        name: "idUser",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "Nome",
                        type: "varchar"
                    },
                    {
                        name: "Email",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}

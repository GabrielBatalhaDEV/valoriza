import {
    MigrationInterface,
    QueryRunner,
    Table
} from "typeorm";

export class CreateUsers1626192745162 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise < void > {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [{
                        name: 'id',
                        type: "uuid", //Universal Unique ID,
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'email',
                        type: 'varchar'
                    },
                    {
                        name: 'admin',
                        type: "boolean",
                        default: false
                    },
                    {
                        name: 'created_at',
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: 'Updated_at',
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }
    public async down(queryRunner: QueryRunner): Promise < void > {
        await queryRunner.dropTable('users')
    }
}
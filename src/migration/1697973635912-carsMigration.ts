import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CarsMigration1697973635912 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cars",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "model",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "kilometers",
                        type: "int",
                        length: "8",
                    },
                    {
                        name: "userId",
                        type: "int",
                        isUnique: true
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ["userId"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    }
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cars")
    }

}

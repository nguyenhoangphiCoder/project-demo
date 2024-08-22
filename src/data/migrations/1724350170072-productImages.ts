import { Column, MigrationInterface, QueryRunner, Table } from 'typeorm';

export class ProductImages1724350170072 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'productImages',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'createAt',
            type: 'timeStamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updateAt',
            type: 'timeStamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'imageUrl',
            type: 'varchar',
          },
          {
            name: 'productId',
            type: 'int',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['productId'],
            referencedTableName: 'products',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('productImages');
  }
}

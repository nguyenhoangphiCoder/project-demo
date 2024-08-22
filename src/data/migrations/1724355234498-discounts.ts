import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Discounts1724355234498 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'discounts',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'discountType',
            type: 'enum',
            enum: ['%', 'fixed'],
          },
          {
            name: 'discountAmount',
            type: 'int',
          },
          {
            name: 'expiredAt',
            type: 'datetime',
          },
          {
            name: 'startAt',
            type: 'datetime',
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['active', 'inactive'],
          },
          {
            name: 'adminId',
            type: 'int',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['adminId'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('discounts');
  }
}

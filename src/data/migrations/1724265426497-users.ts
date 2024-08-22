import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Users1724265426497 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true, //mang y nghiax khoa chinh
            isGenerated: true, //gia tri dduoc tao tu dong
            generationStrategy: 'increment', //tang
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true, //dam bao duy nhat
          },
          {
            name: 'role',
            type: 'enum',
            enum: ['admin', 'buyer'], //mang y nghia chi nhan admin vaf buyer
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP', //mac dinh thoi gian hien tai
          },
          {
            name: 'updateAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP', //mac dinh thoi gian hien tai
            onUpdate: 'CURRENT_TIMESTAMP', //tu dong cap nhat ban ghi duoc chinh sua
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Products1724349160056 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Products',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'createAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updateAt',
            type: 'timeStamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'quantity',
            type: 'int',
            default: 0,
          },
          {
            name: 'quantitySold',
            type: 'int',
          },
          {
            name: 'price',
            type: 'int',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['userId'], // Cột 'userId' trong bảng hiện tại sẽ là khóa ngoại.
            referencedTableName: 'users', // Bảng 'users' là bảng mà khóa ngoại tham chiếu tới.
            referencedColumnNames: ['id'], // Cột 'id' trong bảng 'users' là cột mà khóa ngoại tham chiếu tới.
            onDelete: 'CASCADE', // Nếu một hàng trong bảng 'users' bị xóa, tất cả các hàng liên quan trong bảng hiện tại cũng sẽ bị xóa theo.
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Products');
  }
}

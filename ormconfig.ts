import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'LAPTOP-55DIT0G6',
  port: 3306,
  username: 'root',
  password: 'nguyenhoangphi',
  database: 'demoorm',
});
export default AppDataSource;

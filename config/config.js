module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD_ENV,
    database: 'santri_management_system_dev',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: console.log
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
}

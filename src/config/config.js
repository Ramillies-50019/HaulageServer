module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'testhaul',
    user: process.env.DB_USER || 'haulageapi',
    password: process.env.DB_PASS || 'haulageapi',
    options: {
      host: process.env.DB_HOST || 'localhost',
      dialect: process.env.DB_DIALECT || 'mysql'
    }
  }
}

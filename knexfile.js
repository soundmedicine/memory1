module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgres:///memory1'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};

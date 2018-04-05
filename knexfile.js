require('dotenv').load()

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///memory1'
    
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }

};

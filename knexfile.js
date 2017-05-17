// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/galvanize_classified_dev'
  },
  test: {client: 'pg',
  connection: 'postgres://localhost/galvanize_classified_test'
  },
  production: { },

};

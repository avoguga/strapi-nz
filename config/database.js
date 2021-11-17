module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'database-1.cqgq8vf4adxm.eu-central-1.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'bd_nz_testing'),
        username: env('DATABASE_USERNAME', 'nz360'),
        password: env('DATABASE_PASSWORD', 'nz360teste'),
      },
      options: {},
    },
  },
});

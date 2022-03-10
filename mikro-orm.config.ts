import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';

const {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASS,
} = process.env;

const config: MikroOrmModuleSyncOptions = {
  type: 'postgresql',
  entities: ['./dist/src/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],

  // DB CONNECTION
  dbName: DATABASE_NAME,
  host: DATABASE_HOST,
  port: parseInt(DATABASE_PORT, 10),
  user: DATABASE_USER,
  password: DATABASE_PASS,

  seeder: {
    path: './dist/seeders', // path to the folder with seeders
    pathTs: './seeders', // path to the folder with TS seeders (if used, we should put path to compiled files in `path`)
    defaultSeeder: 'DatabaseSeeder', // default seeder class name
    glob: '!(*.d).{js,ts}', // how to match seeder files (all .js and .ts files, but not .d.ts)
    emit: 'ts', // seeder generation mode
    fileName: (className: string) => className, // seeder file naming convention
  },
};

export default config;

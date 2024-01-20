import { MikroORM } from '@mikro-orm/sqlite';
import { User } from './user.entity';
import { Address } from './address.entity';

let orm: MikroORM;

beforeAll(async () => {
  orm = await MikroORM.init({
    dbName: 'sqlite.db',
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    debug: ['query', 'query-params'],
    allowGlobalContext: true, // only for testing
  });
  await orm.schema.refreshDatabase();
});

afterAll(async () => {
  await orm.close(true);
});

test('basic CRUD example', async () => {
  await orm.em.find(Address, {user: { email: 'me@example.com' } }, { populate: ['user'] });
});

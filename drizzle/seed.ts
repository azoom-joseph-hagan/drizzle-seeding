import process from 'node:process'
import { user } from './schema/user'
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import schema from './schema/schema'
// import { db } from '.'

async function seed() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL!)

  const db = drizzle(connection, { schema, mode: 'default' })

  // database teardown
  await db.delete(user)
  console.log('Seeding...')

  for (let i = 0; i < 10; i++) {
    await db.insert(user).values({
        name: 'Hello'
    })
  }
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    console.log('Seeding done!')
    process.exit(0)
  })

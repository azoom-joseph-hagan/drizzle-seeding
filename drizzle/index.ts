import process from 'node:process'
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import schema from './schema/schema'

export const connection = await mysql.createConnection(process.env.DATABASE_URL!)

const db = drizzle(connection, { schema, mode: 'default' })

export { db }

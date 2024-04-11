import process from 'node:process'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './drizzle/schema/*',
  out: './drizzle/',
  breakpoints: true,
  driver: 'mysql2',
  dbCredentials: {
    uri: process.env.DATABASE_URL || '',
  },
  verbose: true,
  strict: true,
})

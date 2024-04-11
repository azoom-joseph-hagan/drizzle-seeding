import { index, int, mysqlTable, text } from "drizzle-orm/mysql-core";

export const user = mysqlTable('user', {
    id: int("id").primaryKey().autoincrement(),
    name: text('name').notNull(),
}, (user) => ({
    userId: index('user_idx').on(user.id)
}))
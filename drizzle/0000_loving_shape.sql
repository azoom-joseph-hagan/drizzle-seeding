CREATE TABLE `user` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` text,
	CONSTRAINT `user_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `user_idx` ON `user` (`id`);
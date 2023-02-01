-- -------------------------------------------------------------
-- TablePlus 5.1.0(468)
--
-- https://tableplus.com/
--
-- Database: test-app
-- Generation Time: 2023-01-24 00:09:03.1220
-- -------------------------------------------------------------


DROP TABLE IF EXISTS "public"."calendar";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS calendar_id_seq;

-- Table Definition
CREATE TABLE "public"."calendar" (
    "id" int4 NOT NULL DEFAULT nextval('calendar_id_seq'::regclass),
    "movie_id" int8,
    "start_time" timestamp,
    "end_time" timestamp,
    "room" varchar,
    "language" varchar,
    "3d" bool,
    "imax" bool,
    CONSTRAINT "calendar_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "public"."movies"("id"),
    PRIMARY KEY ("id")
);

INSERT INTO "public"."calendar" ("id", "movie_id", "start_time", "end_time", "room", "language", "3d", "imax") VALUES
(1, 1, '2023-01-21 08:00:00', '2023-01-21 11:00:00', '4', 'OV', 't', 'f'),
(2, 1, '2023-01-21 08:00:00', '2023-01-21 11:00:00', '3', 'OV', 't', 't'),
(3, 1, '2023-01-21 08:00:00', '2023-01-21 11:00:00', '2', 'DE', 't', 'f');

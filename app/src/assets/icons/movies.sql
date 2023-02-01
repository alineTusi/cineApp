-- -------------------------------------------------------------
-- TablePlus 5.1.0(468)
--
-- https://tableplus.com/
--
-- Database: test-app
-- Generation Time: 2023-01-24 00:09:55.6330
-- -------------------------------------------------------------


DROP TABLE IF EXISTS "public"."movies";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS movies_id_seq;

-- Table Definition
CREATE TABLE "public"."movies" (
    "id" int4 NOT NULL DEFAULT nextval('movies_id_seq'::regclass),
    "title" varchar,
    "description" varchar,
    "rating" varchar,
    "start_date" timestamp,
    "end_date" timestamp,
    "genre" varchar,
    "img_url" varchar,
    "banner_url" varchar,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."movies" ("id", "title", "description", "rating", "start_date", "end_date", "genre", "img_url", "banner_url") VALUES
(1, 'Avatar the way of water', 'Jake Sully and Ney''tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.', '4.5', '2023-01-01 07:00:00', '2023-03-21 10:00:00', 'Fantasy', '', 'https://cinedope.com/wp-content/uploads/2022/10/Avatar-the-way-of-water.jpg'),
(6, 'Top Gun: Maverick', 'Thirty years of service leads Maverick to train a group of elite TOPGUN graduates to prepare for a high-profile mission while Maverick battles his past demons.', '4.7', '2022-12-30 23:00:00', '2023-02-28 23:00:00', 'Action', '', 'https://i.postimg.cc/G2Sp8XRv/IMG-20220825-142422-345.jpg'),
(8, 'Morbius', 'Determined to cure the disease that has plagued him his entire life, Morbius conducts a drastic experiment, which bears unforeseen consequences.', '5.2', '2022-11-30 22:00:00', '2023-02-28 22:00:00', 'Fantasy', '', 'https://cdn.murphysmultiverse.com/wp-content/uploads/2022/04/review_morbius.jpg'),
(9, 'Black Adam', 'After being bestowed with godly powers and imprisoned for it, Black Adam is liberated from his earthly binds to unleash his fury on the modern world.', '3.1', '2022-12-30 21:00:00', '2023-02-28 21:00:00', 'Action', 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/10/box-office-black-adam-stays-decent-on-friday-is-the-top-performing-film-amidst-competition-001.jpg', '');

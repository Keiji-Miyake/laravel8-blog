/* create databases */
CREATE DATABASE IF NOT EXISTS `dusk_test`;

/* give access to database */
GRANT ALL PRIVILEGES ON dusk_test.* TO 'sail'@'%';

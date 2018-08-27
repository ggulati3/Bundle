DROP DATABASE IF EXISTS bundle_packages;
CREATE DATABASE bundle_packages;

\c bundle_packages;

DROP TABLE IF EXISTS netflixBundle;

CREATE TABLE netflixBundle (
  id SERIAL PRIMARY KEY,
  username varchar(100) NOT NULL,
  first_name varchar(100) NOT NULL,
  last_initial varchar(1) NOT NULL,
  cc_holder boolean NOT NULL,
  matched boolean NOT NULL

);



\copy netflixBundle (id, username, first_name, last_initial, cc_holder, matched) from './netflixbundle.csv' DELIMITERS ',' CSV;

CREATE index on netflixbundle (matched);
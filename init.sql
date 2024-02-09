CREATE USER admin WITH PASSWORD 'password';
CREATE DATABASE registry WITH OWNER admin;

\c registry;

CREATE EXTENSION tablefunc;

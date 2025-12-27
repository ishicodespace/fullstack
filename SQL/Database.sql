-- SQL is a programming language used to interact with relational databases.
-- It allows users to create, read, update, and delete data stored in databases.
-- It uses tables (relations) to represent data and relationships between data. 
-- A database can have multiple tables, and each table consists of rows and columns.
-- eg. MySQL, PostgreSQL, Oracle Database.

-- No SQL are non-relational databases that store data in formats like key-value pairs, documents, graphs.
-- eg. MongoDB, Cassandra, Redis.

-- create a database
CREATE DATABASE IF NOT EXISTS student;
--or CREATE DATABASE student;

-- delete the database
DROP DATABASE IF EXISTS college;
--or DROP DATABASE college;

-- use the created database and create a table
USE college;

--show all databases
SHOW DATABASES;

--show all tables in the database
SHOW TABLES;
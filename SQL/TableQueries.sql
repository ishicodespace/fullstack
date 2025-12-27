-- create a table (define schema/what columns it will have)
CREATE TABLE IF NOT EXISTS students (
    -- column_name data_type constraints
    id INT PRIMARY KEY NOT NULL, 
    name VARCHAR(100) NOT NULL, 
    age INT NOT NULL,
    grade VARCHAR(10) NOT NULL,
    email VARCHAR(100) UNIQUE,
    teacher_id INT,
    FOREIGN KEY (teacher_id) REFERENCES teachers(id), --the teacher_id in students references id in teachers
    CONSTRAINT age_check CHECK (age >= 10 AND age <=18 )
);

--insert data into the table
INSERT INTO students (id, name, age, grade, email) --sequence of columns
VALUES
(1, 'Alice', 20, 'A', 'alice@gmail.com'),
(2, 'Bob', 22, 'B', 'bob@gmail.com'),
(3, 'Charlie', 21, 'A', 'charlie@gmail.com');

--display all rows from the table
SELECT * FROM students;

--display specific columns from the table
SELECT name, grade FROM students;
SELECT DISTINCT grade FROM students; --unique grades only

--delete the table
DROP TABLE IF EXISTS students;

--constraint: a rule enforced on data columns
--NOT NULL: column cannot have a NULL value
--UNIQUE: values in a column are unique
--DEFAULT: sets a default value for a column
--CHECK: limit the values allowed in a column

--key constraints:
--PRIMARY KEY: makes a column unique and not null (only one pk per table)
--FOREIGN KEY: references to a primary key in another table to create relationships (multiple fks allowed, duplicates allowed, can be null)

CREATE TABLE IF NOT EXISTS teachers (
    id INT PRIMARY KEY NOT NULL,
    teacher_name VARCHAR(100) NOT NULL,
    subject VARCHAR(50) NOT NULL,
);

--update data in the table
UPDATE students
SET teacher_id = 1
WHERE id = 1;

--delete data from the table
DELETE FROM students
WHERE id = 2;

--alter table: modify the structure of an existing table
--add a new column
ALTER TABLE students
ADD COLUMN phone VARCHAR(15);

--truncate table: remove all rows from a table but keep the structure
TRUNCATE TABLE students;

--Clauses are used to define conditions.
--eg. WHERE, LIMIT, ORDER BY 
-- WHERE clause: filter records based on a condition
SELECT * FROM students
WHERE age > 18;

-- AND, OR, NOT,BETWEEN, IN operators with WHERE clause 
SELECT * FROM students
WHERE age > 18 AND grade = 'A';

SELECT * FROM students
WHERE age > 18 OR grade = 'B';

SELECT * FROM students
WHERE NOT grade = 'C';

--selects from a given range
SELECT * FROM students
WHERE age BETWEEN 15 AND 18;

--matches any value in a list
SELECT * FROM students
WHERE grade IN ('A', 'B');

--LIMIT clause: limit the number of records returned
SELECT * FROM students
LIMIT 5; --returns first 5 records

--ORDER BY clause: sort the result set in ascending (default) or descending order DESC
SELECT * FROM students
ORDER BY age ASC; --sort by age in ascending order

--AGGREGATE FUNCTIONS: perform a calculation on a set of values and return a single value
--COUNT(), SUM(), AVG(), MAX(), MIN()
SELECT COUNT(age) FROM students WHERE age > 18;
SELECT MIN(age) FROM students;
SELECT MAX(age) FROM students;
SELECT AVG(age) FROM students;
SELECT SUM(age) FROM students;

--GROUP BY clause: group rows that have the same values in specified columns into summary rows
SELECT grade, COUNT(*) FROM students
GROUP BY grade;

--HAVING clause: similar to WHERE but used with GROUP BY to filter groups
SELECT grade, COUNT(*) FROM students
GROUP BY grade
HAVING COUNT(*) > 1;

--GENERAL SYNTAX ORDER:
--SELECT column1, column2
--FROM table_name
--WHERE condition
--GROUP BY column
--HAVING condition
--ORDER BY column

#All Contries that speak Slovene
SELECT c.name, l.language, l.percentage
FROM countries c 
JOIN languages l ON c.code = l.country_code
WHERE l.language = 'Slovene'
ORDER BY c.name DESC;

#total number of cities
SELECT countries.name, count(cities.id) as total_cities
FROM countries 
JOIN cities  on countries.id = cities.country_id
GROUP BY (countries.name)
ORDER BY countries.name ASC;

#All cities in mexico with population higher than 500000
SELECT cities.name, cities.population
from countries
JOIN cities ON countries.id = cities.country_id
WHERE cities.population > 500000 AND countries.name = "Mexico"
ORDER BY cities.name DESC;

#All languages with percentages higher than 89%
SELECT c.name, l.language, l.percentage
FROM countries c 
JOIN languages l ON c.code = l.country_code
WHERE l.percentage > 89.0
ORDER BY l.percentage DESC;

#All Countries with Surface Area below 501 and population > 100000
SELECT name, surface_area, population
from countries
WHERE surface_area < 501 AND population > 100000;

#Constitutional monarchy, capital > 200 life expactancy > 75
SELECT name, government_form, capital, life_expectancy
FROM countries 
WHERE government_form = 'Constitutional Monarchy' AND capital > 200 AND life_expectancy > 75;

#7
SELECT countries.name ,cities.name, cities.district, cities.population
FROM countries
JOIN cities ON countries.id = cities.country_id
WHERE countries.name = 'Argentina' AND cities.district = 'Buenos Aires' AND cities.population > 100000;

#8
SELECT countries.region, count(countries.id) as countries_in_regon
FROM countries
GROUP BY countries.region
ORDER BY countries.region DESC

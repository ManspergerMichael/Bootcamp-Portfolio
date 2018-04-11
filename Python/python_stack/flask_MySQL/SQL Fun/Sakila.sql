# 1 Get all customers in city_id = 312
#Origonaly joined three tables, found I could do it with just two tables
SELECT cust.first_name, cust.last_name, cust.email,CONCAT(addr.address, addr.address2) AS Address
FROM address addr
JOIN customer cust ON cust.address_id = addr.address_id
WHERE addr.city_id = 312;

#2 Get all comedy films
SELECT film.title, film.description, film.release_year, film.rating, film.special_features, cat.name
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category cat ON film_category.category_ID = cat.category_ID
WHERE cat.name = 'Comedy';

#3 all films staring actor_id = 5
SELECT act.actor_id, act.first_name, act.last_name, film.title, film.description, film.release_year
FROM film
JOIN film_actor fa ON film.film_id = fa.film_id
JOIN actor act ON fa.actor_id = act.actor_id
WHERE act.actor_id = 5;

#4
SELECT cust.first_name, cust.last_name, cust.email, CONCAT(addr.address, addr.address2) AS Address
FROM store
JOIN customer cust ON store.store_id = cust.store_id
JOIN address addr ON cust.address_id = addr.address_id
WHERE store.store_id = 1 AND addr.city_id IN (1,42,312,459);

#5
SELECT film.title, film.description, film.release_year, film.rating, film.special_features
FROM film
WHERE film.rating = 'G' AND special_features LIKE 'behind%';

#6
SELECT film.film_id, film.title, act.actor_id, CONCAT(act.first_name, ' ', act.last_name) AS Name
from film
JOIN film_actor fa ON film.film_id = fa.film_id
JOIN actor act ON fa.actor_id = act.actor_id
WHERE film.film_id = 369;

#7
SELECT film.title, film.description, film.release_year, film.rating, film.special_features, cat.name
FROM film
JOIN film_category fc ON film.film_id = fc.film_id
JOIN category cat ON fc.category_id = cat.category_id 
WHERE film.rental_rate =2.99 AND cat.name = 'Drama';

#8
SELECT film.title, film.description, film.release_year, film.rating, film.special_features, cat.name, CONCAT(act.first_name, ' ', act.last_name) as Actor
FROM film
JOIN film_category fc ON film.film_id = fc.film_id
JOIN category cat ON fc.category_id = cat.category_id
JOIN film_actor fa ON film.film_id = fa.film_id
JOIN actor act ON fa.actor_id = act.actor_id 
WHERE act.first_name = 'Sandra' AND act.last_name ='Kilmer' AND cat.name = 'Action'; 
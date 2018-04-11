INSERT INTO users (id,first_name,last_name,created_at,updated_at) values(1, 'Bill', 'Baxby', now(),now());
INSERT INTO users (id,first_name,last_name,created_at,updated_at) values(2, 'LuLu', 'Gerosia', now(),now());
INSERT INTO users (id,first_name,last_name,created_at,updated_at) values(3, 'Jerry', 'Smith', now(),now());
INSERT INTO users (id,first_name,last_name,created_at,updated_at) values(4, 'Millhouse', 'Vanhuten', now(),now());

INSERT INTO friendships(id,users_id,friend_id, created_at, updated_at) values(1,1,2,now(),now());
INSERT INTO friendships(id,users_id,friend_id, created_at, updated_at) values(2,2,1,now(),now());
INSERT INTO friendships(id,users_id,friend_id, created_at, updated_at) values(3,3,1,now(),now());
INSERT INTO friendships(id,users_id,friend_id, created_at, updated_at) values(4,4,3,now(),now());
#Bill is friends with LuLu, LuLu is friends with Bill, Jerry is friends with Bill and nobody likes Millhouse
SELECT u.first_name,u.last_name, user2.first_name AS firend_first_name,user2.last_name AS friend_last_name
FROM users u
LEFT JOIN friendships f ON u.id = f.users_id
LEFT JOIN users AS user2 ON f.friend_id = user2.id;

#DELETE FROM USERS WHERE id = 3;
#DELETE FROM FRIENDSHIPS WHERE id = 3;
SELECT * FROM messages;
SELECT * FROM users;
SELECT * FROM comments;

INSERT INTO users (first_name,last_name,email,password,created_at,updated_at) values('Michael','Mansperger','asd@asd.com','root',now(),now());
INSERT INTO users (first_name,last_name,email,password,created_at,updated_at) values('Wiggles','The Wonder Puppy','woof@doge.com','root',now(),now());

INSERT INTO messages(message, created_at,updated_at,users_id)values("Who's a good boy?",now(),now(),1);
INSERT INTO comments(users_id, messages_id,comment,created_at,updated_at)values(2,1,"Woof!",now(),now());

INSERT INTO messages(message, created_at,updated_at,users_id)values("Bork!",now(),now(),2);
INSERT INTO comments(users_id, messages_id,comment,created_at,updated_at)values(1,3,"I'ts just the mail man!",now(),now());

#DROP DATABASE TheWall;

SELECT u.first_name, u.last_name, m.message, m.created_at
FROM users u
JOIN messages m ON u.id = m.users_id
ORDER BY m.created_at desc;

SELECT c.comment, u.first_name,u.last_name,c.created_at, c.messages_id
FROM messages m
JOIN comments c ON c.messages_id = m.id
JOIN users u ON c.users_id = u.id 
WHERE c.messages_id = 1
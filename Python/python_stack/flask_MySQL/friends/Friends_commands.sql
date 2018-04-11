INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at)
VALUES ("Jay", "Patel", "Instructor", NOW(), NOW());
INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at)
VALUES ("Jimmy", "Jun", "Instructor", NOW(), NOW());
INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at)
VALUES ("Peter", "Quill", "Guardian of The Galixy", NOW(), NOW());

select * from friends;
delete from friends where id IN(3,4,5,6) ;

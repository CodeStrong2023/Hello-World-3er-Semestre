SELECT * FROM estudiantes2024;
DELETE FROM estudiantes2024 WHERE idestudiantes2024=1;
DELETE FROM estudiantes2024 WHERE idestudiantes2024=2;
DELETE FROM estudiantes2024 WHERE idestudiantes2024=3;
DELETE FROM estudiantes2024 WHERE idestudiantes2024=4;
DELETE FROM estudiantes2024 WHERE idestudiantes2024=5;
DELETE FROM estudiantes2024 WHERE idestudiantes2024=6;
DELETE FROM estudiantes2024 WHERE idestudiantes2024=7;
DELETE FROM estudiantes2024 WHERE idestudiantes2024=8;
DELETE FROM estudiantes2024 WHERE idestudiantes2024=9;
DELETE FROM estudiantes2024 WHERE idestudiantes2024=10;
DELETE FROM estudiantes2024 WHERE idestudiantes2024=11;
DELETE FROM estudiantes2024 WHERE idestudiantes2024=14;
DELETE FROM estudiantes2024 WHERE idestudiantes2024=15;

-- Para modificar el idestudiantes2024 y comience en 1
ALTER TABLE estudiantes2024 AUTO_INCREMENT = 1;

INSERT INTO estudiantes2024 (nombre, apellido, telefono, email) VALUES ("Juan", "Perez", "0506006466", "juanperez@gmail.com");

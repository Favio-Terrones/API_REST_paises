CREATE DATABASE IF NOT EXISTS paisesdb;

USE paisesdb;


CREATE TABLE paises (
      
      id INT NOT NULL AUTO_INCREMENT ,
      pais VARCHAR(60) NULL,
      capital  VARCHAR(60) NULL,
      poblacion VARCHAR(250) NULL,
      region  VARCHAR(45) NULL,
      bandera VARCHAR(300) NULL,
      PRIMARY KEY (id)
);

DESC paises;



INSERT INTO paises VALUES
      (1,'Perú','Lima','33.36 millones','America','https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg'),
      (2,'Chile','Santiago de Chile','19.21 millones','America','https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg'),
      (3,'Argentina','Buenos Aires','45.81 millones','America','https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg'),
      (4,'Ecuador','Quito','17.89 millones','America','https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg');
      

 
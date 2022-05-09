CREATE DATABASE `imoveis` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

-- imoveis.category definition
CREATE TABLE `category` (
  `code` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`code`),
  UNIQUE KEY `IDX_23c05c292c439d77b0de816b50` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- imoveis.address definition
CREATE TABLE `address` (
  `code` int NOT NULL AUTO_INCREMENT,
  `cep` varchar(255) NOT NULL,
  `logradouro` varchar(255) NOT NULL,
  `bairro` varchar(255) NOT NULL,
  `localidade` varchar(255) NOT NULL,
  `uf` varchar(255) NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- imoveis.product definition

CREATE TABLE `product` (
  `code` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `whatsapp` varchar(255) NOT NULL,
  `value` double NOT NULL,
  `categoryCodeCode` int DEFAULT NULL,
  `addressCode` int DEFAULT NULL,
  PRIMARY KEY (`code`),
  UNIQUE KEY `REL_64506b64424f4d7bb50574ecb1` (`addressCode`),
  KEY `FK_a407de6c1e54ba5d580427e78e9` (`categoryCodeCode`),
  CONSTRAINT `FK_64506b64424f4d7bb50574ecb13` FOREIGN KEY (`addressCode`) REFERENCES `address` (`code`),
  CONSTRAINT `FK_a407de6c1e54ba5d580427e78e9` FOREIGN KEY (`categoryCodeCode`) REFERENCES `category` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO imoveis.address (code, cep, logradouro, bairro, localidade, uf) VALUES(1, '01001-000', 'Praça da Sé"', 'Sé', 'São Paulo', 'SP');
INSERT INTO imoveis.address (code, cep, logradouro, bairro, localidade, uf) VALUES(2, '01001-000', 'Praça da Sé"', 'Sé', 'São Paulo', 'SP');
INSERT INTO imoveis.address (code, cep, logradouro, bairro, localidade, uf) VALUES(3, '01001-000', 'Praça da Sé"', 'Sé', 'São Paulo', 'SP');
INSERT INTO imoveis.address (code, cep, logradouro, bairro, localidade, uf) VALUES(4, '01001-000', 'Praça da Sé"', 'Sé', 'São Paulo', 'SP');
INSERT INTO imoveis.address (code, cep, logradouro, bairro, localidade, uf) VALUES(5, '01001-000', 'Praça da Sé"', 'Sé', 'São Paulo', 'SP');
INSERT INTO imoveis.address (code, cep, logradouro, bairro, localidade, uf) VALUES(6, '01001-000', 'Praça da Sé"', 'Sé', 'São Paulo', 'SP');
INSERT INTO imoveis.address (code, cep, logradouro, bairro, localidade, uf) VALUES(6, '01001-000', 'Praça da Sé"', 'Sé', 'São Paulo', 'SP');

INSERT INTO imoveis.category (code, name) VALUES(1, 'Casas');
INSERT INTO imoveis.category (code, name) VALUES(2, 'Apartamentos');
INSERT INTO imoveis.category (code, name) VALUES(3, 'Mansões');

INSERT INTO imoveis.product (code, name, image, whatsapp, value, categoryCode,addressCode) VALUES(2, 'casa de praia', 'https://github.com/norberto-jn/imoveis-img/blob/main/item_002.jpg?raw=true', '31999999999', 1000.0, 1,1);
INSERT INTO imoveis.product (code, name, image, whatsapp, value, categoryCode,addressCode) VALUES(1, 'casa de praia', 'https://github.com/norberto-jn/imoveis-img/blob/main/item_001.jpg?raw=true', '31999999999', 1000.0, 1,2);
INSERT INTO imoveis.product (code, name, image, whatsapp, value, categoryCode,addressCode) VALUES(3, 'casa de praia', 'https://github.com/norberto-jn/imoveis-img/blob/main/item_003.jpg?raw=true', '31999999999', 1000.0, 2,3);
INSERT INTO imoveis.product (code, name, image, whatsapp, value, categoryCode,addressCode) VALUES(4, 'casa de praia', 'https://github.com/norberto-jn/imoveis-img/blob/main/item_004.jpg?raw=true', '31999999999', 1000.0, 2,4);
INSERT INTO imoveis.product (code, name, image, whatsapp, value, categoryCode,addressCode) VALUES(5, 'casa de praia', 'https://github.com/norberto-jn/imoveis-img/blob/main/item_005.jpg?raw=true', '31999999999', 1000.0, 2,5);
INSERT INTO imoveis.product (code, name, image, whatsapp, value, categoryCode,addressCode) VALUES(6, 'casa de praia', 'https://github.com/norberto-jn/imoveis-img/blob/main/item_006.jpg?raw=true', '31999999999', 1000.0, 2,6);
CREATE DATABASE `imoveis` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

-- imoveis.category definition
CREATE TABLE `category` (
  `code` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`code`),
  UNIQUE KEY `IDX_23c05c292c439d77b0de816b50` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- imoveis.product definition
CREATE TABLE `product` (
  `code` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `whatsapp` varchar(255) NOT NULL,
  `value` double NOT NULL,
  `categoryCodeCode` int DEFAULT NULL,
  PRIMARY KEY (`code`),
  KEY `FK_a407de6c1e54ba5d580427e78e9` (`categoryCodeCode`),
  CONSTRAINT `FK_a407de6c1e54ba5d580427e78e9` FOREIGN KEY (`categoryCodeCode`) REFERENCES `category` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--insert imoveis.category
INSERT INTO imoveis.category (code, name) VALUES(1, 'Casas');
INSERT INTO imoveis.category (code, name) VALUES(2, 'Apartamentos');
INSERT INTO imoveis.category (code, name) VALUES(3, 'Mansões');	

--insert imoveis.product
INSERT INTO imoveis.product (code, name, image, whatsapp, value, categoryCodeCode) VALUES(1, 'casa de praia', 'https://github.com/norberto-jn/imoveis-img/blob/main/item_001.jpg?raw=true', '31999999999', 1000.0, 1);
INSERT INTO imoveis.product (code, name, image, whatsapp, value, categoryCodeCode) VALUES(2, 'casa de praia', 'https://github.com/norberto-jn/imoveis-img/blob/main/item_002.jpg?raw=true', '31999999999', 1000.0, 1);
INSERT INTO imoveis.product (code, name, image, whatsapp, value, categoryCodeCode) VALUES(3, 'casa de praia', 'https://github.com/norberto-jn/imoveis-img/blob/main/item_003.jpg?raw=true', '31999999999', 1000.0, 2);
INSERT INTO imoveis.product (code, name, image, whatsapp, value, categoryCodeCode) VALUES(4, 'casa de praia', 'https://github.com/norberto-jn/imoveis-img/blob/main/item_004.jpg?raw=true', '31999999999', 1000.0, 2);
INSERT INTO imoveis.product (code, name, image, whatsapp, value, categoryCodeCode) VALUES(5, 'casa de praia', 'https://github.com/norberto-jn/imoveis-img/blob/main/item_005.jpg?raw=true', '31999999999', 1000.0, 2);
INSERT INTO imoveis.product (code, name, image, whatsapp, value, categoryCodeCode) VALUES(6, 'casa de praia', 'https://github.com/norberto-jn/imoveis-img/blob/main/item_006.jpg?raw=true', '31999999999', 1000.0, 2);


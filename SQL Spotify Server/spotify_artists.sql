-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: spotify
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artists`
--

DROP TABLE IF EXISTS `artists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artists` (
  `ArtistId` int NOT NULL AUTO_INCREMENT,
  `artistName` varchar(255) DEFAULT NULL,
  `followers` int DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `popularity` int DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ArtistId`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artists`
--

LOCK TABLES `artists` WRITE;
/*!40000 ALTER TABLE `artists` DISABLE KEYS */;
INSERT INTO `artists` VALUES (4,'Pitbull',9276653,'https://i.scdn.co/image/ab6761610000e5eb2dc40ac263ef07c16a95af4e',87,'dance pop'),(5,'Future',11456558,'https://i.scdn.co/image/ab6761610000e5eb24e41f491b129093a6fee383',94,'atl hip hop'),(6,'Justin Bieber',60254768,'https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36',97,'canadian pop'),(7,'Miranda Lambert',3154682,'https://i.scdn.co/image/ab6761610000e5ebd155caf6e83268ad61be09cd',77,'contemporary country'),(8,'Ava Max',5200044,'https://i.scdn.co/image/ab6761610000e5eb27a772a3d3f62f6fc990ce0f',86,'dance pop'),(9,'Carla Morrison',3015634,'https://i.scdn.co/image/ab6761610000e5eb13cbe72a36665158e26fa19c',75,'mexican pop'),(10,'Lil Tjay',5031102,'https://i.scdn.co/image/ab6761610000e5ebbc1085cf5d08b85cd1836ca2',87,'brooklyn drill'),(11,'beabadoobee',1000444,'https://i.scdn.co/image/ab6761610000e5ebc8b4ad8a13f54ee2a5184838',76,'bedroom pop'),(12,'Tegan and Sara',577250,'https://i.scdn.co/image/ab6761610000e5ebf9729da14c09a18e655ba469',62,'canadian indie'),(13,'Raphaella',6502,'https://i.scdn.co/image/ab6761610000e5ebcdc923ffdbd4e082a668af9e',58,'uk alternative pop'),(14,'Giveon',2102194,'https://i.scdn.co/image/ab6761610000e5eb20db290beb52475704f64403',83,'pop'),(15,'MAX',746333,'https://i.scdn.co/image/ab6761610000e5eb09ce0644c08fa03347ef8928',74,'dance pop'),(16,'Sam Smith',19420812,'https://i.scdn.co/image/ab6761610000e5eb7f9cb6cb3ac6f8a055153ced',87,'dance pop'),(17,'Chris Janson',268720,'https://i.scdn.co/image/ab6761610000e5ebb0b4302f5838ff8418f6031e',66,'contemporary country'),(18,'Arcade Fire',2073409,'https://i.scdn.co/image/ab6761610000e5eba044e15eee771205956dcbf8',72,'alternative dance'),(19,'Khalid',15201201,'https://i.scdn.co/image/ab6761610000e5eb31072db9da0311ecfabe96bf',90,'pop'),(20,'Kellin Quinn',47690,'https://i.scdn.co/image/ab6761610000e5ebfb4ebdcfe9f52548d366f392',66,'undefined'),(21,'Willie Nelson',1681365,'https://i.scdn.co/image/ab6772690000c46ca07b9db029b749adaba3c618',74,'classic country pop'),(22,'Rammstein',7112189,'https://i.scdn.co/image/ab6761610000e5eb39a93f3d5cdbcdf4a2ce88e5',85,'alternative metal'),(23,'Jayda G',50765,'https://i.scdn.co/image/ab6761610000e5ebe2a379d1ca606114d010002b',56,'canadian electronic'),(24,'Víctor Manuelle',1359322,'https://i.scdn.co/image/ab6761610000e5ebe3f87bc61eaedafe14b814a9',68,'latin');
/*!40000 ALTER TABLE `artists` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-15 20:43:38

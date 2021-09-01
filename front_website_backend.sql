/*
SQLyog Professional v13.1.1 (64 bit)
MySQL - 10.4.20-MariaDB : Database - front_website_backend
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`front_website_backend` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `front_website_backend`;

/*Table structure for table `comments` */

DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `commentBody` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PostId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `PostId` (`PostId`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`PostId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `comments` */

/*Table structure for table `posts` */

DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `postText` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `posts` */

/*Table structure for table `products` */

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `price` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `products` */

insert  into `products`(`product_id`,`product_name`,`price`,`createdAt`,`updatedAt`) values 
(1,'Butternut Squash',20,'2021-08-31 17:28:42','2021-08-31 17:28:47'),
(2,'Fresho Butternut Squash',50,'2021-08-31 17:29:01','2021-08-31 17:29:04');

/*Table structure for table `user_last_login` */

DROP TABLE IF EXISTS `user_last_login`;

CREATE TABLE `user_last_login` (
  `last_lid` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `user_access_token` varchar(250) NOT NULL,
  `status` enum('Active','InActive') NOT NULL DEFAULT 'Active',
  `insert_dt` datetime DEFAULT NULL,
  `update_dt` datetime DEFAULT NULL,
  PRIMARY KEY (`last_lid`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4;

/*Data for the table `user_last_login` */

insert  into `user_last_login`(`last_lid`,`user_id`,`user_access_token`,`status`,`insert_dt`,`update_dt`) values 
(1,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk5NTg0NDV9.lju-8OhUpnC47s4gm3LZ0Mt9ew7uKeU-SWzXJk718aQ','Active','2021-08-26 11:44:05','2021-08-26 11:44:05'),
(2,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk5NjA3MDB9.hjdGmj_-34Iq1--aU_Eg3rOvCbKxzfZblUZvMUQWtco','Active','2021-08-26 12:21:40','2021-08-26 12:21:40'),
(3,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk5NjA3ODN9.A3apTE5sEYmIpPSjuLalowL6nS_9zHRW8zIXvPhPyfk','Active','2021-08-26 12:23:03','2021-08-26 12:23:03'),
(4,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk5NzY0OTR9.3KlU1JZsCZ-iZraeN0tt6s8Lmo0f90q7maT6iLD8K_w','Active','2021-08-26 16:44:55','2021-08-26 16:44:55'),
(5,2,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk5NzY1OTd9.aoIPN_bzLoIcrn8ahu_eWcQR2OeXnRwsZ3b0zpB2Hpw','Active','2021-08-26 16:46:37','2021-08-26 16:46:37'),
(6,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk5Nzc2MDF9.1q-hGKT0jKFX6oubD4ozsSYorN0RPfJxS1DC_6eXz4E','Active','2021-08-26 17:03:21','2021-08-26 17:03:21'),
(7,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk5Nzc2MDJ9.Q7zeehLvFr35HGq-wocJZLU-9xkbUKMTrcrRHF7hRqI','Active','2021-08-26 17:03:22','2021-08-26 17:03:22'),
(8,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk5ODA4Njd9.EHZVrMTTVuq7P6Ic6vIfsP_9QoBUJCi13g0p8bAN4dE','Active','2021-08-26 17:57:47','2021-08-26 17:57:47'),
(9,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk5ODA4OTF9.vaEJx9sL15xxo6kuqKObybhp5Zoo-NgPsNTOi8RThEc','Active','2021-08-26 17:58:11','2021-08-26 17:58:11'),
(10,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk5ODA5NjR9.w5VG3QEL8Lm5RnEluEe9B-2uEwgvlmDdwubpAr1WfvE','Active','2021-08-26 17:59:24','2021-08-26 17:59:24'),
(11,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk5ODEwOTZ9.t0dZ8WFuX0BsGUkjBfuCg8Nk4AwRK9AuW5W1OlANvR0','Active','2021-08-26 18:01:36','2021-08-26 18:01:36'),
(12,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk5ODExODh9.2NantFzSsV8SSggMm1oOOxneorLUIinHdR5swmaJCi4','Active','2021-08-26 18:03:08','2021-08-26 18:03:08'),
(13,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk5ODE0MTB9.H_eWoKqbvkly0RSA6-dO2QvyUw4fNixdY0cUoaOe6SU','Active','2021-08-26 18:06:50','2021-08-26 18:06:50'),
(14,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk5ODI0NzN9.QvenbPObLBVjbecKgHby0P7D5gRBU3j_73flA_98LR8','Active','2021-08-26 18:24:33','2021-08-26 18:24:33'),
(15,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk5ODI4MDF9.obj81aDmeQT_dd6MXP2dmuPOou8-OOq1DNsUDQmZWVQ','Active','2021-08-26 18:30:01','2021-08-26 18:30:01'),
(16,5,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk5ODMwNzV9.1pwATlgZ8oMQ22MGUJXITIP1hsqARY0uhKrWc4OAj3I','Active','2021-08-26 18:34:35','2021-08-26 18:34:35'),
(17,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzAwNDEwMDF9.vGkklPtkkBaviCW-knQ0boeO5Wj57EtFQrJaK59-STo','Active','2021-08-27 10:40:01','2021-08-27 10:40:01'),
(18,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzAwNDM3NDZ9.3giYt-fjtCeyaqc887-ZX3VJLuoB-jkUNZy5Z9VjKu4','Active','2021-08-27 11:25:46','2021-08-27 11:25:46'),
(19,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzAwNTU2NTF9.6elLgtEM9C__u3toPbI8Nb6YP7a5dbPsUPY28lbZmaQ','Active','2021-08-27 14:44:11','2021-08-27 14:44:11'),
(20,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzAyMTk1NTd9.6LoK904IFjsSQ8plt1PpmQGQk0gy9kroJsqEWZO-jto','Active','2021-08-29 12:15:57','2021-08-29 12:15:57'),
(21,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzAyMTk3NTl9.mM2gJsMVj102QCRj2QWdnwoyB-fwe8c64OVWskVS1Ao','Active','2021-08-29 12:19:19','2021-08-29 12:19:19'),
(22,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzAyMTk5NTN9.VsNp6Xp7dRXFcqc1NTlZKVtTpXYzv0gx7nyGj4_OERc','Active','2021-08-29 12:22:33','2021-08-29 12:22:33'),
(23,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzAyMjM3ODN9.iBpKjdsZZ6-INqGLYiFecLrRhGMmLlSEScrlcCSnxxk','Active','2021-08-29 13:26:24','2021-08-29 13:26:24'),
(24,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzAyMjQ3MTZ9.Jw4W1PS4yoBvWsKL37ifrWGmJv_OJ5hY6WzzE1Y3hnc','Active','2021-08-29 13:41:56','2021-08-29 13:41:56'),
(25,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzAyMjUwMzJ9.Vfl29gkSWgIcVKiSUG19FDN89kT00RUfv99IglinLsg','Active','2021-08-29 13:47:12','2021-08-29 13:47:12'),
(26,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzAyMjY4OTN9.Ft73Js8_i2loGcAWQxaX6Gcc4oPH00eh71O3Sh0qtAc','Active','2021-08-29 14:18:13','2021-08-29 14:18:13'),
(27,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzAyMjcxNDZ9.Y9IREFM9H260KWqKHzCvFfLABwTp19MoK3-GREWJosU','Active','2021-08-29 14:22:26','2021-08-29 14:22:26'),
(28,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzAyMjc4NTF9.rMQQOg5-75x-c56P0SsS6LfNF9MwxYUiUvLHkYydIjE','Active','2021-08-29 14:34:11','2021-08-29 14:34:11'),
(29,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzAyMjgwMjh9.0dvTpOsBMV0sL12Gk9Ve8CFJRRhzkon0F5jNw4Vjfps','Active','2021-08-29 14:37:08','2021-08-29 14:37:08'),
(30,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzAyMjg0NjF9.tYA5hbWDibZOAPidiJX4E4XrQStAkak3jZROwPD7ieM','Active','2021-08-29 14:44:21','2021-08-29 14:44:21'),
(31,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzAyMjg1MTJ9.9aBy6YCSg70SH8b5ogEefgTVd3pF4dOAMDbwUT1C12I','Active','2021-08-29 14:45:12','2021-08-29 14:45:12'),
(32,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzAyOTU5NjJ9.9XHaDiB3Ccnm6drh9-IzS-_J_IBNm6jRTYPmTPTZZjc','Active','2021-08-30 09:29:22','2021-08-30 09:29:22'),
(33,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzAyOTYxODB9.c2-1ajfEegNzm555mutJHV2Y9N27e6GPsp8yOs6i8xY','Active','2021-08-30 09:33:00','2021-08-30 09:33:00'),
(34,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzAzMTk4NDR9.NqfxGzGo9huYcpAAuT8hydX50N-yRigCamCx96zLouo','Active','2021-08-30 16:07:24','2021-08-30 16:07:24'),
(35,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzAzODY4NDV9.5L6W7AMm9jiCCLKhrRFZnofhCJFVYh4CGQ7_7OWZ6DU','Active','2021-08-31 10:44:05','2021-08-31 10:44:05');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_firstname` varchar(150) NOT NULL,
  `user_lastname` varchar(150) NOT NULL,
  `user_email` varchar(30) NOT NULL,
  `ori_password` varchar(250) DEFAULT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(500) NOT NULL,
  `gender` enum('male','female') NOT NULL,
  `is_deleted` enum('0','1') NOT NULL DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UNIQUE` (`username`) COMMENT 'user login username'
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

/*Data for the table `users` */

insert  into `users`(`user_id`,`user_firstname`,`user_lastname`,`user_email`,`ori_password`,`username`,`password`,`gender`,`is_deleted`,`createdAt`,`updatedAt`) values 
(1,'Rakesh Ramesh','Jadhav','cvcv@gmail.com','123456','123456','$2a$10$4v6tAviFd6yzFsqp1QSvrOmiEGqkOgw2PAEYUWAzCv2qAPoj9/Oqe','female','0','2021-08-25 17:49:04','2021-08-25 17:49:04'),
(2,'Rahul','Jadhav','rahul@gmail.com','jadhav','rahul','$2a$10$fxT8qjBUHPQCJ76FL/UsLuTzdtSqH1IpsBo577ebCHUMe/G3lNLMG','male','0','2021-08-26 14:37:49','2021-08-26 14:37:49'),
(3,'123456','Jadhav','test@gmail.com','123456','1234567','$2a$10$6gEQvX4Yqtlj9bDHDtMv9OamWReBRTgE0CVAisjoI24l42iNrsLjS','male','0','2021-08-26 16:20:43','2021-08-26 16:20:43'),
(4,'hkhjkhjkhj','fdfdfd','dfdf@gmail.com','hkhjkhjkhj','1234568','$2a$10$1sZvhCGdEbG.TLulBdirt.PqXpw5pRvnqbaY4ghOxQMKtZpuVjjIS','male','0','2021-08-26 16:21:15','2021-08-26 16:21:15'),
(5,'Ganesh','More','ganeshmore@gmail.com','774498','774498','$2a$10$69EQtPneWEopjN1tGalW6OV/G8hSzyrDM0bDj6pKlk/o7MBf5CQuu','male','0','2021-08-26 18:34:29','2021-08-26 18:34:29'),
(6,'Master@13','wewew','ewewe@gmail.com','Master@13','fdfdf','$2a$10$Q1pBFKr40AuL67vHOLm7kuin/m.qS7MbkqnnXO9OrwsJ55HQAOTv.','male','0','2021-08-29 13:41:46','2021-08-29 13:41:46'),
(7,'dfsdfsdfsdf','dfsdfdsf','sdfd@gmail.com','dfsdfsdfsdf','dsfdfsdf','$2a$10$u5eJ9F41IuavesOm5HA1YeSMORBIrnVt694GPJlyJv3y0I8vxDl36','male','0','2021-08-30 16:07:14',NULL),
(8,'wewewew','fsdfsdfsd','dfdsfsdf',NULL,'fdfdfdf','fdfdfdfd','male','0','2021-09-01 10:56:29','2021-09-01 10:56:29');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

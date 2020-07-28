/*
Navicat MySQL Data Transfer

Source Server         : localtest
Source Server Version : 50712
Source Host           : localhost:3306
Source Database       : book_manager

Target Server Type    : MYSQL
Target Server Version : 50712
File Encoding         : 65001

Date: 2020-07-28 19:49:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(255) DEFAULT NULL,
  `isbn` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `pages` int(11) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `publish` varchar(255) DEFAULT NULL,
  `publish_time` datetime(6) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `translate` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES ('1', '盐野七生', 'XKR000001', '《希腊人的故事》', '300', '61', '光明日报出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('2', '陈寿', 'CS20200728', '《三国志》', '200', '21', '光明日报出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('3', '罗贯中', 'SGYY20200728', '《三国演义》', '200', '22', '人民日报出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('4', '吴承恩', 'XYJ20200728', '《西游记》', '600', '23', '人民日报出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('5', '曹雪芹', 'HLM20200728', '《红楼梦》', '800', '23', '人民日报出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('6', '司马迁', 'SJ20200728', '《史记》', '400', '33', '人民日报出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('7', '施耐庵', 'SHZ20200728', '《水浒传》', '400', '33', '人民日报出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('8', '郭敬明', 'XSD20200728', '《小时代/刺金时代》', '200', '33', '人民日报出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('9', '佚名', 'XSD20200728', '《山海经》', '200', '33', '人民日报出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('10', '金庸', 'YTTL20200728', '《倚天屠龙记》', '200', '33', '人民日报出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('11', '金庸', 'YTTL20200729', '《倚天屠龙记2》', '200', '33', '人民日报出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('12', '金庸', 'YTTL20200730', '《倚天屠龙记3》', '200', '33', '人民日报出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('13', '金庸', 'YTTL20200731', '《倚天屠龙记4》', '200', '33', '人民日报出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('14', '金庸', 'YTTL20200732', '《倚天屠龙记5》', '200', '33', '人民日报出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('15', '金庸', 'YTTL20200733', '《倚天屠龙记6》', '200', '33', '人民日报出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('16', '金庸', 'TLBB20200733', '《天龙八部》', '200', '34', '光线传媒出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('17', '金庸', 'TLBB20200734', '《天龙八部2》', '200', '34', '光线传媒出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('18', '金庸', 'TLBB20200735', '《天龙八部3》', '200', '34', '光线传媒出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('19', '金庸', 'TLBB20200736', '《天龙八部4》', '200', '34', '光线传媒出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('20', '金庸', 'TLBB20200737', '《天龙八部5》', '200', '35', '光线传媒出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('21', '刘同', 'DBS20200737', '《当悲伤逆流成河》', '200', '35', '光线传媒出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('22', '九把刀', 'NXN20200737', '《那些年我们一起追过的女孩》', '200', '35', '光线传媒出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('23', '鲁迅', 'KRRJ20200737', '《狂人日记》', '200', '35', '光线传媒出版社', '2020-07-15 20:20:06.523000', '100', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('24', '鲁迅', 'NH20200737', '《呐喊》', '200', '35', '光线传媒出版社', '2020-07-15 20:20:06.523000', '99', '无', '文化、科学、教育、体育');
INSERT INTO `book` VALUES ('25', '安妮', 'JA20200737', '《简爱》', '200', '35', '光线传媒出版社', '2020-07-15 20:20:06.523000', '99', '无', '文化、科学、教育、体育');

-- ----------------------------
-- Table structure for borrow
-- ----------------------------
DROP TABLE IF EXISTS `borrow`;
CREATE TABLE `borrow` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `book_id` int(11) DEFAULT NULL,
  `create_time` datetime(6) DEFAULT NULL,
  `update_time` datetime(6) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `end_time` datetime(6) DEFAULT NULL,
  `ret` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of borrow
-- ----------------------------
INSERT INTO `borrow` VALUES ('13', '25', '2020-07-28 08:00:00.000000', '2020-07-29 08:00:00.000000', '4', '2020-07-29 08:00:00.000000', '1');
INSERT INTO `borrow` VALUES ('14', '24', '2020-07-28 08:00:00.000000', '2020-07-29 08:00:00.000000', '4', '2020-07-29 08:00:00.000000', '1');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `birthday` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `identity` int(11) DEFAULT NULL,
  `is_admin` int(11) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '上海', 'string', '2020-07-14 19:01:33.863000', 'stu@163.com', '0', '0', '学生', '123', '2', '13576145550', 'stu');
INSERT INTO `users` VALUES ('2', '上海', 'string', '2020-07-14 19:01:33.863000', 'tea@163.com', '1', '0', '教师', '123', '0', 'string', 'tea');
INSERT INTO `users` VALUES ('3', '北京', 'a.jpg', '2020-07-14 19:01:33.863000', 'other@163.com', '2', '0', '社会人士', '123', '3', '15078826452', 'other');
INSERT INTO `users` VALUES ('4', '北京', 'b.jpa', '2020-07-16 16:06:43.000000', 'admin@163.com', '3', '0', '管理员', '123', '3', '17679088880', 'admin');
INSERT INTO `users` VALUES ('8', '北京朝阳', 'b.jpa', '1998-02-12 08:00:00.000000', 'guest01@163.com', '3', '0', '游客1', '123', '10', '13576008880', 'guest01');
INSERT INTO `users` VALUES ('9', '北京', 'b.jpa', '1982-01-01 08:00:00.000000', 'guest02@163.com', '3', '0', '游客2', '123', '10', '1768220000', 'guest02');

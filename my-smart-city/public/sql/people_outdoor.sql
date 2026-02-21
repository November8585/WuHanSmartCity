/*
 Navicat Premium Dump SQL

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80015 (8.0.15)
 Source Host           : localhost:3306
 Source Schema         : my_smart_city

 Target Server Type    : MySQL
 Target Server Version : 80015 (8.0.15)
 File Encoding         : 65001

 Date: 28/02/2026 14:30:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for people_outdoor
-- ----------------------------
DROP TABLE IF EXISTS `people_outdoor`;
CREATE TABLE `people_outdoor`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `region` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '区域名称',
  `value` int(11) NOT NULL COMMENT '出行人口数量',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '各区今日出行人口统计' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of people_outdoor
-- ----------------------------
INSERT INTO `people_outdoor` VALUES (1, '汉阳区', 180000, '2026-02-20 16:16:10', '2026-02-20 21:32:54', NULL);
INSERT INTO `people_outdoor` VALUES (2, '武昌区', 250000, '2026-02-20 16:16:10', '2026-02-20 21:33:10', NULL);
INSERT INTO `people_outdoor` VALUES (3, '洪山区', 540000, '2026-02-20 16:16:10', '2026-02-20 21:33:23', NULL);
INSERT INTO `people_outdoor` VALUES (4, '江夏区', 290000, '2026-02-20 16:16:10', '2026-02-20 21:34:06', NULL);
INSERT INTO `people_outdoor` VALUES (5, '江岸区', 210000, '2026-02-20 16:16:10', '2026-02-20 21:33:35', NULL);

SET FOREIGN_KEY_CHECKS = 1;

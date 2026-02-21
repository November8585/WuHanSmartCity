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

 Date: 28/02/2026 14:30:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for population_distribution
-- ----------------------------
DROP TABLE IF EXISTS `population_distribution`;
CREATE TABLE `population_distribution`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `region` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '区域名称',
  `value` decimal(10, 2) NOT NULL COMMENT '人口数量（单位：万）',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '武汉各区人口分布统计' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of population_distribution
-- ----------------------------
INSERT INTO `population_distribution` VALUES (1, '洪山区', 271.88, '2026-02-20 16:16:45', '2026-02-20 22:01:14', NULL);
INSERT INTO `population_distribution` VALUES (2, '江夏区', 146.85, '2026-02-20 16:16:45', '2026-02-20 16:16:45', NULL);
INSERT INTO `population_distribution` VALUES (3, '武昌区', 128.18, '2026-02-20 16:16:45', '2026-02-20 16:16:45', NULL);
INSERT INTO `population_distribution` VALUES (4, '黄陂区', 125.06, '2026-02-20 16:16:45', '2026-02-20 16:16:45', NULL);
INSERT INTO `population_distribution` VALUES (5, '蔡甸区', 112.10, '2026-02-20 16:16:45', '2026-02-20 16:16:45', NULL);
INSERT INTO `population_distribution` VALUES (6, '江岸区', 105.13, '2026-02-20 16:16:45', '2026-02-20 16:16:45', NULL);
INSERT INTO `population_distribution` VALUES (7, '新洲区', 93.61, '2026-02-20 16:16:45', '2026-02-20 16:16:45', NULL);
INSERT INTO `population_distribution` VALUES (8, '东西湖区', 92.58, '2026-02-20 16:16:45', '2026-02-20 16:16:45', NULL);
INSERT INTO `population_distribution` VALUES (9, '汉阳区', 90.08, '2026-02-20 16:16:45', '2026-02-20 16:16:45', NULL);
INSERT INTO `population_distribution` VALUES (10, '硚口区', 75.02, '2026-02-20 16:16:45', '2026-02-20 16:16:45', NULL);
INSERT INTO `population_distribution` VALUES (11, '江汉区', 69.07, '2026-02-20 16:16:45', '2026-02-20 16:16:45', NULL);
INSERT INTO `population_distribution` VALUES (12, '青山区', 51.30, '2026-02-20 16:16:45', '2026-02-20 16:16:45', NULL);
INSERT INTO `population_distribution` VALUES (13, '汉南区', 20.05, '2026-02-20 16:16:45', '2026-02-20 16:16:45', NULL);

SET FOREIGN_KEY_CHECKS = 1;

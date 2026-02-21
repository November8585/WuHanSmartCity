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

 Date: 28/02/2026 14:30:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for bus_online
-- ----------------------------
DROP TABLE IF EXISTS `bus_online`;
CREATE TABLE `bus_online`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `region` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '区域名称',
  `value` int(11) NOT NULL COMMENT '在线公交数量',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '各区在线公交数量统计' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bus_online
-- ----------------------------
INSERT INTO `bus_online` VALUES (1, '汉阳区', 27, '2026-02-20 16:16:10', '2026-02-20 20:36:59', NULL);
INSERT INTO `bus_online` VALUES (2, '武昌区', 25, '2026-02-20 16:16:10', '2026-02-20 16:16:10', NULL);
INSERT INTO `bus_online` VALUES (3, '硚口区', 18, '2026-02-20 16:16:10', '2026-02-20 16:16:10', NULL);
INSERT INTO `bus_online` VALUES (4, '江夏区', 15, '2026-02-20 16:16:10', '2026-02-20 16:16:10', NULL);
INSERT INTO `bus_online` VALUES (5, '洪山区', 10, '2026-02-20 16:16:10', '2026-02-20 16:16:10', NULL);
INSERT INTO `bus_online` VALUES (6, '其他', 5, '2026-02-20 16:16:10', '2026-02-20 16:16:10', NULL);

SET FOREIGN_KEY_CHECKS = 1;

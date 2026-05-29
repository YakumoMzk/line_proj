-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2026-05-29 16:42:06
-- 服务器版本： 10.4.32-MariaDB
-- PHP 版本： 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `newstu`
--
CREATE DATABASE IF NOT EXISTS `newstu` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `newstu`;

-- --------------------------------------------------------

--
-- 表的结构 `depart`
--

CREATE TABLE `depart` (
  `dept_id` tinyint(4) NOT NULL COMMENT '部门id',
  `dept_name` varchar(30) NOT NULL COMMENT '部门名字',
  `dept_plan_num` int(11) NOT NULL COMMENT '部门计划招生人数',
  `dept_come_num` int(11) NOT NULL COMMENT '部门报道人数',
  `dept_report_rate` float NOT NULL COMMENT '报到率',
  `dept_report_rate_last` float NOT NULL COMMENT '往年报道率'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 转存表中的数据 `depart`
--

INSERT INTO `depart` (`dept_id`, `dept_name`, `dept_plan_num`, `dept_come_num`, `dept_report_rate`, `dept_report_rate_last`) VALUES
(1, '人工智能', 1530, 1420, 88, 89),
(2, '艺术设计', 3200, 2953, 82, 85),
(3, '管理学院', 450, 405, 87, 75),
(4, '财贸学院', 550, 480, 78, 82),
(5, '材料学院', 720, 678, 75, 81),
(6, '北斗航天', 560, 550, 91, 95),
(7, '生命健康', 640, 602, 87, 90);

--
-- 转储表的索引
--

--
-- 表的索引 `depart`
--
ALTER TABLE `depart`
  ADD PRIMARY KEY (`dept_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `depart`
--
ALTER TABLE `depart`
  MODIFY `dept_id` tinyint(4) NOT NULL AUTO_INCREMENT COMMENT '部门id', AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

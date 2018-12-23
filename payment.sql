-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 23, 2018 at 02:14 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `payment`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `account_number` int(11) NOT NULL,
  `open_date` date NOT NULL,
  `balance` double NOT NULL,
  `customer_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`account_number`, `open_date`, `balance`, `customer_id`) VALUES
(1, '2018-12-04', 150000, 10),
(2, '2019-12-01', 300000, 9),
(6, '2018-12-18', 10000, 21),
(19, '2018-12-19', 100000, 22),
(20, '2018-12-30', 210000, 25),
(21, '2017-11-10', 200000, 10);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_number` int(11) NOT NULL,
  `first_name` varchar(10) NOT NULL,
  `last_name` varchar(10) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `username` varchar(12) NOT NULL,
  `password` varchar(11) NOT NULL,
  `phone_number` varchar(12) NOT NULL,
  `phone_type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_number`, `first_name`, `last_name`, `birth_date`, `username`, `password`, `phone_number`, `phone_type`) VALUES
(9, 'Rizki', 'Firmansyah', '1994-09-10', 'admin', 'admin', '089878786', 'IOS'),
(10, 'Mufiq\'o', 'Fathoniand', '2018-12-24', 'root', 'admin', '089878786', 'IOS'),
(16, 'Reza', 'fajrian', '1995-10-31', 'admin', 'admin', '08980980', 'IOS'),
(21, 'irfan', 'ibrani', '1999-03-12', 'admin', 'admin', '9087678', 'ios'),
(22, 'mufiq', 'ibrani', '2018-12-19', 'mufiq', '1321', '13221321', 'ios'),
(25, 'Ucil', 'Sikucing m', '2018-12-24', 'mpus', 'mpus', '089878786', 'android');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `amount` int(50) NOT NULL,
  `amount_sign` varchar(7) NOT NULL,
  `account_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`id`, `type`, `amount`, `amount_sign`, `account_id`) VALUES
(1, 'GOPAY', 100000, 'DEBIT', 6),
(2, 'Gopay', 10000, 'DEBIT', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`account_number`),
  ADD KEY `customer_id_idx` (`customer_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_number`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `account_id_idx` (`account_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `account_number` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_number` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `account`
--
ALTER TABLE `account`
  ADD CONSTRAINT `customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_number`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `account_id` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_number`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 11, 2021 at 08:23 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.3.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api_mobile_programming`
--

-- --------------------------------------------------------

--
-- Table structure for table `tourism`
--

CREATE TABLE `tourism` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `location` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tourism`
--

INSERT INTO `tourism` (`id`, `name`, `location`, `description`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Pantai Alam Indah', 'Tegal', 'Pantai', 1, '2021-01-12 01:13:56', '2021-01-12 01:13:56'),
(3, 'Waterboom', 'Tegal', 'Kolam Renang', 1, '2021-01-12 01:44:37', '2021-01-12 01:55:41');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `token` text DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `token`, `created_at`, `updated_at`) VALUES
(1, 'Felix Yunianto', 'felixyunianto@gmail.com', '$2b$09$yQPUf0zT78Be61.mC6Y8ROGMO.cb/J19wNdP9I2K.mDrMTg0oGpj2', '$2b$06$LEqrK5gGAhVXjqeBms5xIulQ7mV/UNMP.WtyayQ5rfZta2BQR3L3O', '2021-01-11 21:58:19', '2021-01-12 02:04:30'),
(2, 'Yayang Setiyawan', 'setiyawan@gmail.com', '$2b$05$05kG/1AbYkfCfhdDjy1jtebW9BqTGpSNp6TZjnHj94Wzxx46UghDi', '$2b$05$uQOSPIhvv4M0whG00Su2pujd7PLigEHdn9jb9dZ7sONBiNVAOLXku', '2021-01-11 22:34:53', '2021-01-11 22:58:00'),
(3, 'Dhiya Reksa', 'dhiyo7@gmail.com', '$2b$07$ikCzmvxmx6sZJX6SnlE4Wui3bBeip8didiw079vUceqBoY/by7ji.', NULL, '2021-01-12 02:00:09', '2021-01-12 02:00:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tourism`
--
ALTER TABLE `tourism`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tourism`
--
ALTER TABLE `tourism`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

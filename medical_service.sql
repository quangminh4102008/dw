-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 29, 2024 lúc 01:39 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `medical_service`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `appointments`
--

CREATE TABLE `appointments` (
  `appointment_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `appointment_date` datetime NOT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `status` varchar(50) DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `appointments`
--

INSERT INTO `appointments` (`appointment_id`, `patient_id`, `doctor_id`, `appointment_date`, `reason`, `status`) VALUES
(1, 1, 1, '2024-01-09 10:00:00', 'die', 'pending'),
(2, 2, 2, '2024-10-30 11:00:00', 'die', 'pending'),
(3, 3, 3, '2024-11-02 14:00:00', 'die', 'pending'),
(4, 1, 1, '2024-01-09 10:00:00', 'die', 'pending'),
(5, 2, 2, '2024-10-30 11:00:00', 'die', 'pending'),
(6, 3, 3, '2024-11-02 14:00:00', 'die', 'pending');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `doctors`
--

CREATE TABLE `doctors` (
  `doctor_id` int(11) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `specialization` varchar(100) NOT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `years_of_experience` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `doctors`
--

INSERT INTO `doctors` (`doctor_id`, `full_name`, `specialization`, `phone_number`, `email`, `years_of_experience`) VALUES
(1, 'Nguyen Si', 'moc tim', '123456789', 'nguyensi@example.com', 10),
(2, 'Tran Binh', 'moc ruot', '987654321', 'tranbinh@example.com', 5),
(3, 'Pham Mai', 'moc mau', '555666777', 'phammai@example.com', 8),
(4, 'Le Hoa', 'moc nao', '333444555', 'lehoa@example.com', 12),
(5, 'Vu Lam', 'moc dau', '444555666', 'vulam@example.com', 7),
(6, 'Nguyen Si', 'moc tim', '123456789', 'nguyensi@example.com', 10),
(7, 'Tran Binh', 'moc ruot', '987654321', 'tranbinh@example.com', 5),
(8, 'Pham Mai', 'moc mau', '555666777', 'phammai@example.com', 8),
(9, 'Le Hoa', 'moc nao', '333444555', 'lehoa@example.com', 12),
(10, 'Vu Lam', 'moc dau', '444555666', 'vulam@example.com', 7);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `patients`
--

CREATE TABLE `patients` (
  `patient_id` int(11) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `date_of_birth` date NOT NULL,
  `gender` varchar(10) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `patients`
--

INSERT INTO `patients` (`patient_id`, `full_name`, `date_of_birth`, `gender`, `address`, `phone_number`, `email`) VALUES
(1, 'gay beo', '2020-01-01', 'Nam', 'Ha Noi', '123456789', 'beo@example.com'),
(2, 'Beo gay', '1990-05-15', 'Nu', 'Ha Noi', '987654321', 'beogay@example.com'),
(3, 'ngu dan', '1985-09-30', 'Nam', 'HCM', '111222333', 'ngu@example.com'),
(4, 'gay beo', '2020-01-01', 'Nam', 'Ha Noi', '123456789', 'beo@example.com'),
(5, 'Beo gay', '1990-05-15', 'Nu', 'Ha Noi', '987654321', 'beogay@example.com'),
(6, 'ngu dan', '1985-09-30', 'Nam', 'HCM', '111222333', 'ngu@example.com');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`appointment_id`),
  ADD KEY `fk_patient_id` (`patient_id`),
  ADD KEY `fk_doctor_id` (`doctor_id`);

--
-- Chỉ mục cho bảng `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`doctor_id`);

--
-- Chỉ mục cho bảng `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`patient_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `appointments`
--
ALTER TABLE `appointments`
  MODIFY `appointment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `doctors`
--
ALTER TABLE `doctors`
  MODIFY `doctor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `patients`
--
ALTER TABLE `patients`
  MODIFY `patient_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `fk_doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`doctor_id`),
  ADD CONSTRAINT `fk_patient_id` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`patient_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

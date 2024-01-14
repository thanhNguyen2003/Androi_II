-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 25, 2023 at 08:37 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `databaseapp2`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` bigint(20) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `category_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `photo`, `title`, `category_id`) VALUES
(31, 'Jeep.png', 'JEEP', NULL),
(32, 'kia.png', 'KIA', NULL),
(35, 'LEX.png', 'LEXUS', NULL),
(37, 'nissan.png', 'NISSAN', NULL),
(38, 'ma.png', 'MAZDA', NULL),
(40, 'audii.png', 'AUDI', NULL),
(44, 'mecedess.png', 'MERCEDES', NULL),
(46, 'forrd.png', 'FORD', NULL),
(47, 'mittsubishi.png', 'MITSUBISHI', NULL),
(48, 'bmw.png', 'BMW', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `description`, `title`) VALUES
(1, 'dong-coupe', 'dong-coupe'),
(2, 'dong-mpv', 'dong-mpv'),
(3, 'dong-pick-up', 'dong-pick-up'),
(4, 'dong-sedan', 'dong-sedan'),
(5, 'dong-suv', 'dong-suv');

-- --------------------------------------------------------

--
-- Table structure for table `categories_products`
--

CREATE TABLE `categories_products` (
  `category_id` bigint(20) NOT NULL,
  `products_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) NOT NULL,
  `description` text NOT NULL,
  `photo` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `title` varchar(255) NOT NULL,
  `category_id` bigint(20) DEFAULT NULL,
  `brand_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `description`, `photo`, `price`, `title`, `category_id`, `brand_id`) VALUES
(6, 'Xe Của Đức Audi R8 2023 phiên bản mới sở hữu diện mạo hầm hố sang trọng mà còn đi cùng những trang bị hiện đại nhất của hãng.\nNếu bạn là một fan đích thực của những dòng xe thể thao cá tính thì chắc chắn bạn không nên bỏ qua những tin tức mới nhất về Audi', 'audi-r8-2023.png.png', 212304300, 'Audi R8', 1, NULL),
(10, '\n\nMercedes-Benz G-Class là một trong số những dòng SUV địa hình nổi tiếng với khả năng off-road đỉnh cao, một biểu tượng vượt thời gian. G-Class bắt đầu được mở bán từ năm 1979, đến năm 2002 bản hiệu suất cao mang tên Mercedes AMG G 63 chính thức ra đời.\n\nMercedes-Benz G 63 hiện đang ở vòng đời thứ 2, trình làng vào đầu năm 2018. Vẻ ngoài hầm hố, bắt mắt cùng khả năng vận hành mạnh mẽ, thách thức mọi địa hình khó của Mercedes-Benz G 63 nhanh chóng nhận được sự quan tâm lớn từ phía các đại gia Việt.\n\nTháng 03/2022, phiên bản giới hạn Mercedes-AMG G 63 edition 55 2023 đã chính thức ra mắt nhân dịp kỷ niệm 55 năm ngày thành lập thương hiệu AMG. Sản phẩm sẽ có nhiều chi tiết độc lạ hơn so với bản thường, song số lượng xe chỉ giới hạn 55 chiếc trên toàn cầu. Được biết, những chiếc 63 edition 55 đầu tiên đã cập bến đại lý chính hãng Việt Nam và sẵn sàng bàn giao đến các đại gia Việt.\n\nĐối thủ cùng nhóm và cùng tầm giá với Mercedes-Benz G63 tại Việt Nam hiện nay có thể kể đến những cái tên như Bently Bentayga, BMW X7, Land Rover Range Rover hay Lexus LX570.', 'mercedes-amg-g63.png.png', 3210030020, 'Mecedes AMG G63', 5, 44),
(12, ' Chiếc CJ-5 trong bài được xem là mẫu Jeep cổ bán chạy chất mọi thời đại. Với thiết kế vuông vức quen thuộc cùng bộ gầm cao, hệ động lực mạnh mẽ với dẫn động 4 bánh. Chiếc CJ-5 này có thể là biến thể Renegade hoặc Renegade II, được sản xuất từ năm 1971 cho đến 1976, do dựa vào cấu trúc và những đường dập nổi của thân xe, và đặc biệt là nắp bình xăng ở bên hông đã được đưa ra phía sau, vị trí bình xăng cũ cũng đã được lấp lại, cho thấy mẫu xe này chắc chắn sản xuất sau năm 1970.', 'JeepCJ2007.png', 9600000000, 'Jeep CJ 2007', 3, 31),
(13, 'Nissan 240SX là một chiếc xe thể thao cỡ nhỏ được Nissan giới thiệu cho thị trường Bắc Mỹ vào năm 1989. Nó đã thay thế đàn anh 200SX (S12). Hầu hết những mẫu 240SX đều được trang bị động cơ 4,4 lít (KA24E từ 1989 đến 1990 và KA24DE từ 1990 đến 1998). KA24E có sử dụng cam đơn SOHC và KA24DE có dùng cam đôi DOHC. Hai thế hệ riêng biệt của 240SX, S13 (1989 đến 1994) S14 (1994 đến 1998) được sản xuất dựa trên nền tảng của Nissan, chiếc xe màu đen trong bài này thuộc thế hệ S13.', 'Nissan Silvia Nissan 240SX.png', 12000000000, 'Nissan Silvia 240SX', 1, 37),
(14, ' Giá sang nhượng của Lexus LX 570 Super Sport 2020 đã qua sử dụng vẫn cao ngang giá mua mới của mẫu xe cùng phân khúc như BMW X7.\nMột chiếc Lexus LX 570 đời 2020, phiên bản Super Sport, được chào bán trên thị trường xe cũ với mức giá 6,999 tỷ đồng. Người bán nói rằng xe đã đi được khoảng 40.000km.\n\nLexus LX 570 đời này có xe phân phối chính hãng, tuy nhiên phiên bản Super Sport lại là dòng được nhập khẩu tư nhân. Thời điểm 2020, mẫu SUV hạng sang này có giá lăn bánh hơn 9 tỷ đồng (đã bao gồm chi phí ra biển Hà Nội). Như vậy sau 3 năm sử dụng, xe mất giá khoảng 3 tỷ đồng.', 'lexuslx570.png', 9700000000, 'Lexus LX 570', 2, 35),
(15, 'BMW M3 là phiên bản sedan hiệu suất cao thuộc dòng 3 Series của thương hiệu ô tô hạng sang nước Đức. Mẫu xe hiện đang ở thế hệ thứ 6 và đã ra mắt toàn cầu từ tháng 09/2020. Qua đó, xe được tinh chỉnh thiết kế, nâng cấp động cơ và bổ sung nhiều công nghệ hỗ trợ lái, hứa hẹn sẽ là một lựa chọn lý tưởng cho những đại gia vừa muốn đáp ứng nhu cầu đi lại hàng ngày, vừa muốn sở hữu một cỗ máy hiệu năng cao.', 'bmw m3 2023.png', 4300000000, 'BMW M3 2023', 4, 48),
(16, 'Nâng Tầm Thiết Kế\n\nPhần đầu xe Everest Titanium đặc biệt nổi bật với lưới tản nhiệt dạng lưới mạ crôm kết hợp cùng cụm đèn LED hình chữ C mang đậm đặc trưng thiết kế toàn cầu của Ford. Các điểm nhấn mạ crôm trên gương, tay nắm cửa, bậc lên xuống hai bên xe tạo nên vẻ cứng cáp nhưng vẫn vô cùng sang trọng cho chiếc xe.\n\n\n\nMâm Xe Hợp Kim với thiết kế hiện đại\n\n  Mâm xe hợp kim lớn 20 inch đa chấu đươc hoàn thiện tỉ mỉ, tôn thêm vẻ bề thế, cơ bắp và linh hoạt cho Titanium. Các điểm nhấn mạ chrôm trên tấm chắn bùn giúp gắn kết bánh xe với phần thân trên.\n\n\n\nBảng Điều Khiển Kỹ thuật số Cao Cấp\n\nBảng điều khiển mới với thiết kế trải rộng tạo một không gian vô cùng rộng rãi cho khoang lái. Xung quanh cụm đồng hồ kỹ thuật số và màn hình cảm ứng LCD 12 inch tích hợp là những chi tiết hoàn thiện tinh xảo với chất liệu cao cấp.\n\n\n\nNội Thất Đặc trưng hoàn thiện\n\n  Nội thất màu đen gỗ mun và nâu hạt dẻ tùy chọn, ghế bọc da sang trọng, êm ái với cấu tạo lỗ đệm thông khí. Các chi tiết trên xe bằng kim loại được mài và đánh bóng bề mặt để tạo cảm giác sang trọng mỗi khi bạn chạm tay. Cửa số trời Toàn cảnh mở rộng tầm nhìn của bạn và mang đến không gian mở phóng khoáng.', 'foreverest.png', 1467999999, 'FORD EVEREST  2023', 5, 46),
(17, 'Mẫu MPV cỡ lớn KIA Carnival ra mắt với diện mạo và động cơ hoàn toàn mới đồng thời tích hợp đa dạng các trang bị với tùy chọn 7 và 8 chỗ.\n\nNgày 9/10, Thaco giới thiệu mẫu KIA Carnival, thế hệ thứ 4 của mẫu Sedona. KIA quyết định đổi tên từ Sedona sang Carnival nhằm đồng nhất tên gọi trên toàn cầu, giống Cerato thành K3 mới.\n\nCarnival thế hệ mới có kích thước và khoảng sáng gầm xe lớn hơn so với thế hệ cũ. Xe dài hơn 40 mm, rộng hơn 10 mm và cao hơn 20 mm. Trục cơ sở cũng tăng thêm 30 mm. Khoảng sáng gầm xe 172 mm, tức tăng thêm 9 mm. Tất cả các thay đổi này giúp Carnival to lớn hơn và nội thất rộng rãi hơn.', 'kiaCanival.png', 1419000000, ' Carnival 2.2D', 2, 32),
(18, 'A8L mới thiết kế chau chuốt hơn, lưới tản nhiệt khung đơn rộng hơn và trang trí với những chi tiết mạ crôm tạo điểm nhấn. Cụm đèn pha LED matrix kết hợp với đèn ban ngày LED phát ra dải ánh sáng động khi về nhà/rời nhà, khi mở cửa hoặc khóa xe độc đáo.\n\nA8L kiểu dáng thể thao, đường vuốt mái ngược về sau kiểu dáng coupe, vòm bánh xe cơ bắp, vành 19 inch thiết kế 15 chấu chữ Y. Ngoại thất lựa chọn 8 màu sơn. Hệ thống treo khí nén tiêu chuẩn với kiểm soát giảm chấn.\n\nNội thất tập trung công nghệ với hai màn hình cảm ứng ở trung tâm bảng điều khiển, gồm màn hình 10,1 inch cho hệ thống thông tin giải trí và màn 8,6 inch cho hệ thống điều hòa và nhiều tiện tích khác. Cặp màn hình giải trí cho hàng ghế sau gắn ở tựa đầu ghế trước kích thước 10 inch, có thể tháo rời thành máy tính bảng. Sau vô-lăng, màn hình kỹ thuật số ảo Audi vitual cockpit, màn hình kính lái HUD, hệ thống camera 360.', 'Audia8.png', 6742337000, 'Audi A8L 2022', 4, 40),
(19, 'Audi RS7 là phiên bản có hiệu suất cao được phát triển từ Audi A7. Là một phần của thế hệ thứ hai, Audi RS7 được giới thiệu với một phiên bản duy nhất là Sportback, với sức mạnh đỉnh cao gần như siêu xe.\n\nTrong khi Audi A7 Sportback tạo ấn tượng với thiết kế trẻ trung và bắt mắt, thì Audi RS7 Sportback lại có phong cách thể thao đầy sức hút, vẫn giữ được sự hiện đại và phù hợp với xu hướng của thị trường toàn cầu.\n\nRa mắt lần đầu vào năm 2019, Audi RS7 Sportback đã thu hút sự chú ý của nhiều đối tượng yêu xe. Trên thị trường, đối thủ cạnh tranh trực tiếp của dòng xe này là BMW M8, Mercedes AMG E63S 4 Matic và Porsche Panamera Turbos.', 'AudiRS7Sportback.png', 9800000000, 'Audi RS7 Sportback', 4, 40),
(20, 'Ford Ranger Raptor là mẫu xe bán tải hiệu suất lớn của nhà sản xuất xe FORD - Mỹ. Mẫu xe bán tải cỡ lớn này được hãng cho ra mắt vào cuối tháng 10/2018 và rất được người dùng tại đây ưa chuộng nhờ hiệu suất hoạt động mạnh mẽ, di chuyển được hầu hết các cung đường, chở được nhiều hàng và thiết kế rất đồ sộ. \n\n \n\nNgoại Thất Ford Ranger Raptor\n \n\nFord Ranger Raptor sở hữu cho mình ngoại hình vô cùng bề thế và vững chãi, là người bạn đáng tin cậy trong những chuyến hành trình dài hoặc những cung đường gồ ghề sỏi đá mà các mẫu xe khác không thể lăn bánh đến đó được. ', 'fordrapter.png', 1299000000, 'Ford Ranger Raptor 2023', 3, 46),
(21, 'Nissan Frontier 2022 có hàng loạt trang bị độc nhất trong phân khúc như màn hình trung tâm 9 inch, màn hình đa thông tin 7 inch trong bảng đồng hồ, phanh tự động khi lùi, cảnh báo va chạm phía trước và cảnh báo áp suất lốp. Frontier 2022 chính là phiên bản đổi tên và thiết kế của Nissan Navara. Nếu về Việt Nam sẽ cạnh tranh trực tiếp với: Ford Ranger, Mitsubishi Triton, Mazda BT50...', 'NISSANFRONTIERPRO-4X.png', 3200000000, 'NISSAN FRONTIER PRO-4X', 3, 37),
(22, 'Xe máy chi tiết', 'null.png', 20000, 'Xe máy', 2, 31);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `password`, `status`) VALUES
(1, 'ngoctien123@123', 'ngoctien', '123456', NULL),
(2, 'Ngoctien@123', 'Ngoctien', '1111', NULL),
(4, 'Tien@hitu', 'Ngoctien', '1234', NULL),
(6, '', '', '', NULL),
(7, 'tien@12222', 'ngoctien', '12345', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK9q7xi3v910jhoa63aaiyibqex` (`category_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories_products`
--
ALTER TABLE `categories_products`
  ADD UNIQUE KEY `UK_rnlo43ssc3pd408u62he9udsb` (`products_id`),
  ADD KEY `FK2a3u5mbtmtq3d4s5abajhhksf` (`category_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKog2rp4qthbtt2lfyhfo32lsw9` (`category_id`),
  ADD KEY `FKa3a4mpsfdf4d2y6r8ra3sc8mv` (`brand_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `brands`
--
ALTER TABLE `brands`
  ADD CONSTRAINT `FK9q7xi3v910jhoa63aaiyibqex` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Constraints for table `categories_products`
--
ALTER TABLE `categories_products`
  ADD CONSTRAINT `FK2a3u5mbtmtq3d4s5abajhhksf` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `FKad19ea8ca86lh5f3wmgg83vmj` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FKa3a4mpsfdf4d2y6r8ra3sc8mv` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`),
  ADD CONSTRAINT `FKog2rp4qthbtt2lfyhfo32lsw9` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

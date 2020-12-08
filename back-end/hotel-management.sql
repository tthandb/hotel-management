-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 03, 2020 at 11:09 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel-management`
--

-- --------------------------------------------------------

--
-- Table structure for table `access_levels`
--

CREATE TABLE `access_levels` (
  `access_id` int(3) NOT NULL,
  `type` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `access_levels`
--

INSERT INTO `access_levels` (`access_id`, `type`) VALUES
(1, 'Employee'),
(2, 'Manager'),
(3, 'Administrator');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(6) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `address` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `country` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `first_name`, `last_name`, `address`, `city`, `country`, `email`, `phone`) VALUES
(1, 'Sy', 'Vo Trong', '315 Huynh Van Banh St., Ward 11', 'Ho Chi Minh City', 'VN', 'kimberly1986@hotmail.com', '0377796684'),
(2, 'Phuoc', 'Vo Quang ', '	285 Phố Bùi Quân Dung', 'Cần Thơ', 'VN', 'neuffer@aol.com', '0975777629'),
(3, ' Hieu', 'Luc Trong', '1A Tang Bat Ho,  Hai Ba Trung Dist.', 'Hà Nội', 'VN', 'zavadsky@me.com', '0327014325'),
(4, 'Hai', 'Phan Xuan', '23/8/6 Dinh Tien Hoang Str', 'Ho Chi Minh City', 'VN', 'frikazoyd@comcast.net', '0327014325'),
(5, 'Canh', 'Huynh Thi', '58 Tran Nhan Tong, Hai Ba Trung', 'Hanoi', 'VN', 'nguynhep@gmail.com', '0369625299'),
(6, 'Ha', 'Van Thi', 'Bac Son Ward, Trang Bom District', 'Dong Nai', 'VN', 'ylchang@comcast.net', '0384564243'),
(7, 'Tam', 'Lam Thi', '20 Thuy Khue, Tay Ho', 'Hanoi', 'VN', 'uncled@yahoo.com', '0965071890 '),
(8, 'Lan', 'Châu', '	8424 Phố Hồng Thiện Trường', 'Hải Phòng', 'VN', 'dsugal@me.com', '0705228686'),
(9, 'Kim', 'Đặng Tôn', '9 Phố Từ Hội Chiến', 'Hải Phòng', 'VN', 'nhanson@liposhop.site', '0974787414'),
(10, 'Hoàng', 'Ngô Việt ', '	6558 Phố Thiều Tấn Tân', 'Hà Nội', 'VN', 'ullman@gmail.com', '0352302991 '),
(11, 'Hoàng Hiếu', 'Nghĩa', '	7 Phố Khuất Nhã Tâm', '	Cần Thơ', 'VN', 'syncnine@yahoo.ca', '0962232190 '),
(12, 'Nhật', 'Chử Quang ', '7 Phố Quản Lân Hưng', 'Hải Phòng', 'VN', 'bbirth@comcast.net', '0967438488'),
(13, 'Bảo', 'Bùi Thiệu', '	91 Phố Thời', '	Đà Nẵng', 'VN', 'cameron@icloud.com', '0376736501 '),
(14, 'Phương', 'Đỗ Hoài ', '	2401 Phố Chế Giác Phụng', 'Hồ Chí Minh	', 'VN', 'jaesenj@att.net', '0976895989 '),
(15, ' Thương', 'Văn Minh', '829 Phố Bồ Tài Quỳnh', 'Hải Phòng', 'VN', 'jaxweb@yahoo.com', '0869228823'),
(16, 'Thủy', 'Trần Hồng', '	533 Phố Lý Trưởng Dân', '	Hồ Chí Minh', 'VN', 'adamk@optonline.net', '0383677647'),
(17, 'Huệ', 'Ngô Bích', '112 Nguyễn Văn Cừ, Bồ Đề, Long Biên', 'Hà Nội', 'VN', 'forsberg@gmail.com', '0354513870 '),
(18, 'Ánh', 'Huỳnh Thu ', '278 Phố Án', '	Cần Thơ', 'VN', 'bflong@yahoo.ca', '0969527819'),
(19, 'Thanh', 'Triệu Yến', '	8 Phố Ong Thoại Hiếu', 'Cần Thơ', 'VN', 'mcsporran@verizon.net', '0823480005'),
(20, 'Bình', 'Tạ Thái ', '01 Le Hong Phong', 'Hue', 'VN', 'raides@verizon.net', '0369392410'),
(21, 'Bằng', 'Trần Hữu', '49 Nguyen Du', 'Hanoi', 'VN', 'sinkou@hotmail.com', '0366993286'),
(22, 'Chính', 'Nguyễn Ðức ', '18 Le Phung Hieu, Hoan Kiem', 'Hanoi', 'VN', 'flakeg@att.net', '0358514637'),
(23, 'Tường', 'Phan Trọng', '	164 Phố Hoàng Cơ Hiền', 'Hồ Chí Minh	', 'VN', 'papathan@yahoo.com', '0339511516'),
(24, 'Ninh', 'Nguyễn Thịnh', '24 Trang Tien, Hoan Kiem', 'Hanoi', 'VN', 'loscar@msn.com', '0961073350'),
(25, 'Thắng', 'Trần Hữu ', '29 Hang Bai, Hoan Kiem', 'Hanoi', 'VN', 'elflord@att.net', '0986668985'),
(26, 'Megan', 'Matthews', '857 Lake Forest Drive', 'Marlton', 'NJ', 'parasite@sbcglobal.net', '310-404-8867'),
(27, 'Jamari', 'Duffy', '901 Purple Finch St', 'North Olmsted', 'OH', 'steve@icloud.com', '342-273-8703'),
(28, 'Jorden', 'Mejia', '94 Johnson Ave', 'Upper Darby', 'PA', 'isaacson@aol.com', '520-271-9924'),
(29, 'Remington', 'Wilson', '7486 E Linden Lane', 'Gwynn Oak', 'MD', 'papathan@msn.com', '986-555-6036'),
(30, 'Jaime', 'Conley', '175 Victoria Dr', 'Powhatan', 'VA', 'dkeeler@outlook.com', '828-416-1195'),
(31, 'Adyson', 'Rosario', '403 Highland Street', 'Rome', 'NY', 'mbalazin@aol.com', '399-620-0096'),
(32, 'Alexis', 'Owen', '56 Canal Road', 'Suffolk', 'VA', 'munson@yahoo.ca', '468-405-3074'),
(33, 'Isabella', 'Norris', '404 Grand Street', 'Ridgecrest', 'CA', 'oster@comcast.net', '800-257-6419'),
(34, 'Dallas', 'Hanson', '8548 Coffee Drive', 'Collegeville', 'PA', 'denism@hotmail.com', '456-885-6495'),
(35, 'Laci', 'Figueroa', '8254 Amerige St', 'Murfreesboro', 'TN', 'shazow@yahoo.ca', '431-402-7023'),
(36, 'Talan', 'Bolton', '964 Southampton Street', 'Holly Springs', 'NC', 'thowell@outlook.com', '952-234-8973'),
(37, 'Keegan', 'Oneal', '43 Lower River St', 'Arvada', 'CO', 'eegsa@yahoo.ca', '659-415-3573'),
(38, 'Yareli', 'Wilcox', '401 N Shub Farm Ave', 'Cantonment', 'FL', 'mastinfo@optonline.net', '459-390-4906'),
(39, 'Malia', 'Moon', '3 Halifax Street', 'Fresh Meadows', 'NY', 'rsteiner@yahoo.ca', '347-294-2041'),
(40, 'Lauryn', 'Baxter', '64 Pennington St', 'Bensalem', 'PA', 'knorr@aol.com', '233-378-6219'),
(41, 'Jaidyn', 'Monroe', '77 Cedar Swamp Dr', 'Detroit', 'MI', 'mcmillan@icloud.com', '814-431-5867'),
(42, 'Hailie', 'Fritz', '7496 Rosewood Avenue', 'Basking Ridge', 'NJ', 'mosses@att.net', '825-338-1072'),
(43, 'Anastasia', 'Murillo', '3 Saxon Ave', 'Bowling Green', 'KY', 'amaranth@outlook.com', '814-458-0264'),
(44, 'Henry', 'Greene', '1 Olive St', 'Norristown', 'PA', 'bockelboy@yahoo.com', '631-317-3252'),
(45, 'Alisa', 'Melton', '9981 Valley View Street', 'Reading', 'MA', 'brickbat@hotmail.com', '625-935-1250'),
(46, 'Frankie', 'Schmitt', '8727 George Ave', 'Gaithersburg', 'MD', 'themer@live.com', '412-513-6786'),
(47, 'Will', 'Ramirez', '22 Glen Ridge Street', 'Arlington', 'MA', 'birddog@optonline.net', '925-620-6861'),
(48, 'Hayley', 'Wolfe', '265 Tower Street', 'Hempstead', 'NY', 'valdez@hotmail.com', '266-629-5060'),
(49, 'Chad', 'Cooley', '9501 Campfire Ave', 'Charlotte', 'NC', 'gator@sbcglobal.net', '561-670-6581'),
(50, 'Chasity', 'Brennan', '18 Longfellow Ave', 'Union City', 'NJ', 'tkrotchko@me.com', '322-916-7918'),
(51, 'Kendall', 'Meyer', '482 W Silver Spear St', 'Natchez', 'MS', 'plover@live.com', '900-285-7237'),
(52, 'Lucy', 'Navarro', '641 Hill Lane', 'Monroeville', 'PA', 'sisyphus@aol.com', '479-222-2795'),
(53, 'Rayna', 'Marshall', '7254 James St', 'Cuyahoga Falls', 'OH', 'matty@att.net', '514-677-5805'),
(54, 'Sanai', 'Gray', '729 Sherman Avenue', 'Miamisburg', 'OH', 'balchen@hotmail.com', '933-275-5030'),
(55, 'Valentina', 'Hogan', '265 N Valley View Ave', 'Panama City', 'FL', 'jgmyers@outlook.com', '510-813-1783'),
(56, 'Moshe', 'Powers', '7763 W Strawberry Drive', 'Eau Claire', 'WI', 'gfody@aol.com', '212-220-2744'),
(57, 'Annie', 'Frederick', '8677 Honey Creek St', 'Wilmette', 'IL', 'houle@me.com', '739-511-7408'),
(58, 'Alvin', 'Bradley', '9793 Mulberry Road', 'Macomb', 'MI', 'nwiger@sbcglobal.net', '743-392-3756'),
(59, 'Kaya', 'Mays', '389 Water Lane', 'Horn Lake', 'MS', 'grossman@outlook.com', '748-219-7266'),
(60, 'Rashad', 'House', '7178 Mill St', 'Mount Vernon', 'NY', 'kwilliams@gmail.com', '267-905-9863'),
(61, 'Brogan', 'Newman', '216 Glen Creek Ave', 'Spartanburg', 'SC', 'yzheng@mac.com', '489-834-8509'),
(62, 'Paris', 'Roberson', '9018 Madison Ave', 'Pomona', 'CA', 'rhialto@yahoo.ca', '918-973-0112'),
(63, 'Jessie', 'Ward', '515 Old 2nd St', 'Goldsboro', 'NC', 'seano@verizon.net', '957-327-2664'),
(64, 'Zane', 'Kaiser', '8789 S Nichols St', 'Calumet City', 'IL', 'nasor@me.com', '976-971-5906'),
(65, 'Joanna', 'Patton', '7565 Newport Rd', 'Ottawa', 'IL', 'penna@optonline.net', '812-281-7607'),
(66, 'Zain', 'Fletcher', '489 Railroad St', 'Watertown', 'MA', 'jrkorson@mac.com', '423-292-8323'),
(67, 'Harper', 'Davenport', '461 Creek St', 'Pueblo', 'CO', 'mccurley@outlook.com', '903-938-1934'),
(68, 'Alexandria', 'Green', '8534 Iroquois Street', 'Oviedo', 'FL', 'dartlife@verizon.net', '740-270-4391'),
(69, 'Christopher', 'Mcmillan', '12 NW Kent St', 'Oxford', 'MS', 'gommix@me.com', '440-641-0693'),
(70, 'Adriana', 'Compton', '26 South Dogwood Ave', 'Dunedin', 'FL', 'adhere@sbcglobal.net', '611-376-7210'),
(71, 'Adrienne', 'Marquez', '8537 East Hall Lane', 'Elk River', 'MN', 'phish@hotmail.com', '459-210-4092'),
(72, 'Cordell', 'Mosley', '8819 Summerhouse St', 'Snellville', 'GA', 'afeldspar@comcast.net', '549-403-8376'),
(73, 'Derrick', 'Keller', '556 Bay Meadows Ave', 'Gibsonia', 'PA', 'crusader@outlook.com', '569-795-8637'),
(74, 'Darian', 'Adams', '9 Joy Ridge DR', 'Newton', 'NJ', 'parents@verizon.net', '725-512-1058'),
(75, 'Simon', 'Macdonald', '8505 South Cross Ave', 'Parkville', 'MD', 'marioph@me.com', '393-915-4676'),
(76, 'James', 'Jefferson', '7783 8th St', 'Richmond', 'VA', 'dhwon@live.com', '675-316-9651'),
(77, 'Justin', 'Berry', '9896 William Dr', 'Hephzibah', 'GA', 'jespley@icloud.com', '713-350-0017'),
(78, 'Joanna', 'Vance', '9115 Academy Ave', 'Hopkinsville', 'KY', 'parksh@yahoo.ca', '983-793-5543'),
(79, 'Corinne', 'Schneider', '8 North John Ave', 'Camden', 'NJ', 'dgriffith@gmail.com', '828-733-3793'),
(80, 'Alonzo', 'Kim', '9882 Greystone St', 'Tualatin', 'OR', 'smallpaul@verizon.net', '287-346-5598'),
(81, 'Maeve', 'Wolf', '17 Gulf Avenue', 'Deer Park', 'NY', 'cameron@me.com', '813-997-5505'),
(82, 'Kayden', 'Brennan', '9678 East Second St', 'Lacey', 'WA', 'jaxweb@msn.com', '581-490-2910'),
(83, 'Brianna', 'Ochoa', '8594 W Primrose Dr', 'Bethel Park', 'PA', 'inico@sbcglobal.net', '207-253-6039'),
(84, 'John', 'Chapman', '21 Laurel St', 'Osseo', 'MN', 'nogin@optonline.net', '975-251-7418'),
(85, 'Jayden', 'Haas', '9 Acacia Ave', 'Lagrange', 'GA', 'birddog@outlook.com', '661-348-3687'),
(86, 'Lila', 'Bean', '181 Rockledge St', 'Grosse Pointe', 'MI', 'malin@verizon.net', '381-291-3227'),
(87, 'Dereon', 'Christensen', '686 Brewery Road', 'Piqua', 'OH', 'gmcgath@aol.com', '449-334-0030'),
(88, 'Evie', 'Vasquez', '931 Vale St', 'Casselberry', 'FL', 'themer@att.net', '761-462-4362'),
(89, 'Chris', 'Robinson', '7904 Buttonwood St', 'Rolling Meadows', 'IL', 'jshearer@att.net', '740-317-1565'),
(90, 'Marina', 'Lynch', '220 Annadale St', 'Dundalk', 'MD', 'maradine@live.com', '375-955-4770'),
(91, 'Angelique', 'Orr', '33 Wall Drive', 'Laurel', 'MD', 'wayward@att.net', '920-847-3144'),
(92, 'Jadyn', 'Duke', '7 Central Street', 'East Stroudsburg', 'PA', 'wortmanj@outlook.com', '504-769-8542'),
(93, 'Ashly', 'Mays', '526 Mechanic Street', 'Glen Allen', 'VA', 'chaikin@optonline.net', '690-252-2019'),
(94, 'Travis', 'Hale', '284 Bellevue Rd', 'Palm Bay', 'FL', 'fallorn@yahoo.ca', '381-479-7780'),
(95, 'Clara', 'Moses', '8794 North George Court', 'Catonsville', 'MD', 'ehood@hotmail.com', '896-810-2805'),
(96, 'Bethany', 'English', '884 Pennsylvania Dr', 'Klamath Falls', 'OR', 'delpino@sbcglobal.net', '247-914-8204'),
(97, 'Justice', 'Ayers', '7863 Glen Eagles Ave', 'Chicago', 'IL', 'noneme@aol.com', '954-604-7142'),
(98, 'Greta', 'Miles', '126 Maple Drive', 'Dearborn Heights', 'MI', 'mjewell@yahoo.com', '466-469-8266'),
(99, 'Mohammad', 'Pena', '750 Pin Oak Drive', 'Morgantown', 'WV', 'chrisk@yahoo.com', '622-797-2357'),
(100, 'Jayden', 'Pope', '8785 Clinton Street', 'Woodbridge', 'VA', 'naupa@comcast.net', '378-231-7607'),
(101, 'Melissa', 'Simmons', '9988 Hilltop Street', 'Wheeling', 'WV', 'kevinm@sbcglobal.net', '563-507-9591'),
(102, 'Bryan', 'Burgess', '9143 Pine Circle', 'Englewood', 'NJ', 'sacraver@optonline.net', '436-912-8635'),
(103, 'Weston', 'Holden', '550 Wentworth Dr', 'Crawfordsville', 'IN', 'morain@msn.com', '556-303-4802'),
(104, 'Ainsley', 'Spence', '184 Santa Clara Avenue', 'Clinton', 'MD', 'oevans@optonline.net', '813-522-4409'),
(105, 'Adam', 'Cox', '74 Shirley Rd', 'Ozone Park', 'NY', 'fwiles@live.com', '482-795-7224'),
(106, 'Kayleigh', 'Hardy', '348 Ramblewood St', 'Norwalk', 'CT', 'geeber@optonline.net', '330-564-2716'),
(107, 'Braden', 'Eaton', '96 Mountainview Ave', 'South Plainfield', 'NJ', 'adillon@me.com', '910-518-2569'),
(108, 'Viviana', 'Perry', '96 Indian Summer Court', 'Greensburg', 'PA', 'agolomsh@att.net', '538-529-3270'),
(109, 'Wendy', 'Kline', '7843 W William Ave', 'Torrington', 'CT', 'gward@live.com', '719-452-3133'),
(110, 'Keenan', 'Bradford', '853 Ohio Lane', 'Vincentown', 'NJ', 'jkegl@verizon.net', '532-224-2358'),
(111, 'Maritza', 'Mccarthy', '832 North Lake Forest Ave', 'Yorktown Heights', 'NY', 'wikinerd@optonline.net', '656-463-2920'),
(112, 'Sophie', 'Henry', '77 S Fawn Street', 'The Villages', 'FL', 'chrisj@yahoo.com', '775-581-4083'),
(113, 'James', 'Odonnell', '424 Lookout Street', 'Lansing', 'MI', 'staikos@yahoo.ca', '307-417-3397'),
(114, 'Elisa', 'Cantrell', '82 4th Dr', 'Bayonne', 'NJ', 'stakasa@yahoo.com', '958-282-5834'),
(115, 'Braylon', 'Mendoza', '38 Jockey Hollow Street', 'Sarasota', 'FL', 'leviathan@outlook.com', '835-758-3684'),
(116, 'Julius', 'Bond', '8865 South Rockledge St', 'Montclair', 'NJ', 'kenja@att.net', '784-381-9622'),
(117, 'Christian', 'Sheppard', '199 North Bridle Lane', 'Florence', 'SC', 'hermes@mac.com', '464-226-2761'),
(118, 'Leon', 'Rose', '18 Williams St', 'Freeport', 'NY', 'vmalik@me.com', '629-614-3230'),
(119, 'Julio', 'Pollard', '7162 Clay Lane', 'Newark', 'NJ', 'hutton@att.net', '319-483-3927'),
(120, 'Parker', 'Church', '232 Bradford Road', 'Strongsville', 'OH', 'lauronen@sbcglobal.net', '491-884-5142'),
(121, 'Julia', 'Ballard', '23 Branch St', 'Mount Prospect', 'IL', 'keiji@yahoo.com', '814-207-0175'),
(122, 'Molly', 'Waller', '177 Richardson Dr', 'Southfield', 'MI', 'satch@live.com', '739-965-6824'),
(123, 'Natasha', 'Small', '8175 Miller Street', 'New Britain', 'CT', 'liedra@live.com', '794-461-9929'),
(124, 'Fisher', 'Kline', '7778 Mayflower St', 'Ames', 'IA', 'donev@optonline.net', '598-929-3796'),
(125, 'Maggie', 'Mccarthy', '322 Manchester Street', 'Saint Paul', 'MN', 'fudrucker@yahoo.ca', '796-719-6501'),
(126, 'Justus', 'Clayton', '7357 South Poplar St', 'Mason', 'OH', 'msroth@hotmail.com', '701-735-1336'),
(127, 'Sammy', 'King', '457 Magnolia Ave', 'Oakland Gardens', 'NY', 'dalamb@live.com', '238-389-3800'),
(128, 'Zayne', 'Robles', '406 South Elmwood St', 'Valdosta', 'GA', 'gozer@hotmail.com', '401-673-6733'),
(129, 'Alfonso', 'Christensen', '578 Joy Ridge Road', 'Jamaica Plain', 'MA', 'burns@comcast.net', '705-239-6647'),
(130, 'Prince', 'Rivas', '542 Goldfield Drive', 'Seattle', 'WA', 'singh@optonline.net', '662-547-7098'),
(131, 'Reginald', 'Humphrey', '851 Corona St', 'Superior', 'WI', 'kmiller@icloud.com', '950-654-8629'),
(132, 'Elyse', 'Williamson', '88 Fawn Court', 'Williamsport', 'PA', 'goresky@me.com', '908-298-7526'),
(133, 'George', 'Joyce', '7940 Rockville Drive', 'Berwyn', 'IL', 'fglock@comcast.net', '483-910-7929'),
(134, 'Gauge', 'Daugherty', '79 Bridle Street', 'Linden', 'NJ', 'skoch@mac.com', '828-228-5616'),
(135, 'Oliver', 'Berg', '7 Coffee Drive', 'Chesapeake', 'VA', 'fwitness@gmail.com', '638-986-9853'),
(136, 'Kian', 'Shields', '8225 Arnold Lane', 'Middleton', 'WI', 'pakaste@live.com', '463-600-4566'),
(137, 'Alisson', 'Hutchinson', '740 N Princess Ave', 'Beachwood', 'OH', 'mhassel@verizon.net', '406-822-2849'),
(138, 'Lilly', 'Conway', '82 Green Hill Ave', 'Fullerton', 'CA', 'tmaek@comcast.net', '367-340-5495'),
(139, 'Marina', 'Hutchinson', '7727 Brewery St', 'Middle River', 'MD', 'sokol@yahoo.ca', '522-273-0035'),
(140, 'Joe', 'Farrell', '12 Illinois Street', 'Hazleton', 'PA', 'ganter@comcast.net', '624-574-4780'),
(141, 'Adyson', 'Chandler', '7483 Young Rd Suite 50', 'North Andover', 'MA', 'seebs@sbcglobal.net', '759-767-7507'),
(142, 'Hana', 'Waller', '378 Glenlake Lane', 'Summerfield', 'FL', 'rgiersig@aol.com', '479-802-2162'),
(143, 'John', 'Medina', '135 Harrison Ave', 'Thornton', 'CO', 'mgemmons@live.com', '338-591-0502'),
(144, 'Charity', 'Carr', '77 Roehampton Dr', 'Beltsville', 'MD', 'benits@me.com', '522-432-0614'),
(145, 'Paisley', 'Long', '7 County St', 'Lake Zurich', 'IL', 'hllam@yahoo.com', '903-951-2837'),
(146, 'Justice', 'Levine', '53 Arlington Street', 'Biloxi', 'MS', 'emmanuel@att.net', '610-962-2072'),
(147, 'Bentley', 'Dougherty', '631 Clark Ave', 'Memphis', 'TN', 'sriha@optonline.net', '801-800-1435'),
(148, 'Annabelle', 'Potts', '1 Old Lawrence St', 'Stratford', 'CT', 'euice@aol.com', '442-645-7330'),
(149, 'Clark', 'Faulkner', '7374 Livingston St', 'Lithonia', 'GA', 'camenisch@optonline.net', '846-492-4708'),
(150, 'Ronald', 'Clements', '779 Pine St', 'Rego Park', 'NY', 'mnemonic@msn.com', '930-960-5638'),
(151, 'Madilyn', 'Fischer', '308 Saxton Drive', 'Point Pleasant Beach', 'NJ', 'mfburgo@comcast.net', '344-207-0486'),
(152, 'Ayaan', 'Wilkerson', '166 Woodside Ave', 'Cape Coral', 'FL', 'willg@gmail.com', '629-689-5102'),
(153, 'Teagan', 'Kennedy', '93 Meadowbrook Rd', 'Oklahoma City', 'OK', 'caidaperl@yahoo.com', '791-276-3103'),
(154, 'Misael', 'Pierce', '23 Cardinal Lane', 'New York', 'NY', 'matty@verizon.net', '287-366-6218'),
(155, 'Ismael', 'Carrillo', '193 Walnutwood Lane', 'Michigan City', 'IN', 'ryanvm@yahoo.ca', '526-910-6461'),
(156, 'Kiera', 'Martin', '510 South St Louis Dr', 'Tampa', 'FL', 'psichel@mac.com', '628-445-4245'),
(157, 'Vivian', 'Hooper', '777 Bow Ridge Lane', 'Copperas Cove', 'TX', 'gospodin@mac.com', '550-332-1624'),
(158, 'Kadyn', 'Lawrence', '60 Big Rock Cove St', 'Beverly', 'MA', 'leviathan@me.com', '365-797-1420'),
(159, 'Jadyn', 'Gibson', '388 2nd St', 'Columbus', 'GA', 'catalog@mac.com', '437-350-6986'),
(160, 'Quinn', 'Curry', '18 Saxon Street', 'Odenton', 'MD', 'bowmanbs@yahoo.com', '448-771-5324'),
(161, 'Arthur', 'Barrett', '36 Cedarwood St', 'Hamburg', 'NY', 'mnemonic@gmail.com', '322-405-1126'),
(162, 'Teagan', 'Becker', '3 Roehampton Street Unit 637', 'Virginia Beach', 'VA', 'formis@mac.com', '721-303-2911'),
(163, 'Jaelynn', 'Francis', '180 N Lees Creek Ave', 'Bemidji', 'MN', 'goldberg@me.com', '246-729-9187'),
(164, 'Cael', 'Zamora', '791 Lilac Lane', 'Apex', 'NC', 'stewwy@att.net', '264-480-3394'),
(165, 'Cullen', 'Lester', '2 Acacia Dr', 'Elk Grove Village', 'IL', 'afeldspar@yahoo.ca', '219-584-8208'),
(166, 'Jeremiah', 'Newman', '635 Jockey Hollow Court', 'Benton Harbor', 'MI', 'stinson@mac.com', '989-586-4082'),
(167, 'Triston', 'Harris', '8935 West Silver Spear St', 'Smithtown', 'NY', 'cgcra@verizon.net', '610-785-2105'),
(168, 'Layton', 'Shepherd', '8824 Princess Drive', 'New Baltimore', 'MI', 'claypool@sbcglobal.net', '605-548-4510'),
(169, 'Aydin', 'Shields', '14 Fairfield Dr', 'Boca Raton', 'FL', 'granboul@mac.com', '541-439-0681'),
(170, 'Jeffery', 'Dunlap', '33 Saxon Road', 'Fort Washington', 'MD', 'dbrobins@aol.com', '441-285-6030'),
(171, 'Demarion', 'Garner', '395 Redwood Drive', 'Randolph', 'MA', 'william@optonline.net', '302-477-6298'),
(172, 'Samson', 'Wong', '8720 Prairie Dr', 'North Royalton', 'OH', 'makarow@aol.com', '631-667-1142'),
(173, 'Mateo', 'Walker', '37 Longbranch Rd', 'Franklin Square', 'NY', 'frostman@gmail.com', '759-263-4490'),
(174, 'Marina', 'Harvey', '808 Harvey Road', 'Grovetown', 'GA', 'rattenbt@comcast.net', '845-583-1351'),
(175, 'Cristian', 'Haynes', '96 Sage Lane', 'Mechanicsville', 'VA', 'policies@aol.com', '534-210-5489'),
(176, 'Ireland', 'Petty', '99 Overlook Ave', 'Mebane', 'NC', 'psharpe@gmail.com', '356-207-7725'),
(177, 'Chaz', 'Page', '55 East Ramblewood Ave', 'Palatine', 'IL', 'payned@att.net', '880-953-9131'),
(178, 'Andy', 'Park', '7106 SE Border Drive', 'Jeffersonville', 'IN', 'tristan@comcast.net', '529-810-1204'),
(179, 'Julien', 'Vincent', '780 E River Dr', 'San Pablo', 'CA', 'sagal@yahoo.ca', '878-739-3726'),
(180, 'Paola', 'Dominguez', '62 Birch Hill Ave', 'Willoughby', 'OH', 'murty@icloud.com', '370-983-4120'),
(181, 'Jermaine', 'Brandt', '69 Edgewater Street', 'Mundelein', 'IL', 'tangsh@hotmail.com', '902-668-7000'),
(182, 'Veronica', 'Neal', '8596 Anderson Street', 'Marquette', 'MI', 'staikos@comcast.net', '385-420-7464'),
(183, 'Audrey', 'Levy', '65 Primrose Avenue', 'Centereach', 'NY', 'ovprit@yahoo.com', '622-319-7930'),
(184, 'Zain', 'Morris', '8948 Bedford Avenue', 'Champlin', 'MN', 'marcs@live.com', '725-765-0951'),
(185, 'Jaydon', 'Owen', '4 Sunbeam St', 'Port Saint Lucie', 'FL', 'lydia@att.net', '259-246-1374'),
(186, 'Andreas', 'Henderson', '287 Airport Ave', 'Georgetown', 'SC', 'chaki@verizon.net', '518-624-8467'),
(187, 'Mckenna', 'Donaldson', '8 Oxford Street', 'Front Royal', 'VA', 'jesse@sbcglobal.net', '675-320-9989'),
(188, 'Johan', 'Norris', '8783 Lawrence Ave', 'Hendersonville', 'NC', 'starstuff@optonline.net', '460-603-2474'),
(189, 'Sidney', 'Rogers', '77 W Riverside Street', 'Cambridge', 'MA', 'karasik@icloud.com', '273-734-8614'),
(190, 'Trey', 'Terrell', '58 Hill Street', 'Massapequa', 'NY', 'gordonjcp@outlook.com', '494-294-4674'),
(191, 'Abram', 'Sweeney', '7891 N Miller St', 'Sioux City', 'IA', 'zeller@att.net', '279-631-9780'),
(192, 'Maleah', 'Wright', '7932 Sunset Street', 'Fond Du Lac', 'WI', 'overbom@optonline.net', '718-296-2578'),
(193, 'Nasir', 'Graves', '1 North Pin Oak Road', 'Birmingham', 'AL', 'feamster@verizon.net', '648-709-1177'),
(194, 'Chanel', 'Morton', '8447 Plumb Branch Road', 'Wooster', 'OH', 'elflord@comcast.net', '576-974-0328'),
(195, 'Ashtyn', 'Frazier', '32 Elm Lane', 'Lake In The Hills', 'IL', 'majordick@msn.com', '811-334-6284'),
(196, 'Quentin', 'Davies', '954 Trenton Street', 'Herndon', 'VA', 'heroine@aol.com', '595-211-7057'),
(197, 'Emerson', 'Long', '9927 W Pheasant Drive', 'West New York', 'NJ', 'tamas@icloud.com', '265-337-9379'),
(198, 'Danielle', 'Gould', '653 Anderson Drive', 'Elizabeth City', 'NC', 'dgriffith@hotmail.com', '410-903-7957'),
(199, 'Jamarion', 'Le', '278 S Saxon Court', 'Tullahoma', 'TN', 'hillct@comcast.net', '639-312-9329'),
(200, 'Chance', 'Mcdowell', '78 Virginia Rd', 'Saint Joseph', 'MI', 'chinthaka@sbcglobal.net', '698-379-0629');

-- --------------------------------------------------------

--
-- Table structure for table `hotel_info`
--

CREATE TABLE `hotel_info` (
  `hotel_info_id` int(6) NOT NULL,
  `hotel_name` varchar(30) NOT NULL,
  `address` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `country` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `active` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hotel_info`
--

INSERT INTO `hotel_info` (`hotel_info_id`, `hotel_name`, `address`, `city`, `country`, `email`, `phone`, `active`) VALUES
(1, 'Regal Inn & Suites', '389 Truong Dinh, Hai Ba Trung', 'Ha Noi', 'Vietnam', 'info@regalinn.com', '216-555-1212', 1);

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `invoice_id` int(10) NOT NULL,
  `res_room_id` int(10) NOT NULL,
  `num_days` int(3) NOT NULL,
  `rate` decimal(5,2) NOT NULL,
  `room_service_charges` decimal(5,2) DEFAULT 0.00,
  `payment_type` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `reservation_id` int(10) NOT NULL,
  `customer_id` int(6) NOT NULL,
  `user_id` int(6) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `comments` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`reservation_id`, `customer_id`, `user_id`, `created_at`, `comments`, `active`) VALUES
(1001, 1, 1, '2020-10-21 09:12:46', '', 1),
(1002, 2, 1, '2020-10-21 09:12:46', '', 1),
(1003, 3, 2, '2020-10-21 09:12:46', '', 1),
(1004, 4, 1, '2020-10-21 09:12:46', '', 1),
(1005, 5, 3, '2020-10-21 09:12:46', '', 1),
(1006, 6, 1, '2020-10-21 09:12:46', '', 1),
(1007, 7, 1, '2020-10-21 09:12:46', '', 1),
(1008, 8, 2, '2020-10-21 09:12:46', '', 1),
(1009, 9, 1, '2020-10-21 09:12:46', '', 1),
(1010, 10, 3, '2020-10-21 09:12:46', '', 1),
(1011, 11, 1, '2020-10-21 09:12:46', '', 1),
(1012, 12, 1, '2020-10-21 09:12:46', '', 1),
(1013, 13, 2, '2020-10-21 09:12:46', '', 1),
(1014, 14, 1, '2020-10-21 09:12:46', '', 1),
(1015, 15, 3, '2020-10-21 09:12:46', '', 1),
(1016, 16, 1, '2020-10-21 09:12:46', '', 1),
(1017, 17, 1, '2020-10-21 09:12:46', '', 1),
(1018, 18, 2, '2020-10-21 09:12:46', '', 1),
(1019, 19, 1, '2020-10-21 09:12:46', '', 1),
(1020, 20, 3, '2020-10-21 09:12:46', '', 1),
(1021, 21, 2, '2020-10-21 09:12:46', '', 1),
(1022, 22, 3, '2020-10-21 09:12:46', '', 1),
(1023, 23, 1, '2020-10-21 09:12:46', '', 1),
(1024, 24, 3, '2020-10-21 09:12:46', '', 1),
(1025, 25, 2, '2020-10-21 09:12:46', '', 1),
(1026, 26, 1, '2020-10-21 09:12:46', '', 1),
(1027, 27, 2, '2020-10-21 09:12:46', '', 1),
(1028, 28, 1, '2020-10-21 09:12:46', '', 1),
(1029, 29, 3, '2020-10-21 09:12:46', '', 1),
(1030, 30, 2, '2020-10-21 09:12:46', '', 1),
(1031, 31, 3, '2020-10-21 09:12:46', '', 1),
(1032, 32, 1, '2020-10-21 09:12:46', '', 1),
(1033, 33, 3, '2020-10-21 09:12:46', '', 1),
(1034, 34, 2, '2020-10-21 09:12:46', '', 1),
(1035, 35, 1, '2020-10-21 09:12:46', '', 1),
(1036, 36, 2, '2020-10-21 09:12:46', '', 1),
(1037, 37, 1, '2020-10-21 09:12:46', '', 1),
(1038, 38, 3, '2020-10-21 09:12:46', '', 1),
(1039, 39, 2, '2020-10-21 09:12:46', '', 1),
(1040, 40, 3, '2020-10-21 09:12:46', '', 1),
(1041, 41, 1, '2020-10-21 09:12:46', '', 1),
(1042, 42, 3, '2020-10-21 09:12:46', '', 1),
(1043, 43, 2, '2020-10-21 09:12:46', '', 1),
(1044, 44, 1, '2020-10-21 09:12:46', '', 1),
(1045, 45, 3, '2020-10-21 09:12:46', '', 1),
(1046, 46, 2, '2020-10-21 09:12:46', '', 1),
(1047, 47, 3, '2020-10-21 09:12:46', '', 1),
(1048, 48, 1, '2020-10-21 09:12:46', '', 1),
(1049, 49, 3, '2020-10-21 09:12:46', '', 1),
(1050, 50, 2, '2020-10-21 09:12:46', '', 1),
(1051, 51, 1, '2020-10-21 09:12:46', '', 1),
(1052, 52, 2, '2020-10-21 09:12:46', '', 1),
(1053, 53, 1, '2020-10-21 09:12:46', '', 1),
(1054, 54, 3, '2020-10-21 09:12:46', '', 1),
(1055, 55, 2, '2020-10-21 09:12:46', '', 1),
(1056, 56, 3, '2020-10-21 09:12:46', '', 1),
(1057, 57, 1, '2020-10-21 09:12:46', '', 1),
(1058, 58, 3, '2020-10-21 09:12:46', '', 1),
(1059, 59, 2, '2020-10-21 09:12:46', '', 1),
(1060, 60, 1, '2020-10-21 09:12:46', '', 1),
(1061, 61, 3, '2020-10-21 09:12:46', '', 1),
(1062, 62, 2, '2020-10-21 09:12:46', '', 1),
(1063, 63, 3, '2020-10-21 09:12:46', '', 1),
(1064, 64, 1, '2020-10-21 09:12:46', '', 1),
(1065, 65, 3, '2020-10-21 09:12:46', '', 1),
(1066, 66, 2, '2020-10-21 09:12:46', '', 1),
(1067, 67, 1, '2020-10-21 09:12:46', '', 1),
(1068, 68, 2, '2020-10-21 09:12:46', '', 1),
(1069, 69, 1, '2020-10-21 09:12:46', '', 1),
(1070, 70, 3, '2020-10-21 09:12:46', '', 1),
(1071, 71, 2, '2020-10-21 09:12:46', '', 1),
(1072, 72, 3, '2020-10-21 09:12:46', '', 1),
(1073, 73, 1, '2020-10-21 09:12:46', '', 1),
(1074, 74, 3, '2020-10-21 09:12:46', '', 1),
(1075, 75, 2, '2020-10-21 09:12:46', '', 1),
(1076, 76, 1, '2020-10-21 09:12:46', '', 1),
(1077, 77, 3, '2020-10-21 09:12:46', '', 1),
(1078, 78, 2, '2020-10-21 09:12:46', '', 1),
(1079, 79, 3, '2020-10-21 09:12:46', '', 1),
(1080, 80, 1, '2020-10-21 09:12:46', '', 1),
(1081, 81, 3, '2020-10-21 09:12:46', '', 1),
(1082, 82, 2, '2020-10-21 09:12:46', '', 1),
(1083, 83, 1, '2020-10-21 09:12:46', '', 1),
(1084, 84, 2, '2020-10-21 09:12:46', '', 1),
(1085, 85, 1, '2020-10-21 09:12:46', '', 1),
(1086, 86, 3, '2020-10-21 09:12:46', '', 1),
(1087, 87, 2, '2020-10-21 09:12:46', '', 1),
(1088, 88, 3, '2020-10-21 09:12:46', '', 1),
(1089, 89, 1, '2020-10-21 09:12:46', '', 1),
(1090, 90, 3, '2020-10-21 09:12:46', '', 1),
(1091, 91, 2, '2020-10-21 09:12:46', '', 1),
(1092, 92, 1, '2020-10-21 09:12:46', '', 1),
(1093, 93, 3, '2020-10-21 09:12:46', '', 1),
(1094, 94, 2, '2020-10-21 09:12:46', '', 1),
(1095, 95, 3, '2020-10-21 09:12:46', '', 1),
(1096, 96, 1, '2020-10-21 09:12:46', '', 1),
(1097, 97, 3, '2020-10-21 09:12:46', '', 1),
(1098, 98, 2, '2020-10-21 09:12:46', '', 1),
(1099, 99, 1, '2020-10-21 09:12:46', '', 1),
(1100, 100, 2, '2020-10-21 09:12:46', '', 1),
(1101, 101, 1, '2020-10-21 09:12:46', '', 1),
(1102, 102, 3, '2020-10-21 09:12:46', '', 1),
(1103, 103, 2, '2020-10-21 09:12:46', '', 1),
(1104, 104, 3, '2020-10-21 09:12:46', '', 1),
(1105, 105, 1, '2020-10-21 09:12:46', '', 1),
(1106, 106, 3, '2020-10-21 09:12:46', '', 1),
(1107, 107, 2, '2020-10-21 09:12:46', '', 1),
(1108, 108, 1, '2020-10-21 09:12:46', '', 1),
(1109, 109, 3, '2020-10-21 09:12:46', '', 1),
(1110, 110, 2, '2020-10-21 09:12:46', '', 1),
(1111, 111, 3, '2020-10-21 09:12:46', '', 1),
(1112, 112, 1, '2020-10-21 09:12:46', '', 1),
(1113, 113, 3, '2020-10-21 09:12:46', '', 1),
(1114, 114, 2, '2020-10-21 09:12:46', '', 1),
(1115, 115, 1, '2020-10-21 09:12:46', '', 1),
(1116, 116, 2, '2020-10-21 09:12:46', '', 1),
(1117, 117, 1, '2020-10-21 09:12:46', '', 1),
(1118, 118, 3, '2020-10-21 09:12:46', '', 1),
(1119, 119, 2, '2020-10-21 09:12:46', '', 1),
(1120, 120, 3, '2020-10-21 09:12:46', '', 1),
(1121, 121, 1, '2020-10-21 09:12:46', '', 1),
(1122, 122, 3, '2020-10-21 09:12:46', '', 1),
(1123, 123, 2, '2020-10-21 09:12:46', '', 1),
(1124, 124, 1, '2020-10-21 09:12:46', '', 1),
(1125, 125, 3, '2020-10-21 09:12:46', '', 1),
(1126, 126, 2, '2020-10-21 09:12:46', '', 1),
(1127, 127, 3, '2020-10-21 09:12:46', '', 1),
(1128, 128, 1, '2020-10-21 09:12:46', '', 1),
(1129, 129, 3, '2020-10-21 09:12:46', '', 1),
(1130, 130, 2, '2020-10-21 09:12:46', '', 1),
(1131, 131, 1, '2020-10-21 09:12:46', '', 1),
(1132, 132, 2, '2020-10-21 09:12:46', '', 1),
(1133, 133, 1, '2020-10-21 09:12:46', '', 1),
(1134, 134, 3, '2020-10-21 09:12:46', '', 1),
(1135, 135, 2, '2020-10-21 09:12:46', '', 1),
(1136, 136, 3, '2020-10-21 09:12:46', '', 1),
(1137, 137, 1, '2020-10-21 09:12:46', '', 1),
(1138, 138, 3, '2020-10-21 09:12:46', '', 1),
(1139, 139, 2, '2020-10-21 09:12:46', '', 1),
(1140, 140, 1, '2020-10-21 09:12:46', '', 1),
(1141, 141, 3, '2020-10-21 09:12:46', '', 1),
(1142, 142, 2, '2020-10-21 09:12:46', '', 1),
(1143, 143, 3, '2020-10-21 09:12:46', '', 1),
(1144, 144, 1, '2020-10-21 09:12:46', '', 1),
(1145, 145, 3, '2020-10-21 09:12:46', '', 1),
(1146, 146, 2, '2020-10-21 09:12:46', '', 1),
(1147, 147, 1, '2020-10-21 09:12:46', '', 1),
(1148, 148, 2, '2020-10-21 09:12:46', '', 1),
(1149, 149, 1, '2020-10-21 09:12:46', '', 1),
(1150, 150, 3, '2020-10-21 09:12:46', '', 1),
(1151, 151, 2, '2020-10-21 09:12:46', '', 1),
(1152, 152, 3, '2020-10-21 09:12:46', '', 1),
(1153, 153, 1, '2020-10-21 09:12:46', '', 1),
(1154, 154, 3, '2020-10-21 09:12:46', '', 1),
(1155, 155, 2, '2020-10-21 09:12:46', '', 1),
(1156, 156, 1, '2020-10-21 09:12:46', '', 1),
(1157, 157, 3, '2020-10-21 09:12:46', '', 1),
(1158, 158, 2, '2020-10-21 09:12:46', '', 1),
(1159, 159, 3, '2020-10-21 09:12:46', '', 1),
(1160, 160, 1, '2020-10-21 09:12:46', '', 1),
(1161, 161, 3, '2020-10-21 09:12:46', '', 1),
(1162, 162, 2, '2020-10-21 09:12:46', '', 1),
(1163, 163, 1, '2020-10-21 09:12:46', '', 1),
(1164, 164, 2, '2020-10-21 09:12:46', '', 1),
(1165, 165, 1, '2020-10-21 09:12:46', '', 1),
(1166, 166, 3, '2020-10-21 09:12:46', '', 1),
(1167, 167, 2, '2020-10-21 09:12:46', '', 1),
(1168, 168, 3, '2020-10-21 09:12:46', '', 1),
(1169, 169, 1, '2020-10-21 09:12:46', '', 1),
(1170, 170, 3, '2020-10-21 09:12:46', '', 1),
(1171, 171, 2, '2020-10-21 09:12:46', '', 1),
(1172, 172, 1, '2020-10-21 09:12:46', '', 1),
(1173, 173, 3, '2020-10-21 09:12:46', '', 1),
(1174, 174, 2, '2020-10-21 09:12:46', '', 1),
(1175, 175, 3, '2020-10-21 09:12:46', '', 1),
(1176, 176, 1, '2020-10-21 09:12:46', '', 1),
(1177, 177, 3, '2020-10-21 09:12:46', '', 1),
(1178, 178, 2, '2020-10-21 09:12:46', '', 1),
(1179, 179, 1, '2020-10-21 09:12:46', '', 1),
(1180, 180, 2, '2020-10-21 09:12:46', '', 1),
(1181, 181, 1, '2020-10-21 09:12:46', '', 1),
(1182, 182, 3, '2020-10-21 09:12:46', '', 1),
(1183, 183, 2, '2020-10-21 09:12:46', '', 1),
(1184, 184, 3, '2020-10-21 09:12:46', '', 1),
(1185, 185, 1, '2020-10-21 09:12:46', '', 1),
(1186, 186, 3, '2020-10-21 09:12:46', '', 1),
(1187, 187, 2, '2020-10-21 09:12:46', '', 1),
(1188, 188, 1, '2020-10-21 09:12:46', '', 1),
(1189, 189, 2, '2020-10-21 09:12:46', '', 1),
(1190, 190, 1, '2020-10-21 09:12:46', '', 1),
(1191, 191, 3, '2020-10-21 09:12:46', '', 1),
(1192, 192, 2, '2020-10-21 09:12:46', '', 1),
(1193, 193, 3, '2020-10-21 09:12:46', '', 1),
(1194, 194, 1, '2020-10-21 09:12:46', '', 1),
(1195, 195, 3, '2020-10-21 09:12:46', '', 1),
(1196, 196, 2, '2020-10-21 09:12:46', '', 1),
(1197, 197, 1, '2020-10-21 09:12:46', '', 1),
(1198, 198, 2, '2020-10-21 09:12:46', '', 1),
(1199, 199, 3, '2020-10-21 09:12:46', '', 1),
(1200, 200, 1, '2020-10-21 09:12:46', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `res_rooms`
--

CREATE TABLE `res_rooms` (
  `res_room_id` int(10) NOT NULL,
  `reservation_id` int(10) NOT NULL,
  `room_type_id` int(6) NOT NULL,
  `check_in_date` date NOT NULL,
  `check_out_date` date NOT NULL,
  `checked_in` tinyint(1) DEFAULT 0,
  `checked_out` tinyint(1) DEFAULT 0,
  `adults` int(3) NOT NULL,
  `room_id` int(6) DEFAULT NULL,
  `rate` decimal(5,2) NOT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `res_rooms`
--

INSERT INTO `res_rooms` (`res_room_id`, `reservation_id`, `room_type_id`, `check_in_date`, `check_out_date`, `checked_in`, `checked_out`, `adults`, `room_id`, `rate`, `comments`, `active`) VALUES
(1001, 1001, 1, '2020-10-18', '2020-10-22', 1, 0, 1, 9, '109.99', 'needs a late checkout time', 1),
(1002, 1002, 2, '2020-10-18', '2020-10-22', 1, 0, 2, 4, '119.99', '', 1),
(1003, 1003, 1, '2020-10-18', '2020-10-22', 1, 0, 2, 11, '109.99', '', 1),
(1004, 1004, 2, '2020-10-18', '2020-10-23', 1, 0, 1, 12, '119.99', 'wants a good view', 1),
(1005, 1005, 1, '2020-10-18', '2020-10-23', 1, 0, 2, 13, '109.99', '', 1),
(1006, 1006, 3, '2020-10-18', '2020-10-24', 1, 0, 1, 6, '129.99', '', 1),
(1007, 1007, 1, '2020-10-19', '2020-10-22', 1, 0, 2, 23, '109.99', '', 1),
(1008, 1008, 3, '2020-10-19', '2020-10-23', 1, 0, 2, 26, '129.99', '', 1),
(1009, 1009, 1, '2020-10-19', '2020-10-24', 1, 0, 1, 25, '109.99', '', 1),
(1010, 1010, 3, '2020-10-19', '2020-10-23', 1, 0, 3, 28, '129.99', '', 1),
(1011, 1011, 1, '2020-10-19', '2020-10-24', 1, 0, 1, 27, '109.99', '', 1),
(1012, 1012, 2, '2020-10-19', '2020-10-23', 1, 0, 2, 24, '119.99', '', 1),
(1013, 1013, 1, '2020-10-19', '2020-10-22', 1, 0, 2, 29, '109.99', '', 1),
(1014, 1014, 2, '2020-10-19', '2020-10-23', 1, 0, 1, 32, '119.99', '', 1),
(1015, 1015, 1, '2020-10-19', '2020-10-22', 1, 0, 3, 31, '109.99', '', 1),
(1016, 1016, 3, '2020-10-20', '2020-10-24', 1, 0, 1, 50, '129.99', '', 1),
(1017, 1017, 1, '2020-10-20', '2020-10-23', 1, 0, 2, 63, '109.99', 'needs a late checkout time', 1),
(1018, 1018, 3, '2020-10-20', '2020-10-22', 1, 0, 2, 56, '129.99', '', 1),
(1019, 1019, 1, '2020-10-20', '2020-10-23', 1, 0, 1, 65, '109.99', '', 1),
(1020, 1020, 3, '2020-10-20', '2020-10-22', 1, 0, 3, 58, '129.99', 'wants a good view', 1),
(1021, 1021, 1, '2020-10-20', '2020-10-23', 1, 0, 1, 67, '109.99', '', 1),
(1022, 1022, 2, '2020-10-20', '2020-10-25', 1, 0, 2, 62, '119.99', '', 1),
(1023, 1023, 1, '2020-10-20', '2020-10-27', 1, 0, 2, 69, '109.99', '', 1),
(1024, 1024, 2, '2020-10-20', '2020-10-24', 1, 0, 1, 64, '119.99', '', 1),
(1025, 1025, 1, '2020-10-20', '2020-10-22', 1, 0, 3, 71, '109.99', '', 1),
(1026, 1026, 3, '2020-10-18', '2020-10-23', 1, 0, 1, 8, '129.99', 'needs a late checkout time', 1),
(1027, 1027, 1, '2020-10-18', '2020-10-23', 1, 0, 2, 15, '109.99', '', 1),
(1028, 1028, 3, '2020-10-18', '2020-10-24', 1, 0, 2, 10, '129.99', '', 1),
(1029, 1029, 1, '2020-10-19', '2020-10-22', 1, 0, 1, 33, '109.99', '', 1),
(1030, 1030, 3, '2020-10-19', '2020-10-23', 1, 0, 3, 30, '129.99', '', 1),
(1031, 1031, 1, '2020-10-19', '2020-10-24', 1, 0, 1, 35, '109.99', '', 1),
(1032, 1032, 2, '2020-10-19', '2020-10-23', 1, 0, 2, 34, '119.99', '', 1),
(1033, 1033, 1, '2020-10-19', '2020-10-24', 1, 0, 2, 37, '109.99', '', 1),
(1034, 1034, 2, '2020-10-19', '2020-10-23', 1, 0, 1, 42, '119.99', '', 1),
(1035, 1035, 1, '2020-10-19', '2020-10-22', 1, 0, 4, 39, '109.99', '', 1),
(1036, 1036, 3, '2020-10-19', '2020-10-23', 1, 0, 1, 36, '129.99', 'needs a late checkout time', 1),
(1037, 1037, 1, '2020-10-19', '2020-10-22', 1, 0, 2, 41, '109.99', '', 1),
(1038, 1038, 3, '2020-10-20', '2020-10-24', 1, 0, 2, 60, '129.99', '', 1),
(1039, 1039, 1, '2020-10-20', '2020-10-23', 1, 0, 1, 73, '109.99', '', 1),
(1040, 1040, 3, '2020-10-20', '2020-10-22', 1, 0, 3, 66, '129.99', '', 1),
(1041, 1041, 1, '2020-10-21', '2020-10-23', 0, 0, 1, NULL, '109.99', 'needs a late checkout time', 1),
(1042, 1042, 2, '2020-10-21', '2020-10-25', 0, 0, 2, NULL, '119.99', '', 1),
(1043, 1043, 1, '2020-10-21', '2020-10-24', 0, 0, 2, NULL, '109.99', '', 1),
(1044, 1044, 2, '2020-10-21', '2020-10-23', 0, 0, 1, NULL, '119.99', '', 1),
(1045, 1045, 1, '2020-10-21', '2020-10-27', 0, 0, 3, NULL, '109.99', '', 1),
(1046, 1046, 3, '2020-10-21', '2020-10-24', 0, 0, 1, NULL, '129.99', '', 1),
(1047, 1047, 1, '2020-10-21', '2020-10-22', 0, 0, 2, NULL, '109.99', 'needs a late checkout time', 1),
(1048, 1048, 3, '2020-10-21', '2020-10-22', 0, 0, 2, NULL, '129.99', '', 1),
(1049, 1049, 1, '2020-10-21', '2020-10-23', 0, 0, 1, NULL, '109.99', '', 1),
(1050, 1050, 3, '2020-10-21', '2020-10-22', 0, 0, 3, NULL, '129.99', '', 1),
(1051, 1051, 1, '2020-10-21', '2020-10-25', 0, 0, 1, NULL, '109.99', '', 1),
(1052, 1052, 2, '2020-10-21', '2020-10-24', 0, 0, 2, NULL, '119.99', '', 1),
(1053, 1053, 1, '2020-10-21', '2020-10-23', 0, 0, 2, NULL, '109.99', '', 1),
(1054, 1054, 2, '2020-10-21', '2020-10-25', 0, 0, 1, NULL, '119.99', '', 1),
(1055, 1055, 1, '2020-10-21', '2020-10-24', 0, 0, 3, NULL, '109.99', '', 1),
(1056, 1056, 3, '2020-10-21', '2020-10-22', 0, 0, 1, NULL, '129.99', '', 1),
(1057, 1057, 1, '2020-10-21', '2020-10-22', 0, 0, 2, NULL, '109.99', '', 1),
(1058, 1058, 3, '2020-10-21', '2020-10-23', 0, 0, 2, NULL, '129.99', '', 1),
(1059, 1059, 1, '2020-10-21', '2020-10-22', 0, 0, 1, NULL, '109.99', '', 1),
(1060, 1060, 3, '2020-10-21', '2020-10-25', 0, 0, 3, NULL, '129.99', '', 1),
(1061, 1061, 1, '2020-10-21', '2020-10-24', 0, 0, 1, NULL, '109.99', 'needs a late checkout time', 1),
(1062, 1062, 2, '2020-10-21', '2020-10-23', 0, 0, 2, NULL, '119.99', '', 1),
(1063, 1063, 1, '2020-10-21', '2020-10-26', 0, 0, 2, NULL, '109.99', '', 1),
(1064, 1064, 2, '2020-10-21', '2020-10-24', 0, 0, 1, NULL, '119.99', '', 1),
(1065, 1065, 1, '2020-10-21', '2020-10-22', 0, 0, 3, NULL, '109.99', 'wants a large screen tv', 1),
(1066, 1066, 3, '2020-10-21', '2020-10-25', 0, 0, 1, NULL, '129.99', '', 1),
(1067, 1067, 1, '2020-10-21', '2020-10-24', 0, 0, 2, NULL, '109.99', '', 1),
(1068, 1068, 3, '2020-10-21', '2020-10-22', 0, 0, 2, NULL, '129.99', '', 1),
(1069, 1069, 1, '2020-10-21', '2020-10-22', 0, 0, 1, NULL, '109.99', '', 1),
(1070, 1070, 3, '2020-10-21', '2020-10-23', 0, 0, 3, NULL, '129.99', '', 1),
(1071, 1071, 1, '2020-10-21', '2020-10-31', 0, 0, 1, NULL, '109.99', '', 1),
(1072, 1072, 2, '2020-10-21', '2020-10-25', 0, 0, 2, NULL, '119.99', '', 1),
(1073, 1073, 1, '2020-10-21', '2020-10-24', 0, 0, 2, NULL, '109.99', 'needs a late checkout time', 1),
(1074, 1074, 2, '2020-10-21', '2020-10-23', 0, 0, 1, NULL, '119.99', '', 1),
(1075, 1075, 1, '2020-10-21', '2020-10-26', 0, 0, 3, NULL, '109.99', '', 1),
(1076, 1076, 3, '2020-10-21', '2020-10-24', 0, 0, 1, NULL, '129.99', '', 1),
(1077, 1077, 1, '2020-10-21', '2020-10-22', 0, 0, 2, NULL, '109.99', '', 1),
(1078, 1078, 3, '2020-10-21', '2020-10-25', 0, 0, 2, NULL, '129.99', '', 1),
(1079, 1079, 1, '2020-10-21', '2020-10-22', 0, 0, 1, NULL, '109.99', '', 1),
(1080, 1080, 3, '2020-10-21', '2020-10-24', 0, 0, 3, NULL, '129.99', '', 1),
(1081, 1081, 1, '2020-10-18', '2020-10-21', 1, 0, 1, 17, '109.99', '', 1),
(1082, 1082, 2, '2020-10-18', '2020-10-21', 1, 0, 2, 14, '119.99', '', 1),
(1083, 1083, 1, '2020-10-18', '2020-10-21', 1, 0, 2, 19, '109.99', 'needs a late checkout time', 1),
(1084, 1084, 2, '2020-10-18', '2020-10-21', 1, 0, 1, 22, '119.99', '', 1),
(1085, 1085, 1, '2020-10-17', '2020-10-21', 1, 0, 3, 3, '109.99', '', 1),
(1086, 1086, 3, '2020-10-18', '2020-10-21', 1, 0, 4, 16, '129.99', '', 1),
(1087, 1087, 1, '2020-10-19', '2020-10-21', 1, 0, 2, 43, '109.99', '', 1),
(1088, 1088, 3, '2020-10-19', '2020-10-21', 1, 0, 2, 38, '129.99', 'wants a good view', 1),
(1089, 1089, 1, '2020-10-19', '2020-10-21', 1, 0, 1, 45, '109.99', '', 1),
(1090, 1090, 3, '2020-10-19', '2020-10-21', 1, 0, 3, 40, '129.99', '', 1),
(1091, 1091, 1, '2020-10-19', '2020-10-21', 1, 0, 1, 47, '109.99', '', 1),
(1092, 1092, 2, '2020-10-15', '2020-10-21', 1, 0, 2, 2, '119.99', '', 1),
(1093, 1093, 1, '2020-10-19', '2020-10-21', 1, 0, 2, 49, '109.99', '', 1),
(1094, 1094, 2, '2020-10-19', '2020-10-21', 1, 0, 1, 44, '119.99', '', 1),
(1095, 1095, 1, '2020-10-19', '2020-10-21', 1, 0, 3, 51, '109.99', '', 1),
(1096, 1096, 3, '2020-10-20', '2020-10-21', 1, 0, 3, 68, '129.99', '', 1),
(1097, 1097, 1, '2020-10-17', '2020-10-21', 1, 0, 2, 5, '109.99', '', 1),
(1098, 1098, 3, '2020-10-20', '2020-10-21', 1, 0, 2, 70, '129.99', '', 1),
(1099, 1099, 1, '2020-10-19', '2020-10-21', 1, 0, 1, 53, '109.99', 'needs a late checkout time', 1),
(1100, 1100, 3, '2020-10-20', '2020-10-21', 1, 0, 3, 76, '129.99', '', 1),
(1101, 1101, 1, '2020-10-15', '2020-10-21', 1, 0, 1, 1, '109.99', '', 1),
(1102, 1102, 2, '2020-10-20', '2020-10-21', 1, 0, 2, 72, '119.99', '', 1),
(1103, 1103, 1, '2020-10-20', '2020-10-21', 1, 0, 2, 75, '109.99', '', 1),
(1104, 1104, 2, '2020-10-19', '2020-10-21', 1, 0, 1, 52, '119.99', '', 1),
(1105, 1105, 1, '2020-10-20', '2020-10-21', 1, 0, 3, 77, '109.99', '', 1),
(1106, 1106, 3, '2020-10-18', '2020-10-21', 1, 0, 2, 18, '129.99', '', 1),
(1107, 1107, 1, '2020-10-18', '2020-10-21', 1, 0, 2, 21, '109.99', '', 1),
(1108, 1108, 3, '2020-10-18', '2020-10-21', 1, 0, 2, 20, '129.99', '', 1),
(1109, 1109, 1, '2020-10-19', '2020-10-21', 1, 0, 1, 55, '109.99', 'needs a late checkout time', 1),
(1110, 1110, 3, '2020-10-19', '2020-10-21', 1, 0, 3, 46, '129.99', '', 1),
(1111, 1111, 1, '2020-10-19', '2020-10-21', 1, 0, 1, 57, '109.99', '', 1),
(1112, 1112, 2, '2020-10-19', '2020-10-21', 1, 0, 2, 54, '119.99', '', 1),
(1113, 1113, 1, '2020-10-19', '2020-10-21', 1, 0, 2, 59, '109.99', '', 1),
(1114, 1114, 2, '2020-10-20', '2020-10-21', 1, 0, 1, 74, '119.99', '', 1),
(1115, 1115, 1, '2020-10-17', '2020-10-21', 1, 0, 3, 7, '109.99', '', 1),
(1116, 1116, 3, '2020-10-19', '2020-10-21', 1, 0, 1, 48, '129.99', '', 1),
(1117, 1117, 1, '2020-10-19', '2020-10-21', 1, 0, 2, 61, '109.99', '', 1),
(1118, 1118, 3, '2020-10-20', '2020-10-21', 1, 0, 2, 78, '129.99', '', 1),
(1119, 1119, 1, '2020-10-20', '2020-10-21', 1, 0, 1, 79, '109.99', '', 1),
(1120, 1120, 3, '2020-10-20', '2020-10-21', 1, 0, 3, 80, '129.99', '', 1),
(1121, 1121, 1, '2020-10-22', '2020-10-23', 0, 0, 1, NULL, '109.99', '', 1),
(1122, 1122, 2, '2020-10-23', '2020-10-24', 0, 0, 2, NULL, '119.99', 'wants a large screen tv', 1),
(1123, 1123, 1, '2020-10-24', '2020-10-25', 0, 0, 2, NULL, '109.99', '', 1),
(1124, 1124, 2, '2020-10-25', '2020-10-26', 0, 0, 1, NULL, '119.99', '', 1),
(1125, 1125, 1, '2020-10-26', '2020-10-27', 0, 0, 3, NULL, '109.99', '', 1),
(1126, 1126, 3, '2020-10-27', '2020-10-28', 0, 0, 1, NULL, '129.99', '', 1),
(1127, 1127, 1, '2020-10-28', '2020-10-29', 0, 0, 2, NULL, '109.99', 'needs a late checkout time', 1),
(1128, 1128, 3, '2020-10-29', '2020-10-30', 0, 0, 2, NULL, '129.99', '', 1),
(1129, 1129, 1, '2020-10-30', '2020-10-31', 0, 0, 1, NULL, '109.99', '', 1),
(1130, 1130, 3, '2020-10-31', '2020-11-03', 0, 0, 3, NULL, '129.99', '', 1),
(1131, 1131, 1, '2020-10-22', '2020-10-23', 0, 0, 1, NULL, '109.99', '', 1),
(1132, 1132, 2, '2020-10-23', '2020-10-24', 0, 0, 2, NULL, '119.99', '', 1),
(1133, 1133, 1, '2020-10-24', '2020-10-25', 0, 0, 2, NULL, '109.99', '', 1),
(1134, 1134, 2, '2020-10-25', '2020-10-26', 0, 0, 2, NULL, '119.99', '', 1),
(1135, 1135, 1, '2020-10-26', '2020-10-29', 0, 0, 3, NULL, '109.99', '', 1),
(1136, 1136, 3, '2020-10-27', '2020-10-28', 0, 0, 4, NULL, '129.99', '', 1),
(1137, 1137, 1, '2020-10-28', '2020-11-01', 0, 0, 2, NULL, '109.99', '', 1),
(1138, 1138, 3, '2020-10-29', '2020-10-30', 0, 0, 2, NULL, '129.99', '', 1),
(1139, 1139, 1, '2020-10-30', '2020-11-02', 0, 0, 1, NULL, '109.99', '', 1),
(1140, 1140, 3, '2020-10-31', '2020-11-03', 0, 0, 3, NULL, '129.99', 'needs a late checkout time', 1),
(1141, 1141, 1, '2020-10-22', '2020-10-27', 0, 0, 1, NULL, '109.99', '', 1),
(1142, 1142, 2, '2020-10-23', '2020-10-28', 0, 0, 2, NULL, '119.99', '', 1),
(1143, 1143, 1, '2020-10-24', '2020-10-26', 0, 0, 2, NULL, '109.99', '', 1),
(1144, 1144, 2, '2020-10-25', '2020-10-27', 0, 0, 1, NULL, '119.99', '', 1),
(1145, 1145, 1, '2020-10-26', '2020-11-02', 0, 0, 3, NULL, '109.99', 'wants a good view', 1),
(1146, 1146, 3, '2020-10-27', '2020-11-02', 0, 0, 4, NULL, '129.99', '', 1),
(1147, 1147, 1, '2020-10-28', '2020-11-02', 0, 0, 2, NULL, '109.99', '', 1),
(1148, 1148, 3, '2020-10-29', '2020-11-01', 0, 0, 2, NULL, '129.99', 'needs a late checkout time', 1),
(1149, 1149, 1, '2020-10-30', '2020-10-31', 0, 0, 1, NULL, '109.99', '', 1),
(1150, 1150, 3, '2020-10-31', '2020-11-02', 0, 0, 3, NULL, '129.99', '', 1),
(1151, 1151, 1, '2020-10-22', '2020-10-28', 0, 0, 1, NULL, '109.99', '', 1),
(1152, 1152, 2, '2020-10-23', '2020-10-26', 0, 0, 2, NULL, '119.99', '', 1),
(1153, 1153, 1, '2020-10-24', '2020-10-27', 0, 0, 2, NULL, '109.99', '', 1),
(1154, 1154, 2, '2020-10-25', '2020-11-02', 0, 0, 1, NULL, '119.99', '', 1),
(1155, 1155, 1, '2020-10-26', '2020-10-27', 0, 0, 3, NULL, '109.99', '', 1),
(1156, 1156, 3, '2020-10-22', '2020-10-27', 0, 0, 4, NULL, '129.99', '', 1),
(1157, 1157, 1, '2020-10-23', '2020-10-27', 0, 0, 2, NULL, '109.99', '', 1),
(1158, 1158, 3, '2020-10-24', '2020-10-28', 0, 0, 2, NULL, '129.99', '', 1),
(1159, 1159, 1, '2020-10-25', '2020-10-26', 0, 0, 1, NULL, '109.99', 'needs a late checkout time', 1),
(1160, 1160, 3, '2020-10-26', '2020-10-27', 0, 0, 3, NULL, '129.99', '', 1),
(1161, 1161, 1, '2020-10-22', '2020-11-02', 0, 0, 1, NULL, '109.99', '', 1),
(1162, 1162, 2, '2020-10-23', '2020-10-26', 0, 0, 2, NULL, '119.99', '', 1),
(1163, 1163, 1, '2020-10-24', '2020-10-26', 0, 0, 2, NULL, '109.99', '', 1),
(1164, 1164, 2, '2020-10-22', '2020-10-23', 0, 0, 2, NULL, '119.99', '', 1),
(1165, 1165, 1, '2020-10-23', '2020-10-26', 0, 0, 3, NULL, '109.99', '', 1),
(1166, 1166, 3, '2020-10-22', '2020-10-25', 0, 0, 2, NULL, '129.99', '', 1),
(1167, 1167, 1, '2020-11-02', '2020-11-05', 0, 0, 2, NULL, '109.99', 'wants a large screen tv', 1),
(1168, 1168, 3, '2020-11-02', '2020-11-05', 0, 0, 2, NULL, '129.99', '', 1),
(1169, 1169, 1, '2020-11-03', '2020-11-05', 0, 0, 1, NULL, '109.99', '', 1),
(1170, 1170, 3, '2020-11-04', '2020-11-05', 0, 0, 3, NULL, '129.99', '', 1),
(1171, 1171, 1, '2020-11-06', '2020-11-09', 0, 0, 1, NULL, '109.99', '', 1),
(1172, 1172, 2, '2020-11-12', '2020-11-13', 0, 0, 2, NULL, '119.99', '', 1),
(1173, 1173, 1, '2020-11-18', '2020-11-19', 0, 0, 2, NULL, '109.99', '', 1),
(1174, 1174, 2, '2020-11-20', '2020-11-26', 0, 0, 1, NULL, '119.99', '', 1),
(1175, 1175, 1, '2020-11-25', '2020-11-28', 0, 0, 3, NULL, '109.99', '', 1),
(1176, 1176, 3, '2020-12-02', '2020-12-04', 0, 0, 1, NULL, '129.99', '', 1),
(1177, 1177, 1, '2020-12-05', '2020-12-08', 0, 0, 2, NULL, '109.99', 'needs a late checkout time', 1),
(1178, 1178, 3, '2020-12-07', '2020-12-09', 0, 0, 2, NULL, '129.99', '', 1),
(1179, 1179, 1, '2020-12-09', '2020-12-12', 0, 0, 1, NULL, '109.99', '', 1),
(1180, 1180, 3, '2020-10-22', '2020-10-27', 0, 0, 3, NULL, '129.99', '', 1),
(1181, 1181, 1, '2020-10-23', '2020-10-28', 0, 0, 1, NULL, '109.99', '', 1),
(1182, 1182, 2, '2020-10-24', '2020-10-26', 0, 0, 2, NULL, '119.99', '', 1),
(1183, 1183, 1, '2020-10-25', '2020-10-27', 0, 0, 2, NULL, '109.99', '', 1),
(1184, 1184, 2, '2020-10-26', '2020-10-30', 0, 0, 1, NULL, '119.99', '', 1),
(1185, 1185, 1, '2020-10-27', '2020-10-30', 0, 0, 3, NULL, '109.99', '', 1),
(1186, 1186, 3, '2020-10-28', '2020-10-29', 0, 0, 1, NULL, '129.99', '', 1),
(1187, 1187, 1, '2020-10-29', '2020-11-01', 0, 0, 2, NULL, '109.99', 'needs a late checkout time', 1),
(1188, 1188, 3, '2020-10-30', '2020-10-31', 0, 0, 2, NULL, '129.99', '', 1),
(1189, 1189, 1, '2020-10-31', '2020-11-02', 0, 0, 1, NULL, '109.99', '', 1),
(1190, 1190, 3, '2020-12-28', '2020-12-31', 0, 0, 3, NULL, '129.99', '', 1),
(1191, 1191, 1, '2021-01-04', '2021-01-06', 0, 0, 1, NULL, '109.99', 'wants a good view', 1),
(1192, 1192, 2, '2021-01-10', '2021-01-13', 0, 0, 2, NULL, '119.99', '', 1),
(1193, 1193, 1, '2021-01-14', '2021-01-18', 0, 0, 2, NULL, '109.99', '', 1),
(1194, 1194, 2, '2021-01-24', '2021-01-25', 0, 0, 1, NULL, '119.99', 'wants a large screen tv', 1),
(1195, 1195, 1, '2021-01-27', '2021-01-29', 0, 0, 3, NULL, '109.99', '', 1),
(1196, 1196, 3, '2021-01-30', '2021-01-31', 0, 0, 2, NULL, '129.99', '', 1),
(1197, 1197, 1, '2021-02-04', '2021-02-05', 0, 0, 2, NULL, '109.99', 'needs a late checkout time', 1),
(1198, 1198, 3, '2021-02-06', '2021-02-08', 0, 0, 2, NULL, '129.99', '', 1),
(1199, 1199, 1, '2021-02-09', '2021-02-14', 0, 0, 1, NULL, '109.99', '', 1),
(1200, 1200, 3, '2021-02-18', '2021-02-21', 0, 0, 3, NULL, '129.99', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `room_id` int(6) NOT NULL,
  `room_num` varchar(20) NOT NULL,
  `room_type_id` int(3) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `num_beds` int(3) NOT NULL,
  `clean` tinyint(1) DEFAULT 0,
  `occupied` tinyint(1) DEFAULT 0,
  `active` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`room_id`, `room_num`, `room_type_id`, `description`, `num_beds`, `clean`, `occupied`, `active`) VALUES
(1, '101', 1, 'balcony', 2, 1, 1, 1),
(2, '102', 2, '', 1, 1, 1, 1),
(3, '103', 1, '', 2, 1, 1, 1),
(4, '104', 2, '', 2, 1, 1, 1),
(5, '105', 1, '', 2, 1, 1, 1),
(6, '106', 3, 'microwave, refridgerator', 1, 1, 1, 1),
(7, '107', 1, '', 2, 1, 1, 1),
(8, '108', 3, 'microwave, refridgerator', 2, 1, 1, 1),
(9, '109', 1, '', 2, 1, 1, 1),
(10, '110', 3, 'microwave, refridgerator', 1, 1, 1, 1),
(11, '111', 1, '', 2, 1, 1, 1),
(12, '112', 2, '60-inch TV', 2, 1, 1, 1),
(13, '113', 1, '', 2, 1, 1, 1),
(14, '114', 2, '60-inch TV', 1, 1, 1, 1),
(15, '115', 1, '', 2, 1, 1, 1),
(16, '116', 3, 'microwave, refridgerator', 2, 1, 1, 1),
(17, '117', 1, '', 2, 1, 1, 1),
(18, '118', 3, 'microwave, refridgerator', 1, 1, 1, 1),
(19, '119', 1, '', 2, 1, 1, 1),
(20, '120', 3, 'microwave, refridgerator', 2, 1, 1, 1),
(21, '121', 1, '', 2, 1, 1, 1),
(22, '122', 2, '', 1, 1, 1, 1),
(23, '123', 1, '', 2, 1, 1, 1),
(24, '124', 2, '60-inch TV', 2, 1, 1, 1),
(25, '125', 1, 'balcony', 2, 1, 1, 1),
(26, '126', 3, 'microwave, refridgerator, balcony', 1, 1, 1, 1),
(27, '127', 1, '', 2, 1, 1, 1),
(28, '128', 3, 'microwave, refridgerator', 2, 1, 1, 1),
(29, '129', 1, '', 2, 1, 1, 1),
(30, '130', 3, 'microwave, refridgerator', 1, 1, 1, 1),
(31, '131', 1, '', 2, 1, 1, 1),
(32, '132', 2, '', 2, 1, 1, 1),
(33, '133', 1, '', 2, 1, 1, 1),
(34, '134', 2, '60-inch TV', 1, 1, 1, 1),
(35, '135', 1, '', 2, 1, 1, 1),
(36, '136', 3, 'microwave, refridgerator', 2, 1, 1, 1),
(37, '137', 1, '', 2, 1, 1, 1),
(38, '138', 3, 'microwave, refridgerator', 1, 1, 1, 1),
(39, '139', 1, '', 2, 1, 1, 1),
(40, '140', 3, 'microwave, refridgerator', 2, 1, 1, 1),
(41, '141', 1, '', 2, 1, 1, 1),
(42, '142', 2, '60-inch TV', 1, 1, 1, 1),
(43, '143', 1, '', 2, 1, 1, 1),
(44, '144', 2, '', 2, 1, 1, 1),
(45, '145', 1, '', 2, 1, 1, 1),
(46, '146', 3, 'microwave, refridgerator', 1, 1, 1, 1),
(47, '147', 1, '', 2, 1, 1, 1),
(48, '148', 3, 'microwave, refridgerator', 2, 1, 1, 1),
(49, '149', 1, '', 2, 1, 1, 1),
(50, '150', 3, 'microwave, refridgerator', 1, 1, 1, 1),
(51, '201', 1, 'balcony', 2, 1, 1, 1),
(52, '202', 2, '', 2, 1, 1, 1),
(53, '203', 1, '', 2, 1, 1, 1),
(54, '204', 2, '', 1, 1, 1, 1),
(55, '205', 1, '', 2, 1, 1, 1),
(56, '206', 3, 'microwave, refridgerator', 2, 1, 1, 1),
(57, '207', 1, '', 2, 1, 1, 1),
(58, '208', 3, 'microwave, refridgerator', 1, 1, 1, 1),
(59, '209', 1, '', 2, 1, 1, 1),
(60, '210', 3, 'microwave, refridgerator', 2, 1, 1, 1),
(61, '211', 1, '', 2, 1, 1, 1),
(62, '212', 2, '60-inch TV', 1, 1, 1, 1),
(63, '213', 1, '', 2, 1, 1, 1),
(64, '214', 2, '', 2, 1, 1, 1),
(65, '215', 1, '', 2, 1, 1, 1),
(66, '216', 3, 'microwave, refridgerator', 1, 1, 1, 1),
(67, '217', 1, '', 2, 1, 1, 1),
(68, '218', 3, 'microwave, refridgerator', 2, 1, 1, 1),
(69, '219', 1, '', 2, 1, 1, 1),
(70, '220', 3, 'microwave, refridgerator', 1, 1, 1, 1),
(71, '221', 1, '', 2, 1, 1, 1),
(72, '222', 2, '', 2, 1, 1, 1),
(73, '223', 1, '', 2, 1, 1, 1),
(74, '224', 2, '60-inch TV', 1, 1, 1, 1),
(75, '225', 1, 'balcony', 2, 1, 1, 1),
(76, '226', 3, 'microwave, refridgerator, balcony', 2, 1, 1, 1),
(77, '227', 1, '', 2, 1, 1, 1),
(78, '228', 3, 'microwave, refridgerator', 1, 1, 1, 1),
(79, '229', 1, '', 2, 1, 1, 1),
(80, '230', 3, 'microwave, refridgerator', 2, 1, 1, 1),
(81, '231', 1, '', 2, 0, 0, 1),
(82, '232', 2, '', 1, 1, 0, 1),
(83, '233', 1, '', 2, 1, 0, 1),
(84, '234', 2, '60-inch TV', 2, 1, 0, 1),
(85, '235', 1, '', 2, 1, 0, 1),
(86, '236', 3, 'microwave, refridgerator', 1, 1, 0, 1),
(87, '237', 1, '', 2, 1, 0, 1),
(88, '238', 3, 'microwave, refridgerator', 2, 1, 0, 1),
(89, '239', 1, '', 2, 0, 0, 0),
(90, '240', 3, 'microwave, refridgerator', 1, 1, 0, 1),
(91, '241', 1, '', 2, 0, 0, 1),
(92, '242', 2, '', 2, 1, 0, 1),
(93, '243', 1, '', 2, 1, 0, 1),
(94, '244', 2, '', 1, 0, 0, 1),
(95, '245', 1, '', 2, 1, 0, 1),
(96, '246', 3, 'microwave, refridgerator', 2, 0, 0, 0),
(97, '247', 1, '', 2, 1, 0, 1),
(98, '248', 3, 'microwave, refridgerator', 1, 1, 0, 1),
(99, '249', 1, '', 2, 1, 0, 1),
(100, '250', 3, 'microwave, refridgerator', 2, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `room_issues`
--

CREATE TABLE `room_issues` (
  `room_issue_id` int(10) NOT NULL,
  `room_id` int(6) DEFAULT NULL,
  `issue` text NOT NULL,
  `user_id` int(6) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `fixed` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room_issues`
--

INSERT INTO `room_issues` (`room_issue_id`, `room_id`, `issue`, `user_id`, `start_date`, `end_date`, `fixed`) VALUES
(1, 89, 'Needs a new toilet, plus there\'s a bad stain on the carpet near the window.', 1, '2019-07-16', '2019-07-20', 0),
(2, 96, 'The tub drain is clogged and the shower curtain needs to be replaced.', 1, '2019-07-17', '2019-07-19', 0);

-- --------------------------------------------------------

--
-- Table structure for table `room_types`
--

CREATE TABLE `room_types` (
  `room_type_id` int(3) NOT NULL,
  `type` varchar(30) NOT NULL,
  `rate` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room_types`
--

INSERT INTO `room_types` (`room_type_id`, `type`, `rate`) VALUES
(1, '2 Queens', '109.99'),
(2, 'King', '119.99'),
(3, 'Suite', '129.99');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(6) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `access_id` int(3) NOT NULL,
  `active` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `access_id`, `active`) VALUES
(1, 'admin', '$2b$10$Qf/0VNBQiYr.pHN8IN9Yl.SrYQCpG4b2mrsX6dx85DkE7/fwsNWvy', 3, 1),
(2, 'manager', '$2b$10$2ataQ4kjDbZaR9TDSUqXI.Mt.Gq/bDn1Te3MN939s3fJAtTrKJa9i', 2, 1),
(3, 'vince', '$2b$10$HEj.issBvH6pxDEiBxtCr.c8fU7Cl4TC34K4/MGtTMdXqztLyqt8K', 3, 1),
(4, 'user', '$2b$10$rnUz2cFk61G27KdixeR5G.rf78zaKzDZlebrs9ZK5tnnVGFWrnUPm', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `access_levels`
--
ALTER TABLE `access_levels`
  ADD PRIMARY KEY (`access_id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `hotel_info`
--
ALTER TABLE `hotel_info`
  ADD PRIMARY KEY (`hotel_info_id`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`invoice_id`),
  ADD KEY `res_room_id` (`res_room_id`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`reservation_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `res_rooms`
--
ALTER TABLE `res_rooms`
  ADD PRIMARY KEY (`res_room_id`),
  ADD KEY `reservation_id` (`reservation_id`),
  ADD KEY `room_type_id` (`room_type_id`),
  ADD KEY `room_id` (`room_id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`room_id`),
  ADD UNIQUE KEY `room_num` (`room_num`),
  ADD KEY `room_type_id` (`room_type_id`);

--
-- Indexes for table `room_issues`
--
ALTER TABLE `room_issues`
  ADD PRIMARY KEY (`room_issue_id`),
  ADD KEY `room_id` (`room_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `room_types`
--
ALTER TABLE `room_types`
  ADD PRIMARY KEY (`room_type_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `access_id` (`access_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `access_levels`
--
ALTER TABLE `access_levels`
  MODIFY `access_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;

--
-- AUTO_INCREMENT for table `hotel_info`
--
ALTER TABLE `hotel_info`
  MODIFY `hotel_info_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `invoice_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `reservation_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1201;

--
-- AUTO_INCREMENT for table `res_rooms`
--
ALTER TABLE `res_rooms`
  MODIFY `res_room_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1201;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `room_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `room_issues`
--
ALTER TABLE `room_issues`
  MODIFY `room_issue_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `room_types`
--
ALTER TABLE `room_types`
  MODIFY `room_type_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `invoices_ibfk_1` FOREIGN KEY (`res_room_id`) REFERENCES `res_rooms` (`res_room_id`) ON UPDATE CASCADE;

--
-- Constraints for table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE;

--
-- Constraints for table `res_rooms`
--
ALTER TABLE `res_rooms`
  ADD CONSTRAINT `res_rooms_ibfk_1` FOREIGN KEY (`reservation_id`) REFERENCES `reservations` (`reservation_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `res_rooms_ibfk_2` FOREIGN KEY (`room_type_id`) REFERENCES `room_types` (`room_type_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `res_rooms_ibfk_3` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`room_id`) ON UPDATE CASCADE;

--
-- Constraints for table `rooms`
--
ALTER TABLE `rooms`
  ADD CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`room_type_id`) REFERENCES `room_types` (`room_type_id`) ON UPDATE CASCADE;

--
-- Constraints for table `room_issues`
--
ALTER TABLE `room_issues`
  ADD CONSTRAINT `room_issues_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`room_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `room_issues_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`access_id`) REFERENCES `access_levels` (`access_id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

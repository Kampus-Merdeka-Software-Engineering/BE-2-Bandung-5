-- CreateTable
CREATE TABLE `lunggo_asset` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_destination` VARCHAR(25) NOT NULL,
    `image` VARCHAR(50) NOT NULL,
    `rating` VARCHAR(5) NOT NULL,
    `information` VARCHAR(300) NOT NULL,
    `important_info` VARCHAR(300) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_booking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(25) NOT NULL,
    `email` VARCHAR(25) NOT NULL,
    `phone` VARCHAR(25) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `address_office` VARCHAR(255) NOT NULL,
    `date` VARCHAR(15) NOT NULL,
    `people` VARCHAR(15) NOT NULL,
    `price_total` VARCHAR(25) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

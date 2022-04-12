SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Product` (
  `ID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(256) NOT NULL,
  `price` DECIMAL(16,2) NOT NULL,
  `currency` VARCHAR(8) NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO `mydb`.`Product` VALUES (1, 'Product 1', 1.00, 'USD');
INSERT INTO `mydb`.`Product` VALUES (2, 'Product 2', 2.00, 'USD');
INSERT INTO `mydb`.`Product` VALUES (3, 'Product 3', 3.00, 'USD');
INSERT INTO `mydb`.`Product` VALUES (4, 'Product 4', 4.00, 'USD');
INSERT INTO `mydb`.`Product` VALUES (5, 'Product 5', 5.00, 'USD');

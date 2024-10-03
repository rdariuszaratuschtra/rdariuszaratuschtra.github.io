# phpMyAdmin SQL Dump
# version 2.5.7-pl1
# http://www.phpmyadmin.net
#
# Host: localhost
# Generation Time: Jun 20, 2006 at 03:54 PM
# Server version: 4.0.24
# PHP Version: 4.4.1
# 
# Database : `rdariuszaratusc`
# 

# --------------------------------------------------------

#
# Table structure for table `Cultuurschappen`
#

DROP TABLE IF EXISTS `Cultuurschappen`;
CREATE TABLE `Cultuurschappen` (
  `Foto` varchar(128) NOT NULL default '',
  `Titel` varchar(128) default NULL,
  `Materiaal` varchar(128) default NULL,
  `Afmeting` varchar(128) default NULL,
  `Jaar` varchar(128) default NULL,
  `Prijs` smallint(6) default NULL,
  UNIQUE KEY `Foto` (`Foto`),
  FULLTEXT KEY `Foto_2` (`Foto`),
  FULLTEXT KEY `Titel` (`Titel`),
  FULLTEXT KEY `Materiaal` (`Materiaal`),
  FULLTEXT KEY `Afmeting` (`Afmeting`),
  FULLTEXT KEY `Jaar` (`Jaar`)
) TYPE=MyISAM;

#
# Dumping data for table `Cultuurschappen`
#

INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('161.jpg', 'Stadsuitzicht met steigers', 'Ol.o.lin.', '55x65', '2004', -1);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('162.jpg', 'Kruispunt', 'Ol.o.lin.', '55x75', '2001-2004', 1200);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 001.jpg', 'Stroom', 'Ol.o.lin.', '170x135', '2000', 5550);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 002.jpg', 'Struiken', 'Ol.o.lin.', '135x140', '2000', -1);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 003.jpg', 'Prikkeldraad', 'Ol.o.lin.', '135x135', '2000', 4200);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 004.jpg', 'Poort/Moeder of Vrouw', 'Ol.o.d.', '178x193x193', '1989', 3800);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 005.jpg', 'Sneeuwvlekken in kleur', 'Ol.o.lin.', '170x135', '2000', 5200);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 006.jpg', 'Glas-in-loodraam', 'Ol.o.lin.', '180x135', '2000', 5800);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 007.jpg', 'Tripitaka', 'Gemengde techniek/collage', '130x150', '1988', 3600);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 012.jpg', 'Zonder titel', 'Ol.o.lin.', '135x145', '2000', 4400);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 014.jpg', 'Mens en nood', 'Ol.o.hout', '81x122', '1992', 2400);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 015.jpg', 'Nacht in de singel', 'Ol.o.lin.', '55x65 (tweeluik)', '2001', 2400);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 126.jpg', 'Stadsuitzicht', 'Ol.o.papier', '65x74', '1990', 900);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 007.jpg', 'Vrouw (deel 1 van drieluik)', 'Ol.o.bord', '21x29', '1989', 1800);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 008.jpg', 'Vrouw-Droom-Stad (drieluik)', 'Ol.o.bord', '21x29 21x29 29x42', '1989', 1800);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 009.jpg', 'Droom (deel 2 van drieluik)', 'Ol.o.bord', '21x29', '1989', 1800);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 010.jpg', 'Stad (deel 3 van drieluik)', 'Ol.o.bord', '29x42', '1989', 1800);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 011.jpg', 'Bomenlandschap in maanlicht', 'Ol.o.lin.', '55x65', '2000', 1200);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 014.jpg', 'Zenderstoornissen', 'Ol.o.lin.', '65x85', '2000', 1300);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 016.jpg', 'Zenderstoornissen II', 'Ol.o.lin.', '60x85', '2000', 1200);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 017.jpg', 'Graanveld/Zeelandschap', 'Ol.o.lin.', '85x100', '2000', 1500);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 020.jpg', 'Prikkeldraad II', 'Ol.o.lin.', '135x145', '2000', 4200);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 021.jpg', 'Regendruppels op ruit', 'Ol.o.lin.', '135x140', '2000', 4200);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 022.jpg', 'Slingers', 'Ol.o.lin.', '135x150', '2000', 4800);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 023.jpg', 'Steden/Sterren', 'Ol.o.lin.', '135x170', '2000', 5700);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 025.jpg', 'Cultuurschappen/Amsterdam', 'Ol.o.lin.', '105x125', '2001-2004', 4100);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 026.jpg', 'Amsterdam in de nacht', 'Ol.o.lin.', '125x105', '2000-2004', 3900);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 027.jpg', 'Amsterdam in de nacht II', 'Ol.o.lin.', '125x105', '2000-2004', 4100);
INSERT INTO `Cultuurschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 028.jpg', 'Amsterdams cultuurschap', 'Ol.o.lin.', '105x125', '2000-2004', 3900);

# --------------------------------------------------------

#
# Table structure for table `Glas-in-lood`
#

DROP TABLE IF EXISTS `Glas-in-lood`;
CREATE TABLE `Glas-in-lood` (
  `Foto` varchar(128) NOT NULL default '',
  `Titel` varchar(128) default NULL,
  `Materiaal` varchar(128) default NULL,
  `Afmeting` varchar(128) default NULL,
  `Jaar` varchar(128) default NULL,
  `Prijs` smallint(6) default NULL,
  UNIQUE KEY `Foto` (`Foto`),
  FULLTEXT KEY `Foto_2` (`Foto`),
  FULLTEXT KEY `Titel` (`Titel`),
  FULLTEXT KEY `Materiaal` (`Materiaal`),
  FULLTEXT KEY `Afmeting` (`Afmeting`),
  FULLTEXT KEY `Jaar` (`Jaar`)
) TYPE=MyISAM;

#
# Dumping data for table `Glas-in-lood`
#

INSERT INTO `Glas-in-lood` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('IM001550.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Glas-in-lood` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('IM001551.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Glas-in-lood` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('IM001565.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Glas-in-lood` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('IM001566.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Glas-in-lood` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('IM001567.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Glas-in-lood` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('IM001568.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Glas-in-lood` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('IM001569.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Glas-in-lood` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('IM001570.jpg', 'N', 'N', 'N', 'N', 0);

# --------------------------------------------------------

#
# Table structure for table `Individuen`
#

DROP TABLE IF EXISTS `Individuen`;
CREATE TABLE `Individuen` (
  `Foto` varchar(128) NOT NULL default '',
  `Titel` varchar(128) default NULL,
  `Materiaal` varchar(128) default NULL,
  `Afmeting` varchar(128) default NULL,
  `Jaar` varchar(128) default NULL,
  `Prijs` smallint(6) default NULL,
  UNIQUE KEY `Foto` (`Foto`),
  FULLTEXT KEY `Foto_2` (`Foto`),
  FULLTEXT KEY `Titel` (`Titel`),
  FULLTEXT KEY `Materiaal` (`Materiaal`),
  FULLTEXT KEY `Afmeting` (`Afmeting`),
  FULLTEXT KEY `Jaar` (`Jaar`)
) TYPE=MyISAM;

#
# Dumping data for table `Individuen`
#

INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('101.jpg', 'Playboy-boy', 'Ol.o.bord', '20x26', '1988', 550);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('121.jpg', 'Werkend meisje', 'Ol.o.lin.', '22x30', '1992', 650);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('123.jpg', 'Wanhoop', 'Ol.o.bord', '14,5x15,5', '1989', -1);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('124.jpg', 'Torso', 'Ol.o.bord', '22x19', '1991', 500);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('125.jpg', 'Man in embryohouding', 'Ol.o.bord', '22x19', '1991', 550);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('126.jpg', 'Heilige Moeder&Zoon', 'Ol.o.bord', '19,5x22,5', '1992', 550);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('137.jpg', 'Portret (Solzjenitsyn)', 'Ol.o.lin.', '45x55', '1996', 850);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('146.jpg', 'Slaapwandelaar', 'Ol.o.doek', '40x50', '1990', 850);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('148 A.jpg', 'De Val', 'Ets', '24,5x16', '1990', 225);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('148 B.jpg', 'De Val', 'Ets (ingekleurd)', '24,5x16', '1990', 300);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('157.jpg', 'Man schilderij ophangend', 'Ol.o.bord', '70x85', '1992', 1100);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('159.jpg', 'Stad&Vrouw', 'Ol.o.bord', '61x76', '1991', 2400);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('171.jpg', 'Liggende eenzame', 'Ol.o.bord', '20,5x26,5', '1989', -1);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('174.jpg', 'Meisje met dubbelportret', 'Ol.o.bord', '30x39', '1989', 950);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('19.jpg', 'Liggende man', 'Acryl o.p.', '60x73,5', '1993', 1050);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('202.jpg', 'Schreeuw', 'Pastel/kl.potl.o.p.', '13x9', '1992', 225);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('237.jpg', 'Meisje in het water', 'Bruin/zwarte inkt tek.', '37x55', '1995', 400);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('241.jpg', 'Gebogen vrouw', 'Ol.o.p.', '45x56', '1995', 650);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('246.jpg', 'Pasgeborene', 'Acryl o.p.', '36,5x49,5', '1996', 375);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('248.jpg', 'Angstig gehurkte man op stoel', 'Acryl o.p.', '36,5x49,5', '1995', 550);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('249.jpg', 'Kruipende vrouw', 'Acryl o.p.', '49,5x36,5', '1996', 550);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('265.jpg', 'Man portret', 'Houtskool', '21x29', '1993', 250);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('27 a.jpg', 'Een-Zaamheid (Eenheid Eenzaamheid)', 'Ets', '2-luik 59,5x39', '1993', 650);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('274.jpg', 'Leunende blauwe man', 'Acryl o.p.', '36,5x49,5', '1996', 475);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('275.jpg', 'Model met nachtblauwe achtergrond', 'Ol.o.p.', '46x57', '1992', 950);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('290.jpg', 'Man in embryohouding', 'Gem. tech. o.p.', '42x59,5', '1994', 1000);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('319.jpg', 'De vallende / in zijn droom', 'Gem. tech. o.p.', '100,5x65', '1995', 1250);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('320.jpg', 'Speelse jongen', 'Gem. tech. o.p.', '65x100,5', '1995', 1150);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('321.jpg', 'Andersgeborene', 'Gem. tech.', '65x100,5', '1995', 1250);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('86.jpg', 'Schreeuw', 'Ol.o.lin.', '140x85', '1992', 3800);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('88.jpg', 'Diagonale horizon', 'Ol.o.bord', '38x45', '1992', 850);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('97.jpg', 'Maanlicht kapsel', 'Ol.o.bord', '20,5x32', '1988', 550);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 091.jpg', 'In bed als paard', 'Ol.o.doek', '35x38', '1991', 1050);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 011.jpg', 'Loser / zonder toeschouwer', 'Ol.o.lin.', '140x120', '1993', 4500);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 020.jpg', 'Allegorie van het geloof', 'Ol.o.bord', '82x122', '1992', 4500);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 021.jpg', 'Man met hond', 'Gem.tech.', '50x70', '1995', 850);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 022.jpg', 'Vrouw met hond', 'Gem.tech.', '50x70', '1991', 950);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 023.jpg', 'Oude vrouw in kou', 'Olieverf/oliepastel o.p.', '50x65', '1994', 950);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 024.jpg', 'Hondse man', 'Acryl o.p.', '76x56', '1992', 925);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 025.jpg', 'Hondse vrouw', 'Acryl o.p.', '76x56', '1992', 925);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 027.jpg', 'Hangende man', 'Gem.tech.o.p.', '42x60', '1992', 850);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 028.jpg', 'Val in droom', 'Gem.tech.o.p.', '60x42', '1992', 850);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 031.jpg', 'Angela / Sorrow', 'Gem. tech.', '65x100,5', '1995', -1);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 032.jpg', 'Nabucco II / Zelfportret', 'Gemengde techniek o.p.', '100,5x70', '1994', 1050);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 035.jpg', 'Verlegen model', 'Ol.o.p.', '46x57', '1991', 850);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 039.jpg', 'Liggende', 'Gem.techniek op papier(kleurpotlood/pastel/acryl/aquarel)', '51x56,5', '1994', 950);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 040.jpg', 'Hondse vermoeidheid', 'Acryl o.p.', '95x52', '1994', 950);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 041.jpg', 'Man in gekruiste vorm', 'Gem.tech.o.p.', '42x60', '1992', 850);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 042.jpg', 'Zittende man met licht van rechts', 'Gem.tech.o.p.', '42x60', '1992', 850);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 045.jpg', 'Zittende (handen vast)', 'Aq./acryl o.p.', '50x85', '1993', 900);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 046.jpg', 'Zittende in gedachten', 'Aq./acryl o.p.', '50x58', '1993', 750);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 047.jpg', 'Afro-schoonheid', 'Acryl o.p.', '75x55', '1992', 1150);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 048.jpg', 'Afro-schoonheid', 'Acryl o.p.', '75x55', '1992', 1150);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 049.jpg', 'Opstaan', 'Oliekrijt/Indische inkt o.p.', '100,5x65', '1993', 800);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 050.jpg', 'Liefdespaar', 'Gem.tech.', '50x70', '1991', 950);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 051.jpg', 'Opstaande man', 'Gem. tech.', '100,5x65', '1995', 850);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 052.jpg', 'Man met slang', 'Kleurenpotlood o.p.', '65x100,5', '1992', 950);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 059.jpg', 'Gebogen man', 'Gem. tech.', '75x95', '1990', 850);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 064.jpg', 'Zwanger in zorgen', 'Ol.o.p.', '18x26', '1992', 400);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 067.jpg', 'Plassen aan hek / grens', 'Ol.o.p.', '34x25', '1992', 550);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 077.jpg', 'Beeld aan water', 'Ol.o.p.', '35x26', '1991', 500);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 083.jpg', 'Plassende', 'Ol.o.p.', '26x37,5', '1992', 500);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 087.jpg', 'Schoonspringer', 'Ol.o.p.', '21x29', '1992', 300);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 088.jpg', 'Bidder', 'Ol.o.p.', '32x21', '1991', 450);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 096.jpg', 'Wanhopige', 'Aq.', '35x28', '1993', 350);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 101.jpg', 'Zwarte figuur op stoel', 'Ol.o.p.', '27x34', '1993', 450);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 105.jpg', 'Anthonius', 'Ol.o.p.', '28x36', '1992', 450);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 108.jpg', 'Laatste ridder met zijn zwaard', 'Aq.', '32x24', '1991', 300);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 116.jpg', 'Trots (blauwzwanger)', 'Ol.o.p.', '30x21', '1992', -1);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 121.jpg', 'In zichzelf gezonken', 'Ol.o.p.', '31x22', '1993', 300);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 029.jpg', 'Schoonspringer in daling', 'Ol.o.bord', '24x32', '1994', 500);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 044.jpg', 'Model voor schildersezel', 'Ol.o.p.', '57x46', '1990', 650);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 048.jpg', 'Wanhopigen (blauw figuur)', 'Ol.o.p.', '64,5x50', '2001', 900);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 067.jpg', 'Verdwaald op snelweg', 'Olieverf en oliepastel o.doek', '50x40', '1990', 1100);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 075.jpg', 'Magische krachten of regenboog', 'Ol.o.doek', '55x65', '1989', 1100);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 089.jpg', 'Vuur en vlam van zee', 'Ol.o.bord', '45x35', '1990', 950);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 092.jpg', 'Kosmosfiguur', 'Ol.o.bord', '34x45', '1989', 950);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 105.jpg', 'Compositie met vier figuren', 'Ol.o.bord', '31x31', '1990', 850);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 106.jpg', 'Vrouw / Man / Slang', 'Ol.o.doek', '28x20', '1991', 450);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 119.jpg', 'Naar buiten starende', 'Ol.o.p', '34x25', '1995', 500);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 131.jpg', 'De val', 'Indische inkt o.p.', '30x21', '1993', 250);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 132.jpg', 'Liggend / slapend naakt', 'Ind.inkt o.p.', '24x17', '1992', 250);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 133.jpg', 'Betreurende liggende', 'Potlood', '31x22', '1993', 225);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 033.jpg', 'Pan met geit in landschap', 'Ol.o.doek', '40x50', '1988', 1000);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 034.jpg', 'Liefdesspel op wiel', 'Ol.o.doek', '60x50', '1989', 1250);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 036.jpg', 'Eenzame', 'Ol.o.bord', '72x90', '1989', 1880);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 040.jpg', 'Verloren koninkrijk', 'Ol.o.bord', '60x46', '1996', 1500);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 041.jpg', 'De schilder en de dynamiek', 'Ol.o.bord', '50x65', '1993', 1200);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 050.jpg', 'Wanhoop', 'Ets (ingekleurd)', '24x18', '1989', 325);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 053.jpg', 'de Melancholie of de Wandeling', 'Ets', '9x23', '1989', 150);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 098.jpg', 'het Slachthuis', 'Oliekrijt', '18x25', '1994', 200);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 108.jpg', 'Vliegende Hollander', 'Houtskool', '31x22', '1994', 250);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 119.jpg', 'Naamloos', 'Ets', '2-luik 59,5x39', '1993', 650);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 140.jpg', 'Naamloos', 'Potlood', '31x22', '1994', 225);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 141.jpg', 'Op het einde', 'Potlood', '31x22', '1994', 225);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 142.jpg', 'Verzet tegen val', 'Potlood', '22x31', '1994', 225);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 143.jpg', 'Archaïsche figuur', 'Potlood', '22x31', '1994', 225);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 144.jpg', 'Met zichzelf bezig', 'Houtskool', '31x22', '1994', 225);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 145.jpg', 'Badende', 'Potlood', '22x31', '1994', 225);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 146.jpg', 'Slapende schoonheid', 'Potlood', '31x22', '1994', 225);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 147.jpg', 'Ingreske figuur', 'Potlood', '22x31', '1994', 225);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 148.jpg', 'Verdrietig', 'Potlood', '22x31', '1994', 225);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 149.jpg', 'Man met sik', 'Potlood', '22x31', '1994', 225);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 150.jpg', 'Kadaverfiguur', 'Potlood', '31x22', '1994', 225);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 151.jpg', 'Slachthuis', 'Potlood', '31x22', '1994', 250);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 152.jpg', 'Hangende', 'Potlood', '31x22', '1994', 225);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 154.jpg', 'de Helft', 'Potlood', '22x31', '1994', 200);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 155.jpg', 'Sirene', 'Potlood', '22x31', '1994', 225);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 156.jpg', 'Sirene II', 'Potlood', '22x31', '1994', 225);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 024.jpg', 'Achterbuurtkinderen', 'Ol.o.doek', '110x130', '1988', 5100);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 043.jpg', 'de Droom en de val', 'Ol.o.lin.', '125x110', '1995', 2400);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 050.jpg', 'Vrouw in het donker', 'Ol.o.p.', '34x42', '1995', 550);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 057.jpg', 'Model met twee handen op hoofd', 'Ol.o.p.', '24x35', '1994', 450);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 058.jpg', 'Blauwzwangere', 'Ol.o.p.', '31x22', '1992', 450);
INSERT INTO `Individuen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 062.jpg', 'Man met rechterarm leunend', 'Oliekrijt', '46x57', '1996', 550);

# --------------------------------------------------------

#
# Table structure for table `Landschappen`
#

DROP TABLE IF EXISTS `Landschappen`;
CREATE TABLE `Landschappen` (
  `Foto` varchar(128) NOT NULL default '',
  `Titel` varchar(128) default NULL,
  `Materiaal` varchar(128) default NULL,
  `Afmeting` varchar(128) default NULL,
  `Jaar` varchar(128) default NULL,
  `Prijs` smallint(6) default NULL,
  UNIQUE KEY `Foto` (`Foto`),
  FULLTEXT KEY `Foto_2` (`Foto`),
  FULLTEXT KEY `Titel` (`Titel`),
  FULLTEXT KEY `Materiaal` (`Materiaal`),
  FULLTEXT KEY `Afmeting` (`Afmeting`),
  FULLTEXT KEY `Jaar` (`Jaar`)
) TYPE=MyISAM;

#
# Dumping data for table `Landschappen`
#

INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('01.jpg', 'Berglandschap Zwitserland', 'Ol.o.lin.', '25x29', '1991', 700);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('107.jpg', 'Zeelandschap', 'Ol.o.bord', '14x20', '1992', 350);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('108.jpg', 'Stadsdroom', 'Ol.o.bord', '34x38', '1992', 500);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('129.jpg', 'Odysseus’ land', 'Ol.o.bord', '14,5x14,5', '1994', -1);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('2.jpg', 'Ottomaanse grafstenen', 'Ol. en Past. o.doek', '111x154', '1991', 4600);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('213 a.jpg', 'Golgotha 3-luik (deel 1)', 'Ol.o.papier', '26x35', '1993', 1200);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('213 b.jpg', 'Golgotha 3-luik (deel 2)', 'Ol.o.papier', '21x29,5', '1993', 1200);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('213.jpg', 'Golgotha 3-luik', 'Ol.o.papier', '26x35 21x29,5 26x35', '1993', 1200);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('252.jpg', 'Eenzame accaciaboom in landschap', 'Aq.', '36x51', '2000', 550);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('253.jpg', 'Ruig landschap met bomen', 'Aq.', '51x36', '2000', 600);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('267.jpg', 'Boomgaardenlandschap', 'Aq.', '51x36', '2000', 800);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('273.jpg', 'Landschap', 'Acryl o.pap.', '35x50', '1994', 450);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('279.jpg', 'Cypressenlandschap', 'Aq.', '35x50', '1995', 450);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('30.jpg', 'Jonge kersenbomen in bloesemtijd', 'Aq.o.p', '36x51', '2000', 800);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('308.jpg', 'Berglandschap met rivier', 'Aq.', '35x50', '2000', 850);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('314.jpg', 'Impressielandschap langs de IJssel', 'Ol.o.p.', '68x49,5', '1999', 900);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('324.jpg', 'Bomenlandschap in de wind', 'Aq.', '35x50', '1999', 600);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('326.jpg', 'Landschap', 'Ol.o.pap.', '55x70', '1992', 900);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('49 I.jpg', 'Berglandschap', 'Eigen bloed op p.', '25x34', '1995', 400);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('50.jpg', 'Man&Zoon landschap met bergen', 'Eigen bloed o.p.', '25x34', '1995', 450);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('53 I.jpg', 'Churwalden landschap (Zwitserland)', 'Bruin krijt o.p.', '2-luik 32x24', '1991', 450);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('53 II.jpg', 'Churwalden landschap (Zwitserland)', 'Bruin krijt o.p.', '2-luik 32x24', '1991', 450);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('54 10.jpg', 'Zwitserse landschappen (diverse stukken)', 'Aq.o.p.', '30x24', '1991', 350);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('54 6.jpg', 'Zwitserse landschappen (diverse stukken)', 'Aq.o.p.', '30x24', '1991', 350);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('54 7.jpg', 'Zwitserse landschappen (diverse stukken)', 'Aq.o.p.', '30x24', '1991', 350);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('54 8.jpg', 'Zwitserse landschappen (diverse stukken)', 'Aq.o.p.', '30x24', '1991', 350);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('54 9.jpg', 'Zwitserse landschappen (diverse stukken)', 'Aq.o.p.', '30x24', '1991', 350);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('54 B.jpg', 'Zwitserse landschappen (diverse stukken)', 'Aq.o.p.', '24x30', '1991', 350);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('54 C 2.jpg', 'Vadus Mittagsspitze', 'Aq.o.p.', '30x24', '1991', 350);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('54 C 3.jpg', 'Vadus Mittagsspitze', 'Aq.o.p.', '30x24', '1991', 350);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('54 C.jpg', 'Vadus Mittagsspitze', 'Aq.o.p.', '24x30', '1991', 350);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('54 C4.jpg', 'Vadus Mittagsspitze', 'Aq.o.p.', '30x24', '1991', 350);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('54 I.jpg', 'Churwalden landschap (Zwitserland)', 'Aq.o.p.', '30x24', '1991', 350);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('54 II.jpg', 'Churwalden landschap (Zwitserland)', 'Aq.o.p.', '30x24', '1991', 350);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('54 III.jpg', 'Churwalden landschap (Zwitserland)', 'Aq.o.p.', '30x24', '1991', 350);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('54 IIII.jpg', 'Churwalden landschap (Zwitserland)', 'Aq.o.p.', '30x24', '1991', 350);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('54 IIIII.jpg', 'Churwalden landschap (Zwitserland)', 'Aq.o.p.', '30x24', '1991', 350);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('7.jpg', 'Het droomhuis', 'Ol. Op linnen', '43,5x43,5', '1996', 1400);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 008.jpg', 'Vuile was', 'Ol.o.lin.', '130x170', '1993', 4700);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 030.jpg', 'Ooijs landschap', 'Ol.o.pap.', '54x67', '1999', 1600);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 106.jpg', 'Onheilspellend luchtlandschap', 'Aq.', '23x29', '1992', 350);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 125.jpg', 'Landhuis', 'Ol.o.p.', '21x29', '1991', 450);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 039.jpg', 'Eikenboom in de nacht', 'Ol.o.lin.', '30x40', '1994', 900);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 045.jpg', 'Aan de IJssel', 'Ol.o.p.', '64x75', '1999', 900);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 058.jpg', 'Paranoialandschap / Man en zoon', 'Ol.o.doek', '80x100', '1987', 1800);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 085.jpg', 'Bomen in  de najaarsnacht', 'Ol.o.lin.', '45x45', '1996', 1400);
INSERT INTO `Landschappen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 047.jpg', 'Sneeuwlandschap met warme lucht', 'Aq.', '24x15,5', '1994', -1);

# --------------------------------------------------------

#
# Table structure for table `Paardenbeelden`
#

DROP TABLE IF EXISTS `Paardenbeelden`;
CREATE TABLE `Paardenbeelden` (
  `Foto` varchar(128) NOT NULL default '',
  `Titel` varchar(128) default NULL,
  `Materiaal` varchar(128) default NULL,
  `Afmeting` varchar(128) default NULL,
  `Jaar` varchar(128) default NULL,
  `Prijs` smallint(6) default NULL,
  UNIQUE KEY `Foto` (`Foto`),
  FULLTEXT KEY `Foto_2` (`Foto`),
  FULLTEXT KEY `Titel` (`Titel`),
  FULLTEXT KEY `Materiaal` (`Materiaal`),
  FULLTEXT KEY `Afmeting` (`Afmeting`),
  FULLTEXT KEY `Jaar` (`Jaar`)
) TYPE=MyISAM;

#
# Dumping data for table `Paardenbeelden`
#

INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 001.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 003.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 004.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 005.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 006.jpg', 'Robina', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 007.jpg', 'Robina', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 008.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '1998', 1500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 010.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '1998', 1500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 011.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '1998', 1500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 013.jpg', 'Raksh', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2700);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 014.jpg', 'Raksh', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2700);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 015.jpg', 'Raksh', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2700);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 017.jpg', 'Raksh', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2700);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 018.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 019.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 021.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2600);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 022.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2600);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 023.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2600);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 024.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2600);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 025.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '1995', 1350);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 026.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '1995', 1350);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 027.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '1995', 1350);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 028.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '1995', 1350);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 029.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '1995', 1350);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 030.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2600);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 033.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 034.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 035.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 036.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 037.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 038.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 039.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 040.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 041.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 042.jpg', 'Koppel', 'Brons', '2x ± 30x14x45 (hxbxl)', '1997', 4900);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 043.jpg', 'Koppel', 'Brons', '2x ± 30x14x45 (hxbxl)', '1997', 4900);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 044.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1995', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 045.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1995', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 046.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 047.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 048.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 049.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 050.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 051.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 052.jpg', 'Sleepner', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 053.jpg', 'Sleepner', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 055.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 056.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 057.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 058.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 059.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 060.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 061.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 062.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 063.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 065.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 066.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 067.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 068.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 070.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 071.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 072.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 073.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 074.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 075.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 076.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 077.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 078.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 079.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 080.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 081.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 082.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 084.jpg', 'Branco', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 085.jpg', 'Branco', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 087.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 088.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 089.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 090.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 091.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 092.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 093.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 094.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 095.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 096.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 097.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 098.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 099.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 100.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 101.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 102.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 103.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 104.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 105.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 106.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1994', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 107.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1994', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 108.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1995', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 109.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1995', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 110.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1995', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 112.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 113.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 114.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 116.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 117.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1995', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 118.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1995', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 119.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 120.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 121.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 123.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 124.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 125.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 126.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 127.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 128.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 260.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 129.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1994', 2100);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 130.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1994', 2100);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 131.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 132.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 133.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 134.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 136.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 137.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 138.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 139.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 140.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 141.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 143.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 144.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2200);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 145.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 146.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 147.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 148.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 149.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 150.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 151.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 152.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 154.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 155.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 156.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 157.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 158.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 159.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 160.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 161.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 162.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 163.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 164.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 165.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 166.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 167.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 168.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 169.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 170.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 171.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 172.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 173.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 174.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 175.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 176.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 177.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1350);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 178.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1350);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 179.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1350);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 180.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2001', 1500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 181.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2001', 1500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 182.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '1999', 1250);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 183.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '1999', 1250);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 184.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1600);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 185.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1600);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 186.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1600);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 187.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 188.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 189.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 190.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2001', 1600);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 191.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2001', 1600);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 192.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2001', 1600);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 193.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2001', 1600);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 194.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 195.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 196.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 197.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 198.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '1999', 1800);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 199.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '1999', 1800);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 200.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '1999', 1800);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 201.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '1999', 1800);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 202.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 203.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '2000', 1500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 204.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '1999', 1400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 205.jpg', 'Veulen', 'Brons', '± 20x10x28 (hxbxl)', '1999', 1400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 207.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2600);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 208.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2600);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 209.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2600);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 210.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2600);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 211.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2600);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 212.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2600);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 213.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 214.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 215.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 216.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 217.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 218.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1995', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 219.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1995', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 220.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 221.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 222.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 224.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 225.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 226.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 227.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 228.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1995', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 229.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1995', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 230.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1995', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 232.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1994', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 233.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1994', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 234.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 235.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 236.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1995', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 238.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 239.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 240.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 241.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 242.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 244.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1996', 2300);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 245.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 246.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 247.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 248.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1998', 2500);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 249.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 250.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '1997', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 251.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 252.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 253.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 254.jpg', 'Hengst', 'Brons', '± 30x14x45 (hxbxl)', '2000', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 255.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 256.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 257.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 258.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);
INSERT INTO `Paardenbeelden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paardenbeelden 259.jpg', 'Merrie', 'Brons', '± 30x14x45 (hxbxl)', '1999', 2400);

# --------------------------------------------------------

#
# Table structure for table `Paardenschilderijen`
#

DROP TABLE IF EXISTS `Paardenschilderijen`;
CREATE TABLE `Paardenschilderijen` (
  `Foto` varchar(128) NOT NULL default '',
  `Titel` varchar(128) default NULL,
  `Materiaal` varchar(128) default NULL,
  `Afmeting` varchar(128) default NULL,
  `Jaar` varchar(128) default NULL,
  `Prijs` smallint(6) default NULL,
  UNIQUE KEY `Foto` (`Foto`),
  FULLTEXT KEY `Foto_2` (`Foto`),
  FULLTEXT KEY `Titel` (`Titel`),
  FULLTEXT KEY `Materiaal` (`Materiaal`),
  FULLTEXT KEY `Afmeting` (`Afmeting`),
  FULLTEXT KEY `Jaar` (`Jaar`)
) TYPE=MyISAM;

#
# Dumping data for table `Paardenschilderijen`
#

INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('114.jpg', 'Paarden met rood paard op de achtergrond', 'Ol.o.bord', '25x30,5', '1994', 850);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('115.jpg', 'Naar Foto Finish', 'Ol.o.bord', '25x30,5', '1995', 850);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('167_2.jpg', 'Paard / Vrouw / Business (compositie)', 'Ol.o.krantenpapier', '83x57', '1991', 1150);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('20.jpg', 'Vechtende paarden', 'Olieverf op papier', '65x50', '1992', 1200);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('21.jpg', 'Rode droom van blauw paard II', 'Ol.o.p.', '76x56', '1994', 1300);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('217.jpg', 'Fotofinish', 'Ets', '16x24,5', '1989', 300);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('263.jpg', 'Werkpaarden', 'Aq.', '43x30', '1999', 450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('266.jpg', 'Dalend paard', 'Ol.o.p.', '32x24', '1992', 550);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('269.jpg', 'Hoef krabbend paard', 'Ol.o.p.', '76x56', '1998', 1400);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('274_2.jpg', 'Struikelend paard', 'Ol.o.p.', '40x38', '1995', 550);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('276.jpg', 'Paarden in perspectief (met parende paardenachtergrond)', 'Olieverf op papier', '65,5x48', '1993', 1200);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('278.jpg', 'Hinnikende', 'Ol.o.p.', '56x76', '1995', 1350);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('282.jpg', 'Leed / Wil (paard met rode manen en staart)', 'Ol.o.p.', '102,5x75', '1994', 1700);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('284.jpg', 'de Hinnikende', 'Gem.techn. ol.o.p.', '65x100', '1990', -1);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('287.jpg', 'Knielend rood paard met witte bles', 'Ol.o.p.', '102,5x75', '1994', 1600);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('288.jpg', 'Beenkrabbend rood paard', 'Ol.o.p.', '102,5x75', '1995', 1700);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('289.jpg', 'Blauw paard met linkerbeen omhoog', 'Olieverf op papier', '65,5x48', '1993', 1100);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('292.jpg', 'Eenzaam paard', 'Olieverf op papier', '65,5x48', '1993', 1100);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('293.jpg', 'Rood paard boven Nijmeegs landschap zwevend', 'Ol.o.p.', '65,5x48', '1993', 1200);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('295.jpg', 'Springerig groen paard', 'Ol.o.p.', '68x50', '1994', 1300);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('297.jpg', 'Strijdenden', 'Ol.o.p.', '65x48', '1991', 1300);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('298.jpg', 'Vermoeid paard', 'Ol.o.p.', '65x48', '1991', 1200);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('299.jpg', 'Circuspaard', 'Ol.o.p.', '65x48', '1991', 1200);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('300.jpg', 'Paarden in de nacht', 'Ol.o.pap', '65,5x48', '1994', 1250);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('301 II.jpg', 'Dansende', 'Ol.o.pap', '65,5x48', '1994', 1250);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('301.jpg', 'Buigend paard', 'Ol.o.p.', '65x48', '1991', 1300);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('302.jpg', 'Paardenkudde', 'Ol.o.p.', '65x50', '1992', 1350);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('303.jpg', 'Los uit de sokkel', 'Ol.o.p.', '65,5x48', '1994', 1150);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('304.jpg', 'Studie naar schrikkend paard', 'Ol.o.p.', '56,5x48', '1991', 1200);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('312.jpg', 'Ontdekking geel paard in de nacht', 'Ol.o.p.', '68x50', '1991', 1200);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('39.jpg', 'Sombere terugblik', 'Ol.o.p.', '68x50', '1991', 1200);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('42.jpg', 'Ritmisch paard', 'Ol.o.p', '76x56', '1994', 1450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('43.jpg', 'Trotse hengst', 'Ol.o.p.', '65,5x48', '1991', 1300);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('44.jpg', 'Schoppend paard', 'Oliekrijt op papier', '36x27', '1991', -1);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('52.jpg', 'Groen paard', 'Aq.o.p.', '29x21', '1993', 275);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('87.jpg', 'Paard op zichzelf', 'Ol.o.p.bev.o.lin', '39,5x39,5', '1994', 1000);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('91.jpg', 'Hinnikende zwarte hengst op gele achtergrond', 'Ol.o.doek', '40x30', '1995', 850);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('93.jpg', 'Paarse paarden', 'Ol.o.bord', '31x29,5', '1994', 950);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('94.jpg', 'Paard in stal', 'Ol.o.doek', '31x28', '1992', 750);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('99.jpg', 'Paard met slang', 'Ol.o.lin.', '22,5x18,5', '1993', 750);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 004.jpg', 'Vallend paard', 'Ol.o.p.', '76x56', '1996', 1300);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 005.jpg', 'Buigend paard (roodgele achtergrond)', 'Olieverf/kleurenpotlood o.p.', '100,5x65', '1993', 1450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 007.jpg', 'De galloperende blauwe (paarden serie)', 'Ol.o.p.', '32x24', '1991', 450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 008.jpg', 'Liefdesgevecht (paarden serie)', 'Ol.o.p.', '32x24', '1991', 550);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 009.jpg', 'Galop (paarden serie)', 'Ol.o.p.', '32x24', '1991', -1);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 010.jpg', 'Veulen (paarden serie)', 'Ol.o.p.', '32x24', '1991', 450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 011.jpg', 'De kreupele', 'Ol.o.p.', '42x34', '1993', 800);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 012.jpg', 'Paard en gevallen ruiter (paarden serie)', 'Ol.o.p.', '32x24', '1991', 500);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 013.jpg', 'Zelfportret als Oosterse ruiter voor Nijmegen / de zuchtende Moor', 'Aq.', '32x24', '1990', 550);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 016.jpg', 'Onwillige merrie (paarden serie)', 'Ol.o.p.', '32x24', '1991', 500);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 017.jpg', 'Rennend paard (paarden serie)', 'Ol.o.p.', '32x24', '1991', 450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 018.jpg', 'Contrastpaarden (paarden serie)', 'Ol.o.p.', '32x24', '1991', -1);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 020.jpg', 'Paard voor zee (paarden serie)', 'Ol.o.p.', '32x24', '1991', 500);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 021.jpg', 'Groene galloperende (paarden serie)', 'Ol.o.p.', '32x24', '1991', 450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 022.jpg', 'Been krabbende (paarden serie)', 'Ol.o.p.', '32x24', '1991', 400);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 023.jpg', 'Stijgende (paarden serie)', 'Ol.o.p.', '32x24', '1991', 400);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 024.jpg', 'Steigerende (paarden serie)', 'Ol.o.p.', '32x24', '1991', 400);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 025.jpg', 'Grond rakende (paarden serie)', 'Ol.o.p.', '32x24', '1991', 500);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 026.jpg', 'Rechterbeen omhoog (paarden serie)', 'Ol.o.p.', '32x24', '1991', 450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 027.jpg', 'Rood galloperende in de nacht (paarden serie)', 'Ol.o.p.', '32x24', '1991', 500);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 028.jpg', 'Angstig geel paard (paarden serie)', 'Ol.o.p.', '32x24', '1991', 450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 029.jpg', 'Trots lopende (paarden serie)', 'Ol.o.p.', '36x27', '1991', 500);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 030.jpg', 'Paarden aan zee (paarden serie)', 'Ol.o.p.', '32x24', '1991', 500);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 031.jpg', 'Paard van Don Quichotte (paarden serie)', 'Ol.o.p.', '32x24', '1991', 450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 032.jpg', 'Slapend paard (paarden serie)', 'Ol.o.p.', '32x24', '1991', 450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 033.jpg', 'Opstaande (paarden serie)', 'Ol.o.p.', '32x24', '1991', 450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 034.jpg', 'Schrobbende (paarden serie)', 'Ol.o.p.', '32x24', '1991', 450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 035.jpg', 'Grijs paard (paarden serie)', 'Ol.o.p.', '32x24', '1991', 400);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 036.jpg', 'Springpaard (paarden serie)', 'Ol.o.p.', '32x24', '1991', 450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 037.jpg', 'Aandachtig paard (paarden serie)', 'Ol.o.p.', '32x24', '1991', 450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 038.jpg', 'Knielende blauwe (paarden serie)', 'Ol.o.p.', '32x24', '1991', 450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 040.jpg', 'Naar het voer toe (paarden serie)', 'Ol.o.p.', '32x24', '1991', 450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 041.jpg', 'Likkende (paarden serie)', 'Ol.o.p.', '32x24', '1991', 450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 042.jpg', 'Krabbende (paarden serie)', 'Ol.o.p.', '32x24', '1991', 400);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 043.jpg', 'Masturbator (paarden serie)', 'Ol.o.p.', '32x24', '1991', 450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 053.jpg', 'Hinnekend paard (boven Nijmegen)', 'Ol.o.p.', '65x50', '1991', 1350);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 054.jpg', 'Schoppend paard', 'Ol.o.p.', '65x48', '1991', -1);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 059.jpg', 'Triest paard', 'Acryl/olieverf.o.p.', '65x48', '1991', 1150);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 069.jpg', 'Verzorgende paarden', 'Ol.o.p.', '65x48', '1991', 1200);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 072.jpg', 'Neerzijgende', 'Ol.o.p.', '65x50', '1993', 1250);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 073.jpg', 'Knielend groenpaars paard', 'Ol.o.p.', '65x50', '1992', 1200);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 080.jpg', 'Ritmisch rood paard', 'Ol.o.p.', '50x65', '1994', 1050);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 081.jpg', 'Schriksprong', 'Ol.o.p.', '50x65', '1994', 1050);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 014.jpg', 'Speelse verlegenheid', 'Bruinkrijt o.p.', '32x24', '1995', -1);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 015.jpg', 'Speelse verlegenheid', 'Bruinkrijt o.p.', '32x24', '1995', -1);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 094.jpg', 'Enthousiaste hengst', 'Potloodtekening', '21x29,5', '1993', 300);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 096.jpg', 'Ritmisch paard (tek. naar Leonardo)', 'Potl.tek.o.p.', '35x50', '1986', 350);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 097.jpg', 'Dromen', 'Ets (ingekleurd)', '24,5x16', '1989', 350);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 098.jpg', 'Fotofinish', 'Ets (ingekleurd)', '16x24,5', '1989', 350);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 099.jpg', 'Paard in stal', 'Oliekrijt o.p.', '36x27', '1994', 300);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 109.jpg', 'Oud paard', 'Potloodtekening', '21x29,5', '1993', 275);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 110.jpg', 'Drachtig paard', 'Potloodtekening', '29,5x21', '1993', 275);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 111.jpg', 'Rustend paard', 'Potloodtekening', '29,5x21', '1993', 275);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 057.jpg', 'Ritmische richtingen', 'Ol.o.p.', '50x65', '1994', 1150);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 056.jpg', 'Bevel aan paarden', 'Ets', '32x24', '1993', 300);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 073.jpg', 'Dromen', 'Ets', '24,5x16', '1989', 270);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 157.jpg', 'Schuine horizon', 'Potloodtekening', '29,5x21', '1992', 250);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 002.jpg', 'Fotofinish (tweeluik)', 'Ol.o.bord', '2x 81x62', '1996', 2800);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 003.jpg', 'Fotofinish (tweeluik)', 'Ol.o.bord', '2x 81x62', '1996', 2800);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 004.jpg', 'Fotofinish (tweeluik)', 'Ol.o.bord', '2x 81x62', '1996', 2800);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 035.jpg', 'Dramatisch paard', 'Ol.o.p.', '65x50', '1992', 1300);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 036.jpg', 'Liefde / Macht / Spel / Verraad (vierluik)', 'Aq.', '4x 32x24', '1992', 1450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 038.jpg', 'Liefde / Macht / Spel / Verraad (vierluik)', 'Aq.', '4x 32x24', '1992', 1450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 039.jpg', 'Liefde / Macht / Spel / Verraad (vierluik)', 'Aq.', '4x 32x24', '1992', 1450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 040.jpg', 'Liefde / Macht / Spel / Verraad (vierluik)', 'Aq.', '4x 32x24', '1992', 1450);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('143.jpg', 'Twee paarden voor het water', 'Ol.o.doek', '50x40', '1991', 1400);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('23.jpg', 'Twee paarden voor een rots', 'Ol.o.p.', '65x50', '1993', 1350);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('245.jpg', 'Rennende paarden', 'Ol.o.karton', '42x59,5', '1995', 1050);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('286.jpg', 'Blauw paard met gouden manen', 'Ol.o.p.', '102,5x75', '1995', 1600);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('305.jpg', 'Vos / Paard in Hollands landschap', 'Ol.o.p.', '68x49,5', '1995', 1300);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('306.jpg', 'Blauw paard met witte bles', 'Ol.o.p.', '65,5x48', '1995', -1);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('313.jpg', 'Hoestend paard', 'Ol.o.p.', '65x50', '1993', 1200);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 001.jpg', 'In nachtelijke eenzaamheid', 'Ol.o.lin.', '150x130', '1991', 6500);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 002.jpg', 'Twee strijdende paarden', 'Ol.o.doek', '110x95', '1993', 3500);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 107.jpg', 'Verwonde ruiter op paard', 'Potloodtek.', '29,5x21', '1992', 300);
INSERT INTO `Paardenschilderijen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 034.jpg', 'Paard als nacht naar antieke ruïne toe', 'Ol.o.p.', '65x50', '1995', 1500);

# --------------------------------------------------------

#
# Table structure for table `Portretten`
#

DROP TABLE IF EXISTS `Portretten`;
CREATE TABLE `Portretten` (
  `Foto` varchar(128) NOT NULL default '',
  `Titel` varchar(128) default NULL,
  `Materiaal` varchar(128) default NULL,
  `Afmeting` varchar(128) default NULL,
  `Jaar` varchar(128) default NULL,
  `Prijs` smallint(6) default NULL,
  UNIQUE KEY `Foto` (`Foto`),
  FULLTEXT KEY `Foto_2` (`Foto`),
  FULLTEXT KEY `Titel` (`Titel`),
  FULLTEXT KEY `Materiaal` (`Materiaal`),
  FULLTEXT KEY `Afmeting` (`Afmeting`),
  FULLTEXT KEY `Jaar` (`Jaar`)
) TYPE=MyISAM;

#
# Dumping data for table `Portretten`
#

INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('103.jpg', 'Portret (Jezus)', 'Ol.o.lin.', '30x35', '2001', 800);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('109.jpg', 'Russisch meisje', 'Ol.o.bord', '22x26', '1995', 500);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('113.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('116.jpg', 'Intellectueel', 'Ol.o.bord', '25x30', '2001', 800);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('117.jpg', 'Vrouw', 'Ol.o.doek', '17,5x35,5', '2000', 600);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('118.jpg', 'Geopereerde', 'Ol.o.doek', '24x30', '2000', 550);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('119.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('128.jpg', 'Jongensportret', 'Ol.o.lin.', '17,5x20', '2000', 450);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('132.jpg', 'Kaal mannenportret', 'Ol.o.lin.', '20x35', '2001', 600);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('134.jpg', 'de Man / de Ambtenaar', 'Ol.o.lin.', '30x35', '2000', 550);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('135.jpg', 'de Iman / de Rabijn', 'Ol.o.lin.', '30x35', '2001', 550);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('151.jpg', 'Portret (boers portret)', 'Ol.o.doek', '30x40', '2000', 600);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('153.jpg', 'Psycho portret', 'Ol.o. vloerdelen', '40x40', '1999', 500);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('55.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('156.jpg', 'Jongemannenportret met platte neus', 'Ol.o.lin', '30x40', '2001', 700);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('235 a.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('235 b.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('235 c.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('258.jpg', 'Casje', 'Ol.o.lin.', '21x26', '2001', -1);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('270.jpg', 'Jongens portret (puber)', 'Ol.o.p.', '26x35', '1997', 550);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('34.jpg', 'Dubbelportret-traanogen', 'Ol.o.bord', 'Elk 16,5x17,5', '1998', 650);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('56.jpg', 'Vrouw / meisje', 'Ol.o.lin.', '32x35', '2000', 600);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('57.jpg', 'Oude man met stok (portret)', 'Ol.o.lin.', '42x30', '2000', 650);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('58.jpg', 'Boerin', 'Ol.o.lin.', '21x25', '2000', 500);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('59.jpg', 'Bruidegom', 'Ol.o.lin.', '22x26', '2000', 500);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('60.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('62.jpg', 'Jongensportret (melancholische ogen)', 'Ol.o.p.', '25x34', '1994', 800);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('63.jpg', 'Kidnapper', 'Ol.o.p.', '25x34', '1994', 800);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('73.jpg', 'Portret verwonde jongen', 'Ol.o.p.', '21,5x30,5', '1995', 800);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('74.jpg', 'Travestiet', 'Ol.o.p.', '23x37', '1997', 650);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('76.jpg', 'Portret van oosterling', 'Ol.o.p.', '25x32,5', '1999', 550);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('77.jpg', 'Vrouwenportret met hand voor gezicht', 'Ol.o.p', '25x32,5', '1999', 500);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('78.jpg', 'Portret van schele man', 'Ol.o.p.', '25x32,5', '1999', 600);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('79.jpg', 'Meisjesportret met 2 staartjes', 'Ol.o.p.', '25x32,5', '1999', 650);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('80.jpg', 'Meisjesportret', 'Ol.o.p.', '25x25', '1999', 450);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('92.jpg', 'Passolini jongen', 'Ol.o.lin.', '30x35', '2001', 850);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 085.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 015.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 016.jpg', 'Portretten landschap', 'Ol.o.bord', '17x21,5', '1987', -1);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 037.jpg', 'Jongen met scheve hals', 'Ol.o.lin.', '16x21', '1999', 400);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 062.jpg', 'de Bokser', 'Ol.o.lin.', '28x29', '1992', 450);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 071.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Portretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 083.jpg', 'Meisjesportret met hoofd naar links leunend', 'Ol.o.lin.', '38x45', '1990', 700);

# --------------------------------------------------------

#
# Table structure for table `Studies`
#

DROP TABLE IF EXISTS `Studies`;
CREATE TABLE `Studies` (
  `Foto` varchar(128) NOT NULL default '',
  `Titel` varchar(128) default NULL,
  `Materiaal` varchar(128) default NULL,
  `Afmeting` varchar(128) default NULL,
  `Jaar` varchar(128) default NULL,
  `Prijs` smallint(6) default NULL,
  UNIQUE KEY `Foto` (`Foto`),
  FULLTEXT KEY `Foto_2` (`Foto`),
  FULLTEXT KEY `Titel` (`Titel`),
  FULLTEXT KEY `Materiaal` (`Materiaal`),
  FULLTEXT KEY `Afmeting` (`Afmeting`),
  FULLTEXT KEY `Jaar` (`Jaar`)
) TYPE=MyISAM;

#
# Dumping data for table `Studies`
#

INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('01 b.jpg', 'de Nachtmerrie', 'Ets', '19,5x24,5', '1990', 250);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('150.jpg', 'Compositie met schelpen', 'Ets', '19,5x14,5', '1993', 225);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('169.jpg', 'Poppetje', 'Ol.o.bord', '24,5x30,5', '1988', 450);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('205.jpg', 'Monique', 'Ol.o.lin.', '75x55', '1996', 1100);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('224.jpg', 'Monique in antiek landschap', 'Ol.o.lin.', '70x55', '1996', 1400);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('229.jpg', 'Collage', 'Acrylverf o.p.', '69x97', '1986', -1);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('230 A.jpg', 'Futuristische natuurmoord', 'Aq. / Gem.tech.', '66x48', '1986', 900);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('230 B.jpg', 'Futuristische natuurmoord II', 'Aq. / Gem.tech.', '66x48', '1986', 900);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('230 C.jpg', 'Dambordcompositie met geel groen zwart', 'Aq. / Gem.tech.', '66x48', '1986', 900);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('231 B.jpg', 'Stilleven met schedel van ram', 'Potl.o.p.', '51,5x69,5', '1986', 800);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('231.jpg', 'Stilleven met schedel van ram II', 'Potl.o.p.', '51,5x69,5', '1986', 750);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('232 A.jpg', 'Stilleven met glazen', 'Aq. / Gem.tech.', '66x48', '1986', 1000);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('232 B.jpg', 'Stilleven', 'Aq.', '66x48', '1986', 700);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('232 C.jpg', 'Stilleven II', 'Aq.', '66x48', '1986', 700);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('232 D.jpg', 'Stilleven III', 'Aq.', '66x48', '1986', 700);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('232 E.jpg', 'Stilleven IV', 'Aq.', '66x48', '1986', 700);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('232 F.jpg', 'Stilleven V', 'Aq.', '66x48', '1986', 700);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('232 G.jpg', 'Stilleven I', 'Krijt o.p.', '66x48', '1986', 550);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('232 H.jpg', 'Stilleven II', 'Krijt o.p.', '66x48', '1986', 550);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('232 I.jpg', 'Stilleven III', 'Krijt o.p.', '66x48', '1986', 550);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('232 J.jpg', 'Stilleven IV', 'Krijt o.p.', '66x48', '1986', 550);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('232.jpg', 'Analytisch-kubistisch stilleven', 'Gem.tech.', '66x48', '1986', 1110);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('239.jpg', 'Model', 'Aq.o.p.', '25x25', '1985', 350);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('240.jpg', 'Model', 'Aq.o.p.', '25x25', '1985', 350);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('242.jpg', 'Potloodstudie aubergine/paprika', 'Potlood .o.p.', '35x50', '1984', 450);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('244.jpg', 'Man op stoel', 'Oliekr.o.p.', '21x29', '1993', 250);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('250.jpg', 'Stilleven glas met krant', 'Aq.', '51x36', '1996', 1200);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('251.jpg', 'Stilleven versie 2 George Cross', 'Aq.', '51x36', '1996', 1200);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('254.jpg', 'Studie met paardenkastanje en bramen', 'Ind.inkt', '35x50', '1995', 700);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('256.jpg', 'Witte bloem met rode achtergrond', 'Ol.o.p.', '37x52', '1994', 600);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('259.jpg', 'Meisje met lingerie', 'Br. / zw. inkt', '38x50', '1997', 500);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('260 A.jpg', 'Dierenstudie', 'Aq.', '36,5x51', '1985', 500);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('260B.jpg', 'Dierenstudie', 'Aq.', '36,5x51', '1985', 600);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('262 b.jpg', 'Model étude', 'Aq.', '36x51', '1986', 550);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('262.jpg', 'Model étude II', 'Aq.', '36x51', '1986', 500);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('268.jpg', 'Afro man met rode achtergrond', 'Ol.o.p.', '50,5x65', '1995', 700);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('310.jpg', 'Marloes op stoel', 'Aq.', '55x75', '2001', 900);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('316.jpg', 'Marloes', 'Aq.', '51x65', '2001', 800);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('318.jpg', 'Treurnis', 'Gem. tech. o.p.', '65x100', '1994', 750);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('322.jpg', 'Studie met bewegende armen', 'Krijt o.p.', '65x100', '1996', 750);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('40.jpg', 'Dode merel', 'Aq.', '29x21', '1991', 450);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('81.jpg', 'Vrouw met rood haar', 'Ol.o.lin.', '33x26', '1992', 500);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('82.jpg', 'Vrouw met linkerarm op heup', 'Ol.o.lin.', '33x26', '1992', -1);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 006.jpg', 'Hond in de wind', 'Ol.o.p.', '21x29,5', '1992', 400);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 087.jpg', 'Vechtende stieren', 'Ol.o.doek', '30x44', '1991', 500);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 089.jpg', 'Man&stier', 'Ol.o.doek', '50x65', '1989', 900);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 104.jpg', 'Honden en buit', 'Ol.o.doek', '40x50', '1988', 700);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 105.jpg', 'Vrouw met stier', 'Ol.o.doek', '40x50', '1988', 900);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 026.jpg', 'Gauguinesque vrouw', 'Ol.o.p.', '42x60', '1993', 800);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 036.jpg', 'Slapende vrouw met mozaïkdekbed', 'Ol.o.p.', '76,5x56', '1994', 1100);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 037.jpg', 'Liggende vrouw met appel', 'Acryl o.p.', '55x85', '1993', 800);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 038.jpg', 'Liggende vrouw met rood kapje', 'Acryl o.p.', '55x85', '1993', 850);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 062.jpg', 'Aalscholverkopstudie', 'Gouache', '35x50', '1985', -1);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 063.jpg', 'Meisje in bed boek lezend', 'Ol.o.p.', '30x21', '1993', 500);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 069.jpg', 'Liggende Afro-dite', 'Ol.o.p.', '34x25', '1992', 500);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 072.jpg', 'Drinkend wachtend', 'Ol.o.p.', '34x25', '1992', 550);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 073.jpg', 'Model kijkend naar links', 'Ol.o.p.', '34x25', '1992', 550);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 074.jpg', 'Hond zich verschonend', 'Ol.o.p.', '21x29,5', '1992', 400);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 076.jpg', 'Schaduwen', 'Ol.o.p.', '34x25', '1994', 600);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 084.jpg', 'Zittend op kruk', 'Ol.o.p.', '31x24', '1994', 500);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 090.jpg', 'Masturberende', 'Ol.o.p.', '35x26', '1991', 450);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 091.jpg', 'Vrouw starend naar buiten naar Postweg', 'Ol.o.p.', '35x26', '1993', 550);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 092.jpg', 'Oude man (rood)', 'Aq.', '13x24', '1995', 225);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 093.jpg', 'Negroide schoonheid', 'Aq.', '21x29', '1994', 300);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 095.jpg', 'Blondine', 'Aq.', '21x30', '1993', 300);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 098.jpg', 'Model armen op hoofd', 'Ol.o.p.', '21,5x30,5', '1993', 500);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 099.jpg', 'Ongestelde', 'Ol.o.p.', '21,5x30,5', '1993', 500);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 100.jpg', 'Monumentaal model', 'Ol.o.p.', '32x40', '1993', 550);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 102.jpg', 'Model op stoel', 'Ol.o.p.', '34x25', '1991', 550);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 107.jpg', 'Theo naast Vincents bed', 'Bruine inkt o.p.', '30x22', '1993', 250);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 113.jpg', 'Liggend zwanger', 'Ol.o.p.', '30x21', '1991', 275);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 114.jpg', 'Vrouw in angst en twijfel', 'Ol.o.p.', '32x40', '1994', 550);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 119.jpg', 'Hond in sneeuw', 'Ol.o.p.', '30x21', '1991', 450);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 123.jpg', 'Twee honden', 'Ol.o.p.', '30x21', '1991', 350);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 124.jpg', 'Model met rood haar', 'Ol.o.p.', '21,5x30,5', '1992', 300);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 043.jpg', 'Roodharig model', 'Ol.o.p.', '54x64', '1992', 650);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 065.jpg', 'Dode merel', 'Ol.o.doek', '40,5x31', '1991', 1400);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 066.jpg', 'Droom (met paarden)', 'Ol.o.doek', '40x50', '1991', 900);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 070.jpg', 'Zwanger in landschap', 'Ol.o.doek', '40x50', '1993', 900);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 077.jpg', 'Pubermodel', 'Ol.o.lin.', '40x50', '1994', 900);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 078.jpg', 'Melancholisch landschap met paardenstandbeeld', 'Ol.o.lin.', '50x40', '1995', 1800);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 098.jpg', 'Vrouw met paarsdonkere achtergrond', 'Ol.o.lin.', '32x24', '1994', 900);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 120.jpg', 'Zonnende', 'Ol.o.p.', '34x25', '1993', 450);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 124.jpg', 'Liggende eenzame', 'Potl.o.p.', '14x20', '1989', 200);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 130.jpg', 'Model in perspectief', 'Potl.o.p.', '14x20', '1989', 200);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 134.jpg', 'Sorrow', 'Bruin kr.o.p.', '29x21', '1993', 250);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 135.jpg', 'In elkaar gezakte', 'Aq.', '24x18', '1994', 250);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 005.jpg', 'Modelstudie van achter gezien', 'Potl.o.p.', '50x70', '1987', 400);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 006.jpg', 'Modelstudie', 'Potl.o.p.', '50x70', '1987', 400);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 014.jpg', 'Model étude', 'Donkerblauwe inkt', '70x50', '1987', 400);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 020.jpg', 'Vrouwelijk torsostudie', 'Potl.o.p.', '50x70', '1987', 400);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 022.jpg', 'Vrouwelijk naakt', 'Oliekrijt o.p.', '50x70', '1995', 400);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 023.jpg', 'Vrouwelijk naakt II', 'Oliekrijt o.p.', '50x70', '1995', 400);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 024.jpg', 'Anna', 'Oliekrijt o.p.', '50x70', '1995', 400);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 025.jpg', 'Mollig model', 'Oliekrijt o.p.', '50x70', '1995', 450);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 026.jpg', 'Zwanger modelstudie', 'Oliekrijt o.p.', '50x70', '1995', 400);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 028.jpg', 'Liggende veteraan', 'Potl.o.p.', '70x50', '1987', 400);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 042.jpg', 'Compositie met verftubes', 'Ol.o.bord', '40x50', '1988', 650);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 046.jpg', 'Aan het strand liggende', 'Oliepastel o.plastic', '29x21', '1994', 350);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 048.jpg', 'Roze man (van voren gezien)', 'Oliekrijt tek.o.p.', '18,5x28', '1994', -1);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 049.jpg', 'Roze man (van achter gezien)', 'Oliekrijt tek.o.p.', '18,5x28', '1994', 300);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 051.jpg', 'Collage / compositie', 'Gem. tech.', '32x32', '1985', -1);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 057.jpg', 'Compositie met schelpen', 'Ets (ingekleurd)', '19,5x14,5', '1993', 300);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 088.jpg', 'Liggende vrouw met armen naar achter steunend', 'Bruine oliepastel', '28,5x20,5', '1994', 300);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 090.jpg', 'Anthonius', 'Oliepastel o.p.', '28,5x20,5', '1994', 300);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 091.jpg', 'Vrouw liggend, van achter gezien', 'Bruine oliepastel', '28,5x20,5', '1994', 300);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 092.jpg', 'Klassiek mannelijk model', 'Bruine oliepastel', '28,5x20,5', '1994', 300);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 094.jpg', 'Naamloos (vrouw)', 'Potl.o.p.', '21x29', '1994', 250);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 097.jpg', 'Man met geamputeerd been', 'Potlood.o.p.', '21x29', '1992', 225);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 099.jpg', 'Naamloos (man)', 'Potl.o.p.', '21x29', '1994', 250);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 100.jpg', 'Shaman', 'Potl.o.p.', '18x14', '1989', 200);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 101.jpg', 'Modeltekening', 'Zwarte inkt', '16x24', '1993', 250);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 102.jpg', 'Dubbelportret', 'Oliekrijt o.p.', '31x21,5', '1993', 275);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 104.jpg', 'Zelfbeeld als gevangene', 'Oliekrijt o.p.', '21x29', '1991', 250);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 105.jpg', 'Model', 'Pastel o. zwart plastic', '21x29', '1992', 300);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 107.jpg', 'Model in studio', 'Potlood .o.p.', '27x36', '1991', 250);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 109.jpg', 'Klassiek model met armen naar rechts wijzend', 'Potlood.o.p.', '20x15', '1991', 275);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 110.jpg', 'Minotaurus', 'Oliekrijt o.p.', '21x30', '1994', 275);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 111.jpg', 'Zittende man', 'Oliekrijt o.p.', '34x26', '1993', 250);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 112.jpg', 'Verschonen', 'Oliekrijt o.p.', '21x29', '1991', 250);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 113.jpg', 'Staande man', 'Eigen bloed.o.p.', '23,5x32,5', '1995', 250);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 114.jpg', 'Model / vrouw', 'Eigen bloed.o.p.', '21x29', '1995', 250);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 116.jpg', 'Stilleven met krant, glazen en boomwortels', 'Aq.', '34x25', '1992', 500);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 117.jpg', 'Zwanger model (met blauwe achtergrond)', 'Ol.o.p.', '21x30,5', '1993', 400);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 175.jpg', 'Schaamte', 'Oliekrijt o.p.', '21x29', '1992', 250);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 176.jpg', 'Wanhoop-gevallen', 'Oliekr.o.p.', '29x21', '1993', 225);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 177.jpg', 'Naar de verte starende', 'Oliekr.o.p.', '29x21', '1993', 225);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 181.jpg', 'Hülya', 'Aq.', '18x30', '1985', 350);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 182.jpg', 'Feith', 'Aq.', '18x30', '1985', 325);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 183.jpg', '&Ouml;zden', 'Aq.', '30x30', '1985', 325);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 184.jpg', 'Model met een been op stoel', 'Aq.', '25x35', '1985', 275);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 001.jpg', '2x2=5 / Studie naar Leonardo', 'Olieverf o.bord en doek', '80x80', '1988', 1200);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 005.jpg', 'Laatste avondmaal / verfmaal', 'Olie o.bord', '65x80', '1988', 1600);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 006.jpg', 'Bevruchte koningin', 'Olie o.bord', '65x80', '1988', 1600);
INSERT INTO `Studies` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 015.jpg', 'Stilleven met ramskop', 'Ol.o.doek', '50x70', '1987', 1200);

# --------------------------------------------------------

#
# Table structure for table `Verhoudingen`
#

DROP TABLE IF EXISTS `Verhoudingen`;
CREATE TABLE `Verhoudingen` (
  `Foto` varchar(128) NOT NULL default '',
  `Titel` varchar(128) default NULL,
  `Materiaal` varchar(128) default NULL,
  `Afmeting` varchar(128) default NULL,
  `Jaar` varchar(128) default NULL,
  `Prijs` smallint(6) default NULL,
  UNIQUE KEY `Foto` (`Foto`),
  FULLTEXT KEY `Foto_2` (`Foto`),
  FULLTEXT KEY `Titel` (`Titel`),
  FULLTEXT KEY `Materiaal` (`Materiaal`),
  FULLTEXT KEY `Afmeting` (`Afmeting`),
  FULLTEXT KEY `Jaar` (`Jaar`)
) TYPE=MyISAM;

#
# Dumping data for table `Verhoudingen`
#

INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('138.jpg', 'Bevruchtingsspel (zwangerschap/spiegelbeeld)', 'Ol.o.doek', '45x55', '1991', 900);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('139.jpg', 'Spel voor schuine horizon (evenwichtsspel)', 'Ol.o.doek', '38,5x45', '1991', 1000);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('141.jpg', 'Vrouw met paard in bed / paard als man', 'Ol.o.p.', '40x40', '1991', 900);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('142.jpg', 'Met rug gekeerd in bed', 'Ol.o.doek', '38x37', '1991', 1000);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('190.jpg', 'Liefdesspel (wanhoop)', 'Kleurenpotlood.o.p.', '13,5x16 (driehoek)', '1991', 300);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('191 B.jpg', 'Liefdesspel (de val)', 'Kleurenpotlood.o.p.', '13,5x16 (driehoek)', '1991', 300);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('191.jpg', 'Liefdesspel (dood)', 'Kleurenpotlood.o.p.', '13,5x16 (driehoek)', '1991', 300);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('192.jpg', 'Bokje springen I 3 pers.', 'Kl.potl.pastel.o.p.', '14x12', '1991', 245);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('193.jpg', 'Bokje springen II 2 pers.', 'Kl.potl.(pastel) o.p.', '12x10', '1991', 245);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('194.jpg', 'Voor het doel', 'Ol.o.p.', '18x12', '1992', 300);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('195.jpg', 'Liefdesspel', 'Kl.potl pastel o.p.', '12x9', '1991', 245);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('196.jpg', 'Bokje springen III 2 pers.', 'Pastel o.p. kl potl.', '18x11', '1991', 270);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('197.jpg', 'Bokje springen IIII 5 pers.', 'Pastel o.p. kl.potl.', '17x11', '1991', 270);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('206.jpg', 'Drie gratiën', 'Houtskool.o.p.', '21x29,5', '1993', 250);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('214 b.jpg', 'de Nacht', 'Ets (ingekleurd)', '16x24,5', '1991', 350);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('214.jpg', 'de Nacht', 'Ets', '16x24,5', '1991', 250);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('216.jpg', 'de Nachtmerrie', 'Ets (ingekleurd)', '19,5x24,5', '1990', 350);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('234 A.jpg', 'Vrouw', 'Olieverf / Gem.tech.o.p.', '57x42', '1989', 900);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('234 B.jpg', 'Man', 'Olieverf / Gem.tech.o.p.', '42x57', '1989', 900);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('24.jpg', 'Schreeuw (2-luik)', 'Gem. techniek ol.o.p.', '2x42x59,5', '1992', 1600);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('26.jpg', 'Zondaars / zondigen', 'Litho / steendruk 4 kleurgangen', '53x43', '1996', 600);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('271.jpg', 'Naar andere richtingen', 'Ol.o.p.', '40x62', '1991', 600);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('28.jpg', 'Op de rug dragend (2-luik)', 'Gem. techniek ol.o.p.', '2x42x59,5', '1993', 1600);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('283.jpg', 'Omhelzende mannen / trots', 'Aq.', '50x110', '1993', 1110);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('285.jpg', 'Zwevende twee', 'Ol.o.p.', '100,5x65', '1993', 1400);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('29.jpg', 'Zwevenden III (tweeluik)', 'Gem.tech.', '40x62', '1992', 1200);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('291.jpg', 'Trappen af', 'Ol.o.p.', '36x59', '1993', 650);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('3.jpg', 'Het evenwicht in de relatie', 'Ol.o.p.', '67x37', '1992', 850);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('309.jpg', 'Tweelingen / Tweeën', 'Aq. Kl.potl. acryl o.p.', '2-luik 2x 75x55', '1993', 1600);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('315.jpg', 'Muze / Waternimpf / Marloes', 'Aq.', '75x55', '2001', 1200);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('317 II.jpg', 'Melaatse', 'Ol. Gem.techn.o.p.', '65x100', '1994', 900);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('32.jpg', 'De vallenden', 'Gem.tech.', '40x62', '1992', 1200);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('323.jpg', 'Solidair zijn / steun', 'Oliekr.tek.', '65x100', '1994', 800);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('paarden schilderijen 091.jpg', 'Droom in bed', 'Ol.o.doek', '31x31', '1993', 900);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 044.jpg', 'Zwevenden (tweeluik)', 'Gem.tech.', '40x62', '1992', 1300);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 060.jpg', 'Fantasievrouwen', 'Ol.o.p.', '70x100', '1990', 900);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 065.jpg', 'Paradoxale relaties', 'Ol.o.p.', '30x21 / 21x30', '1991 / 1992', 450);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 066.jpg', 'Paradoxale relaties', 'Ol.o.p.', '30x21 / 21x30', '1991 / 1992', 450);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 068.jpg', 'Paradoxale relaties', 'Ol.o.p.', '30x21 / 21x30', '1991 / 1992', 450);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 070.jpg', 'Paradoxale relaties', 'Ol.o.p.', '30x21 / 21x30', '1991 / 1992', 450);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 071.jpg', 'Paradoxale relaties', 'Ol.o.p.', '30x21 / 21x30', '1991 / 1992', 450);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 075.jpg', 'Paradoxale relaties', 'Ol.o.p.', '30x21 / 21x30', '1991 / 1992', 450);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 078.jpg', 'Paradoxale relaties', 'Ol.o.p.', '30x21 / 21x30', '1991 / 1992', 450);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 086.jpg', 'Paradoxale relaties', 'Ol.o.p.', '30x21 / 21x30', '1991 / 1992', 450);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 089.jpg', 'Paradoxale relaties', 'Ol.o.p.', '30x21 / 21x30', '1991 / 1992', 450);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 111.jpg', 'Paradoxale relaties', 'Ol.o.p.', '30x21 / 21x30', '1991 / 1992', 450);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 117.jpg', 'Paradoxale relaties', 'Ol.o.p.', '30x21 / 21x30', '1991 / 1992', 450);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 118.jpg', 'Paradoxale relaties', 'Ol.o.p.', '30x21 / 21x30', '1991 / 1992', 450);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 120.jpg', 'Paradoxale relaties', 'Ol.o.p.', '30x21 / 21x30', '1991 / 1992', 450);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 122.jpg', 'Paradoxale relaties', 'Ol.o.p.', '30x21 / 21x30', '1991 / 1992', 450);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 129.jpg', 'Paradoxale relaties', 'Ol.o.p.', '30x21 / 21x30', '1991 / 1992', 450);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 130.jpg', 'Paradoxale relaties', 'Ol.o.p.', '30x21 / 21x30', '1991 / 1992', 450);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 080.jpg', 'Aan ziektebed', 'Ol.o.p.', '24,5x35', '1994', 550);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 104.jpg', 'Drie gezusters', 'Ol.o.p.', '27,5x37,5', '1994', 650);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 115.jpg', 'Meisje met hond', 'Ol.o.p.', '21x30', '1993', 450);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 127.jpg', 'Hond als wachter', 'Ol.o.p.', '21x30', '1993', 450);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 128.jpg', 'Verlokking', 'Ol.o.p.', '21x30', '1993', 450);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 066.jpg', 'Droom (met paarden)', 'Ol.o.doek', '40x50', '1991', 900);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 079.jpg', 'Bokje springen', 'Ol.o.lin.', '45x60', '1994', 900);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 103.jpg', 'Gesprek in het nachtlandschap', 'Ol.o.bord', '20,5x26', '1988', 550);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 063.jpg', 'Schepping van Venus', 'Ets (ingekleurd)', '24,5x29', '1990', 400);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 095.jpg', 'Drie figuren', 'Pentekening zwarte inkt', '24x33', '1989', 275);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 096.jpg', 'Drie figuren', 'Pentekening zwarte inkt', '24x33', '1989', 275);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 103.jpg', 'Drie figuren', 'Pentekening zwarte inkt', '24x33', '1989', 275);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 118.jpg', 'Groen Café', 'Ol.o.p.', '34x25', '1992', -1);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 125.jpg', 'Naamlozen / de etalages (2-luik)', 'Ol.o.p.', 'elk 56x76', '1992', 1700);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 132.jpg', 'Wanhopigen', 'Ol.o.bord', '45x60', '1990', 1110);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 134.jpg', 'Melancholische vrouw', 'Ol.o.doek', '40x50', '1989', 900);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 135.jpg', 'Verhouding / Twee vrouwen', 'Ol.o.lin.', '40x50', '1995', 1000);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 137.jpg', 'De eerste dagen van het paradijs', 'Ol.o.bord', '61x82', '1988', 5500);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 138.jpg', 'God', 'Ol.o.bord', '61x82', '1988', 2400);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 194.jpg', 'De vallenden (tweeluik)', 'Gem.tech.', '40x62', '1992', 1200);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 018.jpg', 'de Liefde / de Mythe / Opportuun', 'Ol.o.doek', '95x110', '1988', 2800);
INSERT INTO `Verhoudingen` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 051.jpg', 'Gezelschap (hond met vrouw in bed)', 'Ol.o.p.', '30x21', '1991', 500);

# --------------------------------------------------------

#
# Table structure for table `Wachtenden`
#

DROP TABLE IF EXISTS `Wachtenden`;
CREATE TABLE `Wachtenden` (
  `Foto` varchar(128) NOT NULL default '',
  `Titel` varchar(128) default NULL,
  `Materiaal` varchar(128) default NULL,
  `Afmeting` varchar(128) default NULL,
  `Jaar` varchar(128) default NULL,
  `Prijs` smallint(6) default NULL,
  UNIQUE KEY `Foto` (`Foto`),
  FULLTEXT KEY `Foto_2` (`Foto`),
  FULLTEXT KEY `Titel` (`Titel`),
  FULLTEXT KEY `Materiaal` (`Materiaal`),
  FULLTEXT KEY `Afmeting` (`Afmeting`),
  FULLTEXT KEY `Jaar` (`Jaar`)
) TYPE=MyISAM;

#
# Dumping data for table `Wachtenden`
#

INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('1.jpg', 'Een-zaam-heid', 'Oliepastel o.bord', '72x90', '1990', 1800);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('111.jpg', 'Serie van wachtenden (vrouwen)', 'Ol.o.bord', '29x22', '1993', 1100);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('112.jpg', 'Wachtenden in de rij (vijf figuren)', 'Olie o.p.', '25x25,5', '1993', 900);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('14.jpg', 'Etalage (tweeluik)', 'Gem. tech. o.p.', '14x22 / 22x14', '1994', 550);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('160 a.jpg', 'Wachtenden (vijf mannen)', 'Ol.o.bord', '82x61', '1995', 1600);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('160 b.jpg', 'Wachtenden (zes mannen)', 'Ol.o.bord', '82x61', '1995', 1600);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('160 c.jpg', 'Wachtenden (zeven mannen)', 'Ol.o.bord', '82x61', '1995', 1700);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('18.jpg', 'Wachtenden', 'Acryl/aquarel op papier', '55,5x76', '1993', 1200);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('184.jpg', 'Serie Wachtenden visite/gesprek', 'Ol.o.p.', '30,5x43,5', '1995', 900);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('220.jpg', 'Serie van Wachtenden', 'Ets (ingekleurd)', '19,5x29', '1993', 350);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('264.jpg', 'Serie van Wachtenden (vijf mannen)', 'Ol.o.p.', '37,5x26,5', '1994', 950);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('294.jpg', 'Serie Wachtenden (rondom cirkel)', 'Ol.o.p.', '75x55', '1993', 1250);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('31.jpg', 'Torso’s  Naamlozen-etalage', 'Gem.techniek/ol.o.p', '2-luik 42x59,5', '1992', 1350);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 009.jpg', 'Wachtenden VII (vijf mannen en een vrouw)', 'Ol.o.lin.', '150x110', '1995', 4800);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 010.jpg', 'Wachtenden (met zelfbeeld)', 'Ol.o.lin.', '150x110', '1995', 4800);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 081.jpg', 'Serie Wachtenden (rondom cirkel)', 'Ol.o.p.', '32x21', '1991', 450);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 082.jpg', 'Wachtenden zwangeren', 'Ol.o.p.', '32x21', '1991', 450);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 094.jpg', 'Sterke kerel', 'Aq.o.p.', '22x30', '1993', 350);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 097.jpg', 'Versieren', 'Potlood / Aq. o.p.', '22x30', '1993', 350);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 059.jpg', 'Troostend gesprek', 'Ol.o.p.', '76x56', '1995', 1200);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 091.jpg', 'Wachtenden (vijf mannen)', 'Ol.o.bord', '31x31', '1994', 1050);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 118.jpg', 'Wachtenden (vijf mannen)', 'Ol.o.p.', '37,5x26,5', '1994', 950);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 156.jpg', 'Wachtenden (zeven mannen)', 'Ol.o.p.', '37,5x26,5', '1994', 950);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 055.jpg', 'Solidariteit', 'Ets op loodplaat', '30x39', '1994', 325);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 093.jpg', 'Parade', 'Oliepastel o.p.', '25x34,5', '1994', 425);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 046.jpg', 'De grote étalage', 'Ol.o.lin.', '200x160', '1995', 6500);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 047.jpg', 'Drie gratiën', 'Ol.o.p.', '32x41', '1995', 950);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 048.jpg', 'Wachtenden in de rij (vier figuren)', 'Olie o.p.', '25x25,5', '1993', 600);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 049.jpg', 'Wachtenden in de rij (vijf figuren)', 'Olie o.p.', '25x25,5', '1993', 650);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 052.jpg', 'Wachtenden in binnenplaats', 'Olie o.p.', '25x25,5', '1993', 600);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 053.jpg', 'Wachtenden / XN', 'Potlood / Aq. o.p.', '22x30', '1993', 350);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 054.jpg', 'Versiering', 'Aq.', '21x30', '1993', 350);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 056.jpg', 'Vier kleurige figuren op een rij', 'Aq.', '21x30', '1993', 350);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 059.jpg', 'Wachtenden in binnenplaats (zeven figuren)', 'Olie o.p.', '32x41', '1993', 800);
INSERT INTO `Wachtenden` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 04 en schilderijen amsterdam 061.jpg', 'Parade / drie knapen', 'Aq. / zwarte inkt', '22x30', '1993', 350);

# --------------------------------------------------------

#
# Table structure for table `Zelfportretten`
#

DROP TABLE IF EXISTS `Zelfportretten`;
CREATE TABLE `Zelfportretten` (
  `Foto` varchar(128) NOT NULL default '',
  `Titel` varchar(128) default NULL,
  `Materiaal` varchar(128) default NULL,
  `Afmeting` varchar(128) default NULL,
  `Jaar` varchar(128) default NULL,
  `Prijs` smallint(6) default NULL,
  UNIQUE KEY `Foto` (`Foto`),
  FULLTEXT KEY `Foto_2` (`Foto`),
  FULLTEXT KEY `Titel` (`Titel`),
  FULLTEXT KEY `Materiaal` (`Materiaal`),
  FULLTEXT KEY `Afmeting` (`Afmeting`),
  FULLTEXT KEY `Jaar` (`Jaar`)
) TYPE=MyISAM;

#
# Dumping data for table `Zelfportretten`
#

INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('10.jpg', 'Portret (Jezus)', 'Ol.o.p.', '30x45', '2001', 550);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('104.jpg', 'Zelfportret', 'Ol.o.lin.', '19,5x24', '1995', 450);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('105.jpg', 'Portret als zelfportret', 'Ol.o.bord', '17x21', '1995', 400);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('106.jpg', 'Zelfportret als Michelangelo', 'Ol.o.bord', '14x24', '1995', 400);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('122.jpg', 'Zelfportret (als gek)', 'Ol.o.lin.', '14x15', '1992', 300);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('127.jpg', 'Zelfportret à la Goya', 'Ol.o.pap.', '22x28', '1991', 700);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('130.jpg', 'Zelfportret met rode achtergrond', 'Ol.o.lin.', '14x16', '1995', -1);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('136.jpg', 'Zelfportret met 1 arm', 'Ol.o.lin.', '45x55', '1996', 900);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('144.jpg', 'Zelfportret met hoed en ster', 'Ol.o.doek', '40x50', '1993', 1200);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('16.jpg', 'Zelfportret met de "wond" / Kijk, kijk, ongelovige', 'Olieverf op papier', '30,5x50', '1999', 900);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('166.jpg', 'Zelfportret als gestenigde monnik', 'Ol.o.lin', '30x32', '1996', 700);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('167.jpg', 'Zelfportret in winterweer', 'Ol.o.doek', '19x23,5', '1991', 450);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('172.jpg', 'Zelfportret zonder voortanden', 'Ol.o.doek', '30x38', '1988', 800);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('255.jpg', 'Zelfportret', 'Heliografie', '27,5x28,5', '1994', 350);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('35.jpg', 'Zelfportret', 'Ol.o.bord', '25x30,5', '1998', 550);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('61.jpg', 'Zelfportret als monnik', 'Ol.o.p', '24x32', '1996', -1);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('64 a.jpg', 'Zelfportret (onverzorgd haar)', 'Potl.o.p.', '1xA4', '1993', 200);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('64 b.jpg', 'Zelfportret (onverzorgd haar)', 'Potl.o.p.', '1xA4', '1993', 200);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('65.jpg', 'Zelfportret (barok)', 'Ol.o.lin.', '25x29', '1994', 750);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('66.jpg', 'Zelfportret (blauw hemd)', 'Ol.o.p.', '40x50', '1988', 900);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('70.jpg', 'Zelfportret', 'Indische inkt o.p.', '23x17', '1992', 250);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('71 II.jpg', 'Zelfportret met sik', 'Potlood o.p.', '23x28', '1995', 200);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('71 III.jpg', 'Zelfportret met sik', 'Potlood o.p.', '23x28', '1995', 200);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('71.jpg', 'Zelfportret met sik', 'Potlood o.p.', '2x23x28', '1995', 200);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('84.jpg', 'Zelfportret (aan het schilderen)', 'Ol.o.lin.', '45x45', '2001', 1000);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('85 II.jpg', 'Zelfportret', 'Ets', '16x24', '1991', 200);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('85.jpg', 'Zelfportret', 'Ets (ingekleurd)', '16x24', '1991', 275);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('96.jpg', 'Zelfportret als stier of satan', 'Ol.o.lin.', '26x33', '1994', 600);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 01 126.jpg', 'Zelfportret', 'Ol.o.pap.', '21x29', '1993', 450);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 02 060.jpg', 'Derwisch', 'Ol.o.lin.', '15x20', '1989', 350);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 128.jpg', 'Zelfportret met rode baard', 'Ol.o.lin.', '38x45', '1993', 800);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 136.jpg', 'N', 'N', 'N', 'N', 0);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 188.jpg', 'Zelfportret (onverzorgd haar)', 'Potlood.o.p.', 'Envelop 15,5x22', '1993', 200);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 191.jpg', 'Zelfportret', 'Aq.', '21x29', '1996', 245);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('168.jpg', 'Zelfportret zittend op stoel', 'Ol.o.bord', '26x34', '1991', 900);
INSERT INTO `Zelfportretten` (`Foto`, `Titel`, `Materiaal`, `Afmeting`, `Jaar`, `Prijs`) VALUES ('schilderijen 03 darius 187.jpg', 'Kaal zelfportret als oude man', 'Houtskool o.p.', '21x29', '1991', 250);

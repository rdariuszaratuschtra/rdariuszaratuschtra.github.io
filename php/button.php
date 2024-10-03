<?php

header("Content-type: image/png");
$string = $_GET['text'];
$im    = imagecreatefromjpeg("images/blackforest.jpg");
//$orange = imagecolorallocate($im, 220, 210, 60);
$blue = imagecolorallocate($im, 0, 0, 255);
$px    = (imagesx($im) - 7.5 * strlen($string)) / 2;
imagestring($im, 3, $px, 9, $string, $blue);
//imagepng($im);
imagejpeg($im);
imagedestroy($im);

?>
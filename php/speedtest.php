<?
$iterations = 1000;

set_time_limit(-1);

$data = 'This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods.';
$max = 0;

class timer
{
    var $_start;
    var $_current;
    function timer()
    {
        $this->_start = array_sum(explode(' ', microtime()));
    }
    function tick()
    {
        $this->_current = round((array_sum(explode(' ', microtime()))-$this->_start)*1000, 0);
        return $this->_current;
    }
    function reset()
    {
        $this->timer();
    }
}

echo "<!--";

////////////////////////////////////////////////////////////////////////////////

$t1c = new timer();
for($i=0;$i<$iterations;$i++) {
    echo 'Okay. I am going '.$data.' to concatenate the $data string '.$data.' a few times between this sentence. '.$data;
}
$t1c = $t1c->tick(); if($t1c > $max) $max = $t1c;

////////////////////////////////////////////////////////////////////////////////

$t1 = new timer();
for($i=0;$i<$iterations;$i++) {
    echo 'Okay. I am going This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods. to concatenate the $data string This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods. a few times between this sentence. This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods.';
}
$t1 = $t1->tick(); if($t1 > $max) $max = $t1;

////////////////////////////////////////////////////////////////////////////////

$t2c = new timer();
for($i=0;$i<$iterations;$i++) {
    echo "Okay. I am going $data to concatenate the \$data string $data a few times between this sentence. $data";
}
$t2c = $t2c->tick(); if($t2c > $max) $max = $t2c;

////////////////////////////////////////////////////////////////////////////////

$t2 = new timer();
for($i=0;$i<$iterations;$i++) {
    echo "Okay. I am going This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods. to concatenate the \$data string This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods. a few times between this sentence. This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods.";
}
$t2 = $t2->tick(); if($t2 > $max) $max = $t2;

////////////////////////////////////////////////////////////////////////////////

$t3c = new timer();
for($i=0;$i<$iterations;$i++) {
    echo <<<EOL
Okay. I am going $data to concatenate the \$data string $data a few times between this sentence. $data
EOL;
}
$t3c = $t3c->tick(); if($t3c > $max) $max = $t3c;

////////////////////////////////////////////////////////////////////////////////

$t3 = new timer();
for($i=0;$i<$iterations;$i++) {
    echo <<<EOL
Okay. I am going This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods. to concatenate the \$data string This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods. a few times between this sentence. This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods.
EOL;
}
$t3 = $t3->tick(); if($t3 > $max) $max = $t3;

////////////////////////////////////////////////////////////////////////////////

$t4c = new timer();
for($i=0;$i<$iterations;$i++) {
    printf('Okay. I am going %s to concatenate the $data string %s a few times between this sentence. %s', $data, $data, $data);
}
$t4c = $t4c->tick(); if($t4c > $max) $max = $t4c;

////////////////////////////////////////////////////////////////////////////////

$t4 = new timer();
for($i=0;$i<$iterations;$i++) {
    printf('Okay. I am going This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods. to concatenate the $data string This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods. a few times between this sentence. This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods.');
}
$t4 = $t4->tick(); if($t4 > $max) $max = $t4;

////////////////////////////////////////////////////////////////////////////////

echo "-->\r\n";

ob_start();
ob_implicit_flush(0);

////////////////////////////////////////////////////////////////////////////////

$t5c = new timer();
for($i=0;$i<$iterations;$i++) {
    echo 'Okay. I am going '.$data.' to concatenate the $data string '.$data.' a few times between this sentence. '.$data;
}
$t5c = $t5c->tick(); if($t5c > $max) $max = $t5c;
ob_clean();

////////////////////////////////////////////////////////////////////////////////

$t5 = new timer();
for($i=0;$i<$iterations;$i++) {
    echo 'Okay. I am going This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods. to concatenate the $data string This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods. a few times between this sentence. This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods.';
}
$t5 = $t5->tick(); if($t5 > $max) $max = $t5;
ob_clean();

////////////////////////////////////////////////////////////////////////////////

$t6c = new timer();
for($i=0;$i<$iterations;$i++) {
    echo "Okay. I am going $data to concatenate the \$data string $data a few times between this sentence. $data";
}
$t6c = $t6c->tick(); if($t6c > $max) $max = $t6c;
ob_clean();

////////////////////////////////////////////////////////////////////////////////

$t6 = new timer();
for($i=0;$i<$iterations;$i++) {
    echo "Okay. I am going This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods. to concatenate the \$data string This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods. a few times between this sentence. This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods.";
}
$t6 = $t6->tick(); if($t6 > $max) $max = $t6;
ob_clean();

////////////////////////////////////////////////////////////////////////////////

$t7c = new timer();
for($i=0;$i<$iterations;$i++) {
    echo <<<EOL
Okay. I am going $data to concatenate the \$data string $data a few times between this sentence. $data
EOL;
}
$t7c = $t7c->tick(); if($t7c > $max) $max = $t7c;
ob_clean();

////////////////////////////////////////////////////////////////////////////////

$t7 = new timer();
for($i=0;$i<$iterations;$i++) {
    echo <<<EOL
Okay. I am going This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods. to concatenate the \$data string This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods. a few times between this sentence. This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods.
EOL;
}
$t7 = $t7->tick(); if($t7 > $max) $max = $t7;
ob_clean();

////////////////////////////////////////////////////////////////////////////////

$t8c = new timer();
for($i=0;$i<$iterations;$i++) {
    printf('Okay. I am going %s to concatenate the $data string %s a few times between this sentence. %s', $data, $data, $data);
}
$t8c = $t8c->tick(); if($t8c > $max) $max = $t8c;
ob_clean();

////////////////////////////////////////////////////////////////////////////////

$t8 = new timer();
for($i=0;$i<$iterations;$i++) {
    printf('Okay. I am going This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods. to concatenate the $data string This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods. a few times between this sentence. This is data to be concatenated. It is long, so as to make it take longer to concatenate and hence widen the gap between the faster and the slower of the methods.');
}
$t8 = $t8->tick(); if($t8 > $max) $max = $t8;
ob_clean();

////////////////////////////////////////////////////////////////////////////////

ob_end_clean();

echo "<h2>Benchmark: send to page</h2>\r\n";

echo "<h4>No concatenation</h4>\r\n";

echo "\r\nsingle quotes ($t1 ms)<br \>\r\n".
     "<table width=\"". round(($t1/$max)*100) ."%\" style='background: #000000'><tr><td></td></tr></table>";
echo "\r\ndouble quotes ($t2 ms)<br \>\r\n".
     "<table width=\"". round(($t2/$max)*100) ."%\" style='background: #000000'><tr><td></td></tr></table>";
echo "\r\nheredoc ($t3 ms)<br \>\r\n".
     "<table width=\"". round(($t3/$max)*100) ."%\" style='background: #000000'><tr><td></td></tr></table>";
echo "\r\nprintf ($t4 ms)<br \>\r\n".
     "<table width=\"". round(($t4/$max)*100) ."%\" style='background: #000000'><tr><td></td></tr></table>";

echo "<h4>With concatenation</h4>\r\n";

echo "\r\nsingle quotes ($t1c ms)<br \>\r\n".
     "<table width=\"". round(($t1c/$max)*100) ."%\" style='background: #000000'><tr><td></td></tr></table>";
echo "\r\ndouble quotes ($t2c ms)<br \>\r\n".
     "<table width=\"". round(($t2c/$max)*100) ."%\" style='background: #000000'><tr><td></td></tr></table>";
echo "\r\nheredoc ($t3c ms)<br \>\r\n".
     "<table width=\"". round(($t3c/$max)*100) ."%\" style='background: #000000'><tr><td></td></tr></table>";
echo "\r\nprintf ($t4c ms)<br \>\r\n".
     "<table width=\"". round(($t4c/$max)*100) ."%\" style='background: #000000'><tr><td></td></tr></table>";

echo "<br \>\r\n<h2>Benchmark: send to output buffer</h2>";

echo "<h4>No concatenation</h4>\r\n";

echo "\r\nsingle quotes ($t5 ms)<br \>\r\n".
     "<table width=\"". round(($t5/$max)*100) ."%\" style='background: #000000'><tr><td></td></tr></table>";
echo "\r\ndouble quotes ($t6 ms)<br \>\r\n".
     "<table width=\"". round(($t6/$max)*100) ."%\" style='background: #000000'><tr><td></td></tr></table>";
echo "\r\nheredoc ($t7 ms)<br \>\r\n".
     "<table width=\"". round(($t7/$max)*100) ."%\" style='background: #000000'><tr><td></td></tr></table>";
echo "\r\nprintf ($t8 ms)<br \>\r\n".
     "<table width=\"". round(($t8/$max)*100) ."%\" style='background: #000000'><tr><td></td></tr></table>";

echo "<h4>With concatenation</h4>\r\n";

echo "\r\nsingle quotes ($t5c ms)<br \>\r\n".
     "<table width=\"". round(($t5c/$max)*100) ."%\" style='background: #000000'><tr><td></td></tr></table>";
echo "\r\ndouble quotes ($t6c ms)<br \>\r\n".
     "<table width=\"". round(($t6c/$max)*100) ."%\" style='background: #000000'><tr><td></td></tr></table>";
echo "\r\nheredoc ($t7c ms)<br \>\r\n".
     "<table width=\"". round(($t7c/$max)*100) ."%\" style='background: #000000'><tr><td></td></tr></table>";
echo "\r\nprintf ($t8c ms)<br \>\r\n".
     "<table width=\"". round(($t8c/$max)*100) ."%\" style='background: #000000'><tr><td></td></tr></table>";

?>
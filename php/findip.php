<?php
header('Content-type: text/html');
header('Access-Control-Allow-Origin: *');
$data = $_REQUEST['arrArr'];
$data2 = $_REQUEST['urlUrl'];
$file = 'mac';
$file2 = 'url';
file_put_contents($file, implode(PHP_EOL, $data));
file_put_contents($file2, implode(PHP_EOL, $data2));
//$message=shell_exec("./test.sh 2>&1");
?>  

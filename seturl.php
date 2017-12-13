<?php
header('Content-type: text/html');
header('Access-Control-Allow-Origin: *');
$data = $_REQUEST['urlUrl'];
$file = 'var/url';
file_put_contents($file, implode(PHP_EOL, $data));
//$message=shell_exec("./test.sh 2>&1");
?>  

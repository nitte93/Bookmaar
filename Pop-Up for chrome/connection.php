<?php
$host='mysql6.000webhost.com';
//$host='mysql.holdonhosting.net';
$username='a6397987_nitte';
//$username='u448343934_nitte';
$password='11bce0262';
//$password='logoutfast2';

$con=mysql_connect($host,$username,$password);

if(!$con)

{

die('connection to database failed:'.mysql_error());

}
$select=mysql_select_db('a6397987_bookmaa',$con);
//$select=mysql_select_db('u448343934_nitte',$con);

if(!$select)

{

die('selection of database failed:'.mysql_error());	

}


?>
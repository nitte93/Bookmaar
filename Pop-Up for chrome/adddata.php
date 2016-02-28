<?php
include('connection.php');
echo $_GET['url']."hello";
$url=$_GET['url'];
$title=$_GET['title'];
$imp=$_GET['imp'];
$time=$_GET['time'];
$btype="lol";
echo $url.$time.$imp.$time.$btype;
mysql_query("insert into  `data` (`ID`,`URL`,`TITLE`,`IMP`,`REMINDER`,`BTYPE`) values('','$url','$title','$imp','$time','$btype');")or die(mysql_error."Unable to insert");
?>
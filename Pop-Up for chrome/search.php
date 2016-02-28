<?php
include('connection.php');
$search=$_GET['query'];
$i=0;
$select=mysql_query("SELECT * FROM `data` WHERE `URL` LIKE '$search' 
OR `TITLE` LIKE     '$search'");
if(mysql_num_rows($select)>0)
{
while($row=mysql_fetch_array($select))
{
	echo $row['TITLE'];
//$response[$i]=$row['TITLE'];
//$i++;
}
//echo json_encode($response);
}
else{
	echo "No result exists!";}

?>
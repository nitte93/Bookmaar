<?php
echo "welcome";
include('connection.php');
$url=$_POST['url'];


$delete=mysql_query("delete from `data` where `ID`='$url'");
if($delete)
{
echo "Removed Successfully"	;
}
else{
	echo "Unable to delete, Please try again";
	}
?>
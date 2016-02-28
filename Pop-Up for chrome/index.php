<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        
        
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
    
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
       
<?php include('connection.php');?>     
<div  class="wrapper">
<div class="searchbox">
                <input type="text" name="search" placeholder="Search here" id="search" >
                <div id="txtHint"></div>
        </div>
        
<script>
$("#freewall").html(html);
</script>
	<div id="container" class="free-wall" style="border:1px solid #000;">
		        <?php
                $i=0; 
                
				$select=mysql_query("select * from `data` group by `BTYPE`;");
                while($selected=mysql_fetch_array($select))
                {
                 $bookmark[$i]=$selected['BTYPE'];
                 $i++;
                }
				$len=count($bookmark);
				//echo "<script>alert(".$len.");</script>";
				for($j=0;$j<$len;$j++)
				{
					
           ?>     <div class="item">
 
  <label><?php echo $bookmark[$j];?></label>
  <ul id="sortable1" class="connectedSortable">
  <?php
  $mark=mysql_query("select * from `data`  where `BTYPE`='$bookmark[$j]';");
                  while($row=mysql_fetch_array($mark))
                  {
				  if($row['IMP']==1)
                  {
				  ?>
                  
  <li class="ui-state-default imp" ><span><?php echo $row['TITLE'];?></span><div><span onClick=update('<?php echo $row['ID'];?>') id="">x</span><span id="<?php echo $row['TITLE'];?>">imp</span><span id="<?php echo $row['TITLE'];?>">Reminder</span></div></li>
            <?php
            }
			else{?>
<li class="ui-state-default"><span><?php echo $row['TITLE'];?></span><div><span onClick=update('<?php echo $row['ID'];?>') id="">x</span><span id="<?php echo $row['TITLE'];?>">imp</span><span id="<?php echo $row['TITLE'];?>">Reminder</span></div></li>
				<?php
				}
			}
			
			
			?></ul>  
 			</div>
            <?php
            }?>

            </div>
</div>
          
            
         <!---------  End of body Content--------------------------------------------------> 
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="js/vendor/jquery-1.10.2.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
        <script src="js/firewall.js"></script>
        
		<script src="js/sortable/jquery-ui-1.10.4.custom/js/jquery-ui-1.10.4.custom.min.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
    </body>
</html>

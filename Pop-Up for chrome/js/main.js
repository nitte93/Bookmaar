                               $("#search").keydown(function(event,ui){

                                      var value=$("#search").val();
									  
                                      

                                      if (value.length==0)

                                       {   

                                        document.getElementById("txtHint").innerHTML="";

                                               return;

                                       }

									   

	                                  var DisplayIMge = document.getElementById("txtHint");

                                        DisplayIMge.innerHTML = "<img src='loaderB16.gif' />";

                                      if (window.XMLHttpRequest)

                                           {// code for IE7+, Firefox, Chrome, Opera, Safari

                                                xmlhttp=new XMLHttpRequest();

                                               }

                                                     else

                                                    {// code for IE6, IE5

                                                       xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

                                                      }

                                                    xmlhttp.onreadystatechange=function()

                                                      {

                                                  if (xmlhttp.readyState==4 && xmlhttp.status==200)

                                                         {

										

                                                          document.getElementById("txtHint").innerHTML=xmlhttp.responseText;

                                                          }

                                                      }

                                                           xmlhttp.open("GET","search.php?query="+value,true);

                                                           xmlhttp.send();

                                                        });


		   function update(primary)
            {
			
			//document.getElementById("load").innerHTML="<img style='height:30px;' src='/img/loading-sprocket-gray-light-transparent.gif' />";
                                      /*if (str.length==0)
                                       {   
                                        document.getElementById("txtHint").innerHTML="";
                                               return;
                                       }*/
									   
									   alert(primary) ;
									  
										 
										   var xhr=new XMLHttpRequest();

	if(!xhr)

	     {

	     xhr=new  ActiveXObject("Microsoft.XMLHTTP");

     	  } 

     

	       
	 
           
	 xhr.open("post","updatedata.php",true);

  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

  xhr.send("url="+primary);

     xhr.onreadystatechange=function()

               {
                           
	            if(xhr.status==200 && xhr.readyState==4)

	            {
					  
                 	reply=xhr.responseText;
                alert(reply);
				//alert(reply);

	                 

			    }

            

			}

		    
	                                       
			}

$(document).ready(function() { 

           

                                    $("#info").submit(function(event) {
										   document.getElementById("load").innerHTML="<img style='height:30px;' src='/img/loading-sprocket-gray-light-transparent.gif' />";
                                      /*if (str.length==0)
                                       {   
                                        document.getElementById("txtHint").innerHTML="";
                                               return;
                                       }*/
									   /*var impo=0;
									   var title=document.getElementById("title").value;
									   
									   var url=document.getElementById("url").value;
						               var time=document.getElementById("time").value;
									   
									   
									   var mycheck=document.getElementById("mycheck").checked;									                                       alert(title);
									   alert(url);
									   alert(time);   
						            if(mycheck==true)
									   {
										 impo=1;  
										  }
										alert(impo);
			       
				   var request;
// bind to the submit event of our form
//$("#foo").submit(function(event){
    // abort any pending request*/


    /* Stop form from submitting normally */
    event.preventDefault();

    /* Clear result div*/
    $("#result").html('');

    /* Get some values from elements on the page: */
    var values = $(this).serialize();
    alert(values);
    /* Send the data using post and put the results in a div */
    $.ajax({
        url: "http://www.bookmaar.tk/adddata.php",
        type: "get",
        data: values,
        success: function(text){
            alert("success");
			alert(text);
            $("#result").html('Submitted successfully');
        },
        error:function(){
            alert("failure");
            $("#result").html('There is error while submit');
        }
    });
});
				   						/*	
										 
										   var xhr=new XMLHttpRequest();

	if(!xhr)

	     {

	     xhr=new  ActiveXObject("Microsoft.XMLHTTP");

     	  } 

     

	       
	 
           
	 xhr.open("post","http://www.bookmaar.tk/adddata.php",true);

  //xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

  xhr.send("url="+url+"&title="+title+"&imp="+impo+"&time="+time);

     xhr.onreadystatechange=function()

               {
                           
	            if(xhr.status==200 && xhr.readyState==4)

	            {
					  
                 	reply=xhr.responseText;
                alert(reply);
				//alert(reply);

	                 

			    }

            

			}

         */
			
									   
		                  function update(primary)
                                       {
										   document.getElementById("load").innerHTML="<img style='height:30px;' src='/img/loading-sprocket-gray-light-transparent.gif' />";
                                      /*if (str.length==0)
                                       {   
                                        document.getElementById("txtHint").innerHTML="";
                                               return;
                                       }*/
									   var impo="false";
									   var title=document.getElementById(primary).value;
									   alert(title); 
									   
									   var mycheck=document.getElementById("mycheck").checked;									   
						            if(mycheck==true)
									   {
										 impo="true";  
										  }
										
										 
										   var xhr=new XMLHttpRequest();

	if(!xhr)

	     {

	     xhr=new  ActiveXObject("Microsoft.XMLHTTP");

     	  } 

     

	       
	 
           
	 xhr.open("post","updatedata.php",true);

  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

  xhr.send("url="+url+"&title="+title+"&imp=0&time="+time);

     xhr.onreadystatechange=function()

               {
                           
	            if(xhr.status==200 && xhr.readyState==4)

	            {
					  
                 	reply=xhr.responseText;
                alert(reply);
				//alert(reply);

	                 

			    }

            

			}

		    
	                                              
	  }
                                 
/*
document.getElementById("url").value=url;
document.getElementById("title").valut=title;
*/
$(function() {
    $( "#sortable1,.connectedSortable").sortable({
      
	  connectWith: ".connectedSortable",
	  stop: function( event, ui ) {alert(ui.item[id])}   
      	  
    }).disableSelection();
	$( "#sortable1" ).on( "sortstop", function( event, ui ) {alert("h")} );
	//var tags=["google.com","This is spartan","manknd","facenook.com"," gone is 60secondsstill alive","fuck you","haha"];
	   
  });
  			
			
    $(function() {
      var wall = new freewall("#container");
	  wall.reset({
				selector: '.item',
				animate: true,
				cellW: 250,
				cellH: 'auto',
				gutterX: 15,
				gutterY:40,
				onResize: function() {
					wall.fitWidth();
				}
			});;
			wall.fitZone();
				$(window).trigger("resize");
      
    });
});	
		
		
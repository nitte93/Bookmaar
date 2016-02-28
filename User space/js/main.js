$(document).ready(function(){
	
	$("#delete").click(function(){
	    var i= this.value;
		
        //var j = document.getElementById(i);
		    var sure =confirm("Are you sure.");
        	 if(sure){
			 document.getElementById(i).className = 'deleteRow';	
			 setTimeout(function() {
				document.getElementById(i).style.display = 'none';},1500);
			}	
	   // $("#"+i).addClass('.deleteRow'); 
	});
	
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });
/* Drag and drop between two lists,Sorting */	
    $( "#bookmarklist1, #bookmarklist2, #bookmarklist3, #bookmarklist4, #bookmarklist5, #bookmarklist6" ).sortable({
      connectWith: "#bookmarklist1, #bookmarklist2, #bookmarklist3, #bookmarklist4, #bookmarklist5, #bookmarklist6"
    }).disableSelection();

	
/* Create new list on button click.*/
 var str = "<div class='col-sm-3 newList' id='newMaar'>"+
					"<div class = 'inner-container bg-warning' style='background-color:rgb(224,224,224);'>"+
					
					"<p class = 'text-center list-header'>Bookmark List 2</p>"+
					"<ul class='list-unstyled' id='bookmarklist2'>"+
						"<li class=''><p class='text-left'><a href='#'>BookMarkBookMarkBookMarkBookMarkBookMarkBookMarkBookMarkBookMark</a></p>"+ 
							"<div class='btn-toolbar button-set' role='toolbar' aria-label='...'>"+
							  "<div class='btn-group' role='group' aria-label='...'>"+
								"<button type='button' class='btn btn-default btn-xs' aria-label='Left Align'>"+
								  "<span class='glyphicon glyphicon glyphicon-time' aria-hidden='true'></span>"+
								"</button>"+
							  
								  "<button type='button' class='btn btn-default btn-xs' aria-label='Left Align'>"+
									  "<span class='glyphicon glyphicon glyphicon-remove' aria-hidden='true'></span>"+
									"</button>"+
								  "<button type='button' class='btn btn-default btn-xs' aria-label='Left Align'>"+
									"  <span class='glyphicon glyphicon glyphicon-heart' aria-hidden='true'></span>"+
									"</button>"+
							  "</div>"+
							"</div>"+
						"</li>"+
						"<li class=''><p class='text-left'><a href=''>BookMarkBookMarkBookMarkBookMarkBookMarkBookMarkBookMarkBookMark</a></p>"+ 
						"	<div class='btn-toolbar button-set' role='toolbar' aria-label='...'>"+
						"	  <div class='btn-group' role='group' aria-label='...'>"+
								"<button type='button' class='btn btn-default btn-xs' aria-label='Left Align'>"+
								 " <span class='glyphicon glyphicon glyphicon-time' aria-hidden='true'></span>"+
								"</button>"+
							  
								 " <button type='button' class='btn btn-default btn-xs' aria-label='Left Align'>"+
									"  <span class='glyphicon glyphicon glyphicon-remove' aria-hidden='true'></span>"+
									"</button>"+
								  "<button type='button' class='btn btn-default btn-xs' aria-label='Left Align'>"+
									"  <span class='glyphicon glyphicon glyphicon-heart' aria-hidden='true'></span>"+
									"</button>"+
							  "</div>"+
							"</div>"+
						"</li>"+
					"</ul>"+
					"</div>"+
				"</div>";
$("#createNewList").click(function(){
        $(".show-grid").prepend(str);
		//document.getElementById("newMaar").className = 'newList';
      // setTimeout(function() {       
	   //$("#newMaar").addClass("newList");}, 5000);
	});



});
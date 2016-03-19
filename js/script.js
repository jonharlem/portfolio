

$( document ).ready(function() {
    console.log( "ready!" );
    $('.row').hover(function(){
    	(this).removeClass(".col-sm-3");
    	// .addClass(".col-sm-12");
    });
});
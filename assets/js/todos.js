$("ul").on("click","li",function(){

	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	//alert("You clicked Span");
	$(this).parent().fadeOut(500,function(){
       $(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which ===13){
    	//console.log("You hit enter");
       var todoText = $(this).val();
       $(this).val("");
     $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"<span>X</span> </li>") 
    
    }

});

$(".fa-plus").click(function(){
   $("input[type='text']").fadeToggle();
});
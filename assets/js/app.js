$(function() {   
     
    var header = $("#header"),
        introH = $("#intro").innerHeight(),  
        scrollOffset= $(window).scrollTop();
          
       /*fixed Header*/   
        checkScroll(scrollOffset); 

   $(window).on("scroll",function() {   
      
    scrollOffset = $(this).scrollTop(); 

    checkScroll(scrollOffset);

   });  

   function checkScroll(scrollOffset) { 
     
      if( scrollOffset >= introH) { 
        header.addClass("fixed");
     } else {  
      header.removeClass("fixed");
     } 
   } 
    
   /*Smooth scroll */
$("[data-scroll]").on("click",function(event) { 
    event.preventDefault(); 
 
     var blockId = $(this).data("scroll"),  
         blockOffset = $(blockId).offset().top;
      
        console.log(blockOffset);  
        /*all good*/  
      $("html,body").animate({ 
          scrollTop: blockOffset
      },500);
  });
 
});
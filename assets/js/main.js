/*==========---slick---============*/
/*initialise slick*/


 // IIFE - Immediately Invoked Function Expression
  (function($, window, document) {

    // The $ is now locally scoped 

   // Listen for the jQuery ready event on the document
   $(function() {

     // The DOM is ready!
	   
//	   $('.single-item').slick({
//    	dots: true,
//        infinite: true,
//	  	centerMode: true,
//        slidesToShow: 1,
//        slidesToScroll: 6,
//		  autoplay:true
//		 
//	
//  });
//	   
//	  $('.experienceList').slick({
//    	dots: true,
//        infinite: true,
//	  	centerMode: true,
//        slidesToShow: 3,
//        slidesToScroll: 6,
//		arrows:true,
//		  autoplay:true
//		 
//	
//  });
	   
	   
 $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        slide: 'div',
		autoplay:true,
	
    });
    
	   $('.slider-experience').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        slide: 'div',
		autoplay:true
		
	
    });
	   
	   $('.slider-education').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        slide: 'div',
		autoplay:true
		 
	
    });
	
	   
	$('.progress-bar-text').addClass('progress-bar-text-display');
	   
	 
	   
	  //typed.js 
	   $(function(){
      $("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 80,
		
//		showCursor:false
      
      });
  });
	    
	   
	   
//	$(window).scroll(function() {
//	var y_scroll_pos = window.pageYOffset;
//    var scroll_pos_test = 1303; 
//    if ( y_scroll_pos > scroll_pos_test &&  y_scroll_pos < 1350) {	   	
//   
//	$(".pr1,.pr2,.pr4,.pr5").animate({
//    	width: "80%"
//	}, 1500 );
//	$(".pr3").animate({
//    	width: "90%"
//	}, 1500 );
//	$(".pr6").animate({
//    	width: "50%"
//	}, 1500 );
//	$(".pr7").animate({
//    	width: "40%"
//	}, 1500 );
//	   	
//	}
//		else{
//			$(".pr1,.pr2,.pr4,.pr5").animate({
//    	width: "10%"
//	}, 1500 );
//		}
//	   
//	  }); 
	   
   });

   // The rest of the code goes here!
	  
	  
//	     var targetOffset = $(".skills").offset().top;
//	   
//	var $w = $(window).on('scroll',function(){
//    if ( $w.scrollTop() > targetOffset ) {   
//        $(".pr1,.pr2,.pr4,.pr5").animate({
//    	width: "80%"
//	}, 2500 );
//	$(".pr3").animate({
//    	width: "90%"
//	}, 2500 );
//	$(".pr6").animate({
//    	width: "50%"
//	}, 2500 );
//	$(".pr7").animate({
//    	width: "40%"
//	}, 2500 );
//    } 
//		else{
//			this.removeEventListener('scroll', arguments.callee, false);
//		}
//});

  }(window.jQuery, window, document));
  // The global jQuery object is passed as a parameter


window.addEventListener('scroll', function(){
  var place = document.body.scrollTop;
  var animateOn = document.getElementById('animate-progress-bar').offsetTop;
  if(place > animateOn){
     $(".pr1,.pr2,.pr4,.pr5").animate({
    	width: "80%"
	});
	$(".pr3").animate({
    	width: "90%"
	});
	$(".pr6").animate({
    	width: "50%"
	});
	$(".pr7").animate({
    	width: "40%"
	});
	$('.progress-bar-text').removeClass('progress-bar-text-display');
    this.removeEventListener('scroll', arguments.callee, false);
  }
	
	
});



	

//parallax scrolling

$(function() {
	
	// Cache the Window object
	var $window = $(window);
	
	// Parallax Backgrounds
	// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641
	$('section[data-type="background"]').each(function(){
       var $bgobj = $(this); // assigning the object
        $(window).scroll(function(){
                //scroll the background at var speed
                // the yPos is a negative value because we're scrolling it up
        var yPos = -(($window.scrollTop() - $bgobj.offset().top)/$bgobj.data('speed'));
        // put together our final background position
            var coords='50%' + yPos + 'px';
            //Move the background
            $bgobj.css({backgroundPosition:coords});
                         });
    });
	
});

/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#878787" });


var resizeDiv = {
	divH: 0,
	divW: 0,
	init: function(){
		this.divW = $('#about-us').width();
		this.divH = $('#about-us .col-md-8, .service-box.first .row').height(); 
		$(window).on('resize', this.callResize);
		this.callResize();
		setTimeout(function() {
			$(window).resize();
			}, 100);
	},
	callResize: function(){
		var w,h;
		w = $("#about-us").width();
		$('#about-us, .service-box.first .row').find('.col-md-4,  .col-md-4.non-position').hide();
		h = $("#about-us .col-md-8, .service-box.first .row").height();	
		 if (w != resizeDiv.divW || h != resizeDiv.divH) {
        /*what ever*/
        resizeDiv.divH = h;
        resizeDiv.divW = w;
		
    }
	$('#about-us, .service-box.first .row').find('.col-md-4,  .col-md-4.non-position').css({'height': resizeDiv.divH + 'px'});
	$('#about-us, .service-box.first .row').find('.col-md-4,  .col-md-4.non-position').show();	
	console.log(resizeDiv.divH);


	}
	
	
};	
	
resizeDiv.init();	


var resizeDiv = {
	divH: 0,
	divW: 0,
	init: function(){
		this.divW = $('').width();
		this.divH = $('.service-box.second .row').height(); 
		$(window).on('resize', this.callResize);
		this.callResize();
		setTimeout(function() {
			$(window).resize();
			}, 100);
	},
	callResize: function(){
		var w,h;
		w = $("").width();
		$(' .service-box.second .row').find('.col-md-4.non-position').hide();
		h = $(".service-box.second .row").height();	
		 if (w != resizeDiv.divW || h != resizeDiv.divH) {
        /*what ever*/
        resizeDiv.divH = h;
        resizeDiv.divW = w;
		
    }
	$(' .service-box.second .row').find('.col-md-4.non-position').css({'height': resizeDiv.divH + 'px'});	
    $(' .service-box.second .row').find('.col-md-4.non-position').show();
    console.log(resizeDiv.divH);
	}
	
	
};	
resizeDiv.init();	
			
 
 var resizeDiv = {
	divH: 0,
	divW: 0,
	init: function(){
		this.divW = $('').width();
		this.divH = $('.service-box.third .row').height(); 
		$(window).on('resize', this.callResize);
		this.callResize();
		setTimeout(function() {
			$(window).resize();
			}, 100);
	},
	callResize: function(){
		var w,h;
		w = $("").width();
		$(' .service-box.third .row').find('.col-md-4.non-position').hide();
		h = $(".service-box.third .row").height();	
		 if (w != resizeDiv.divW || h != resizeDiv.divH) {
        /*what ever*/
        resizeDiv.divH = h;
        resizeDiv.divW = w;
		
    }
	$(' .service-box.third .row').find('.col-md-4.non-position').css({'height': resizeDiv.divH + 'px'});	
	$(' .service-box.third .row').find('.col-md-4.non-position').show();
    console.log(resizeDiv.divH);

	}
	
	
};	
resizeDiv.init();	

		
 
 var resizeDiv = {
	divH: 0,
	divW: 0,
	init: function(){
		this.divW = $('').width();
		this.divH = $('.service-box.fourth .row').height(); 
		$(window).on('resize', this.callResize);
		this.callResize();
		setTimeout(function() {
			$(window).resize();
			}, 100);
	},
	callResize: function(){
		var w,h;
		w = $("").width();
		$('.service-box.fourth .row').find('.col-md-4.non-position').hide();
		h = $(".service-box.fourth .row").height();	
		 if (w != resizeDiv.divW || h != resizeDiv.divH) {
        /*what ever*/
        resizeDiv.divH = h;
        resizeDiv.divW = w;
		
    }
	$('.service-box.fourth .row').find('.col-md-4.non-position').css({'height': resizeDiv.divH + 'px'});
	$('.service-box.fourth .row').find('.col-md-4.non-position').show();	
    console.log(resizeDiv.divH);

	}
	
	
};	
resizeDiv.init();		


 var resizeDiv = {
	divH: 0,
	divW: 0,
	init: function(){
		this.divW = $('').width();
		this.divH = $('.service-box.fifth .row').height(); 
		$(window).on('resize', this.callResize);
		this.callResize();
		setTimeout(function() {
			$(window).resize();
			}, 100);
	},
	callResize: function(){
		var w,h;
		w = $("").width();
		$('.service-box.fifth .row').find('.col-md-4.non-position').hide();
		h = $(".service-box.fifth .row").height();	
		 if (w != resizeDiv.divW || h != resizeDiv.divH) {
        /*what ever*/
        resizeDiv.divH = h;
        resizeDiv.divW = w;
		
    }
	$('.service-box.fifth .row').find('.col-md-4.non-position').css({'height': resizeDiv.divH + 'px'});	
	$('.service-box.fifth .row').find('.col-md-4.non-position').show();
    console.log(resizeDiv.divH);

	}
	
	
};	
resizeDiv.init();		

var resizeDiv = {
	divH: 0,
	divW: 0,
	init: function(){
		this.divW = $('').width();
		this.divH = $('.service-box.sixth .row').height(); 
		$(window).on('resize', this.callResize);
		this.callResize();
		setTimeout(function() {
			$(window).resize();
			}, 100);
	},
	callResize: function(){
		var w,h;
		w = $("").width();
		$('.service-box.sixth .row').find('.col-md-4.non-position').hide();
		h = $(".service-box.sixth .row").height();	
		 if (w != resizeDiv.divW || h != resizeDiv.divH) {
        /*what ever*/
        resizeDiv.divH = h;
        resizeDiv.divW = w;
		
    }
	$('.service-box.sixth .row').find('.col-md-4.non-position').css({'height': resizeDiv.divH + 'px'});	
	$('.service-box.sixth .row').find('.col-md-4.non-position').show();
    console.log(resizeDiv.divH);

	}
	
	
};		
resizeDiv.init();		

var resizeDiv = {
	divH: 0,
	divW: 0,
	init: function(){
		this.divW = $('').width();
		this.divH = $('.service-box.seventh .row').height(); 
		$(window).on('resize', this.callResize);
		this.callResize();
		setTimeout(function() {
			$(window).resize();
			}, 100);
	},
	callResize: function(){
		var w,h;
		w = $("").width();
		$('.service-box.seventh .row').find('.col-md-4.non-position').hide();
		h = $(".service-box.seventh .row").height();	
		 if (w != resizeDiv.divW || h != resizeDiv.divH) {
        /*what ever*/
        resizeDiv.divH = h;
        resizeDiv.divW = w;
		
    }
	$('.service-box.seventh .row').find('.col-md-4.non-position').css({'height': resizeDiv.divH + 'px'});	
	$('.service-box.seventh .row').find('.col-md-4.non-position').show();
	console.log(resizeDiv.divH);


	}
	
	
};	
resizeDiv.init();		

var resizeDiv = {
	divH: 0,
	divW: 0,
	init: function(){
		this.divW = $('').width();
		this.divH = $('.service-box.seventh .row').height(); 
		$(window).on('resize', this.callResize);
		this.callResize();
		setTimeout(function() {
			$(window).resize();
			}, 100);
	},
	callResize: function(){
		var w,h;
		w = $("").width();
		$('.service-box.seventh .row').find('.col-md-4.non-position').hide();
		h = $(".service-box.seventh .row").height();	
		 if (w != resizeDiv.divW || h != resizeDiv.divH) {
        /*what ever*/
        resizeDiv.divH = h;
        resizeDiv.divW = w;	
    }
	$('.service-box.seventh .row').find('.col-md-4.non-position').css({'height': resizeDiv.divH + 'px'});	
	$('.service-box.seventh .row').find('.col-md-4.non-position').show();
	console.log(resizeDiv.divH);
	}
};	
resizeDiv.init();		


var resizeDiv = {
	divH: 0,
	divW: 0,
	init: function(){
		this.divW = $('').width();
		this.divH = $('.service-box.eighth .row').height(); 
		$(window).on('resize', this.callResize);
		this.callResize();
		setTimeout(function() {
			$(window).resize();
			}, 100);
	},
	callResize: function(){
		var w,h;
		w = $("").width();
		$('.service-box.eighth .row').find('.col-md-4.non-position').hide();
		h = $(".service-box.eighth .row").height();	
		 if (w != resizeDiv.divW || h != resizeDiv.divH) {
        /*what ever*/
        resizeDiv.divH = h;
        resizeDiv.divW = w;
		
    }
	$('.service-box.eighth .row').find('.col-md-4.non-position').css({'height': resizeDiv.divH + 'px'});
	$('.service-box.eighth .row').find('.col-md-4.non-position').show();
	console.log(resizeDiv.divH);	


	}
};	
resizeDiv.init();	


var resizeDiv = {
	divH: 0,
	divW: 0,
	init: function(){
		this.divW = $('').width();
		this.divH = $('.service-box.ninth .row').height(); 
		$(window).on('resize', this.callResize);
		this.callResize();
		setTimeout(function() {
			$(window).resize();
			}, 100);
	},
	callResize: function(){
		var w,h;
		w = $("").width();
		$('.service-box.ninth .row').find('.col-md-4.non-position').hide();
		h = $(".service-box.ninth .row").height();
			
		 if (w != resizeDiv.divW || h != resizeDiv.divH) {
        /*what ever*/
        resizeDiv.divH = h;
        resizeDiv.divW = w;
		
    }
	$('.service-box.ninth .row').find('.col-md-4.non-position').css({'height': resizeDiv.divH + 'px'});	
	$('.service-box.ninth .row').find('.col-md-4.non-position').show();
	console.log(resizeDiv.divH);

	}
	
};	
resizeDiv.init();				
 });

 


$(window).load(function() {
   
   

    $("#flexiselDemo3").flexisel({
		
        visibleItems: 4,
        animationSpeed: 500,
        autoPlay: true,
        autoPlaySpeed: 2000,            
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 2
            },
            tablet: { 
                changePoint:768,
                visibleItems: 3
            }
        }
    });

 
    
});



$(document).ready(function(){
        var $menu = $(".header-inner");
   $(window).scroll(function(){
            if ( $(this).scrollTop() > 110 && $menu.hasClass("default") ){
        $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <=110 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll
    });
	
$(document).ready(function(){
        var $menu = $(".top-header-total");
   $(window).scroll(function(){
            if ( $(this).scrollTop() > 740 && $menu.hasClass("default") ){
        $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <=740 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll
    });
	
	
	
	
	/*Fancybox*/


            var forms = $('.form-modal'),
            cb_input = forms.find('input[type=text], input[type=email], input[type=tel] , textarea'),
            cr_close = $.fancybox.close();

    $("#fancybox-overlay").fancybox({
        padding: [0, 0, 0, 0],
        margin: [120, 0, 0, 0],
        scrolling: 'visible',
        minWidth: 280,
        minHeight: 330,
        autoSize: false,
        autoHeight: true,
        autoWidth: true,
        maxWidth: 9999,
        maxHeight: 9999,
        fixed: false,
        autoCenter: false,
        closeBtn: true,
        afterClose: function () {
            cb_input.val('');
        }
    });

    $('.btr').click(function () {
        $.fancybox.close();
    });
	

/*Fancybox end*/  

	
		
		//   $("a[href$='.jpg'], a[href$='.png']")
//           .addClass("fancybox");
          
           $("a[href$='.jpg'], a[href$='.png']").each(function() {
      $(this).addClass("fancybox");
       $(this).attr('rel', 'gallery');
     
});

 $(".fancybox").fancybox({
        padding: [0, 0, 0, 0],
        openEffect: 'elastic',
        openSpeed: 300,
//        closeEffect: 'elastic',
//        scrolling: 'visible',
         background:'white',
        maxWidth: 800,
		arrows: false,
        fixed: false,
        autoCenter: false,
     
    });




(function ($) {
"use strict";


	/* Preloader */
	var win = $(window);
	/* menu last class added */
	$('ul.main-menu>li').slice(-2).addClass('menu-p-right');


	/* TOP Menu Stick  */
	win.on('scroll',function() {
	if ($(this).scrollTop() > 1){
		$('#sticky-header').addClass("sticky");
	  }
	  else{
		$('#sticky-header').removeClass("sticky");
	  }
	});

	/* meanmenu */
	 $('#mobile-nav').meanmenu({
		 meanMenuContainer: '.mobile-menu',
		 meanScreenWidth: "767"
	 });

    
})(jQuery);
$(document).ready(function(){

	// ABRIR FECHAR MENU - MOBILE
	$('.menu').click(function () {
        $(this).closest('.container-menu').toggleClass('open')
        $('body').toggleClass('overflow-hidden')
    });

    $('body').on('click', '.container-menu.open .list-menu a', function (e) {
    	$('body').toggleClass('overflow-hidden')
    	$(this).closest('.container-menu').removeClass('open')
    });

	// FIXAR BARRA MENU - SCROLL
    if ($(window).scrollTop() >= 50) {
		$('.container-menu').addClass('fixed')
	} else {
		$('.container-menu').removeClass('fixed')
	}

	$(window).scroll(function(){
		var scrollWindow = $(this).scrollTop();
		if ($(this).scrollTop() >= 50) {
			$('.container-menu').addClass('fixed')
		} else {
			$('.container-menu').removeClass('fixed')
		}

		$('section').each(function(){
			var sectionTop = $(this).offset().top;
			if ( scrollWindow >= sectionTop - 100 ) {
				var sectionCurrent = $(this).attr('id');
				
				$('.list-menu a').each(function(){
					var menuCurrent = $(this).data('href');
					if (menuCurrent === sectionCurrent ) {
						$('.list-menu li').removeClass('active');
						$(this).parent().addClass('active')
					}
				})
			}
		});
	});

	// $(".fancybox").fancybox({
 //        type: "iframe",
 //        width : 400, // or whatever
 //        height: 280
 //    }).trigger("click");

});
$(document).ready(function(){

	// ABRIR FECHAR MENU - MOBILE
	$('.menu').click(function () {
        $(this).closest('.container-menu').toggleClass('open')
        $('body').toggleClass('overflow-hidden')
    });

    $('body').on('click', '.list-menu a', function (e) {
    	$('body').toggleClass('overflow-hidden')
    	$(this).closest('.container-menu').removeClass('open')

    	var currentLink = $(this).attr('data-href');
    	$('html, body').animate({scrollTop: $(`#${currentLink}`).offset().top}, 800)
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

		$('.section-parte').each(function(){
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

});
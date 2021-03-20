(function($) {

    $(document).on('click', '.group a', function(e) {
      e.preventDefault();
  
      var $this = $(this),
        id = $this.data('id');
  
      $('.groups-data .active').removeClass('active');
      $('.group .active').removeClass('active');
  
      $(this).addClass('active');
      $('#group-' + id).addClass('active');
    });
  
  })(jQuery);




  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3.17,
    spaceBetween: 24,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
	breakpoints: {
		100: {
			slidesPerView: 1,
		},
		400: {
			slidesPerView: 1,
		},
        668: {
          slidesPerView: 1.7,
          spaceBetween: 20,
        },
        850: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
		935: {
			slidesPerView: 2.3,
			spaceBetween: 40,
		  },
		1030: {
			slidesPerView: 2.5,
			spaceBetween: 40,
		  },
		1322: {
			slidesPerView: 2.7,
			spaceBetween: 50,
		  },
		  1352: {
			slidesPerView: 3.17,
			spaceBetween: 50,
		  },
      }
  });




	$('a.open-register').click(function (e) {
		e.preventDefault();
		$('.popup.popup-register.show').removeClass('show');
		$('.bg-menu2').removeClass('show');
	});
	
	$('a.open-login').click(function (e) {
		e.preventDefault();
		$('.popup.popup-login.show').removeClass('show');
		$('.bg-menu').removeClass('show');
	});
	
		
	$('a.open-login').click(function (e) {
		e.preventDefault();
		$('.popup.popup-login').toggleClass('show');
		$('.popup.popup-register.show').removeClass('show');
		$('.bg-menu').toggleClass('show');
	});
	
	
	$('a.open-register').click(function (e) {
		e.preventDefault();
		$('.popup.popup-register').toggleClass('show');
		$('.popup.popup-login.show').removeClass('show');
		$('.bg-menu2').toggleClass('show');
	});
	
	
	
	$('.bg-menu').click(function () {
		$('.popup').removeClass('show');
		$('.bg-menu').removeClass('show');
	});
	$('.close').click(function () {
		$('.popup').removeClass('show');
		$('.bg-menu').removeClass('show');
	});
	
	$('.bg-menu2').click(function () {
		$('.popup').removeClass('show');
		$('.bg-menu2').removeClass('show');
	});
	$('.close').click(function () {
		$('.popup').removeClass('show');
		$('.bg-menu2').removeClass('show');
	});
	
  

  $(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


$(document).ready(function() {
    $('.header__list').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
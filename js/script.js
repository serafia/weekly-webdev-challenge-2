function changeNavbar() {
	var scrollPosition = $(document).scrollTop();
	//console.log(scrollPosition);
	if(scrollPosition > 20) {
		$('#navbar').addClass('fixed-nav');
		$('#navbar').css('padding', '2.5% 15px');

	} else {
		$('#navbar').css('padding', '5% 15px');
		$('#navbar').removeClass('fixed-nav');		
		
	}
}
changeNavbar();
$(window).scroll(function() {
	changeNavbar();
	$('.nav-link').not('.active').blur();
});

//scrollspy

$('body').scrollspy({ target: '#navbar' });


//smothscroll

$('a[href*="#"]').not('[href="#"]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate ({
                 scrollTop: target.offset().top
             }, 1000);
            return false;
        }
    }
});

//phone number validation

function phonenumber() {
  	var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
  	if($('#phone').val() == "") {
  		$('#phone').removeClass('fulfill');
	}else {
		if($('#phone').val().match(phoneno)){
	     	$('#phone').addClass('fulfill');
		   	return true;
		}else {
		   	$('#phone').removeClass('fulfill');
		   	$('#phone').focus();
		   	return false;
	    }
	}
}


//hidden menu on mobile devices

$('.collapse .nav-link').click(function() {
	if($(window).width()<767) {
		$('#myNavigation').animate({height: '20px'}, 300, removeClassShow);
	}
});

function removeClassShow() {
	$(this).removeClass('show');
}

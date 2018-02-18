function changeNavbar() {
	var scrollPosition = $(document).scrollTop();
	//console.log(scrollPosition);
	if(scrollPosition > 0) {
		$('#navbar').addClass('fixed-nav');
		$('#navbar').css('min-height', '90px');

	} else {
		$('#navbar').css('min-height', '145px');
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

$('.collapse .nav-link').click(function() {
	$('#myNavigation').removeClass('show');
});

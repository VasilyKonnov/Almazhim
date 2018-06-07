$(function() {

	$(".toggle-mnu").click(function(){
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
	});

	$(document).scroll(function(){
        var offset = $(window).scrollTop();
        if(offset > 692){
            $('.back-to-top').addClass('fixed');
        }
        else
            $('.back-to-top').removeClass('fixed');
    });

     
   $(document).on('click', 'a[href^=#]', function (event) {
        event.preventDefault();       
        var hash = this.hash.slice(1);
        var elem = $('#' + hash ).offset().top;        
        $('html, body').animate({ scrollTop:  elem }, 500 ); 
        return false;
    });

   $(".o-nas p").animated("fadeInLeft");
   $(".h1").animated("fadeInUpBig");
   $(".h2").animated("fadeInUp");
   $(".h3").animated("fadeInUp");
   $(".us-1").animated("fadeInRight");
   $(".us-2").animated("fadeInRight");
   $(".us-3").animated("fadeInRight");
   $(".steralka-bolshaia").animated("fadeInLeft");
   $(".mashin-box").animated("fadeInRight");
   $(".logo-mashin").animated("fadeInUp");
   $(".greed").animated("fadeInUp");
   $(".fade-left").animated("fadeInLeft");
   $(".fade-up").animated("fadeInUp");
   $(".fade-right").animated("fadeInRight");
   $(".map-1").animated("fadeIn");
   $(".map-2").animated("fadeIn");
   $(".float-right").animated("fadeInRight");
   $(".float-left").animated("fadeInLeft");
   $(".form").animated("fadeInLeft");
   $(".b-txt").animated("fadeInRight");
   $(".m-txt").animated("zoomIn");
   $(".last-txt").animated("zoomIn");
   $(".last-txt b").animated("tada");
   // $(".").animated("");
   // $(".").animated("");

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо, в бжайшее время мы свяжемся с вами!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
	$("#phone").mask("+7 (999) 999-99-99");

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	

});

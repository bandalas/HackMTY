$(document).ready(function() {

	function initParseLocation(){
		if(window.location.href.indexOf('/#') != -1){
			var location = window.location.href.substr(0,window.location.href.indexOf('/#'));
			var hash = window.location.href.substr(window.location.href.indexOf('#')+1);
			goToURL(hash);
		}
	}

/*			< Magic Line Menu >			*/

	var $el, leftPos, newWidth,
			$mainNav = $("#nav");
	
	$mainNav.append("<li id='magic-line'></li>");
	var $magicLine = $("#magic-line");
	
	$magicLine
			.width($(".current").width())
			.css("left", $(".current a").position().left)
			.data("origLeft", $magicLine.position().left)
			.data("origWidth", $magicLine.width());
			
	$("#nav li a").hover(function() {
		$el = $(this);
		leftPos = $el.position().left;
		newWidth = $el.parent().width();
		$magicLine.stop().animate({
				left: leftPos,
				width: newWidth
		});
	}, function() {
		$magicLine.stop().animate({
				left: $magicLine.data("origLeft"),
				width: $magicLine.data("origWidth")
		});    
	});


/*			< Useful Functions >			*/

	function moveMagicLine($el){
		leftPos = $el.position().left;
		newWidth = $el.parent().width();
		$magicLine.stop().animate({
				left: leftPos,
				width: newWidth
		});
		$('#nav .current').removeClass('current');
		$el.parent().addClass('current');
		$magicLine
			.width($(".current").width())
			.css("left", $(".current a").position().left)
			.data("origLeft", $magicLine.position().left)
			.data("origWidth", $magicLine.width());
	}
	
	function goToSection(section){
		switch(section){
			case '1': y = 0; break;
			case '2': y = 820; break;
			case '3': y = 1720; break;
			case '4': y = 2600; break;
			case '5': y = 3460; break;
			case '6': y = 3950; break;
		}
		if($.browser.safari) { bodyelem = $("body"); }
		else bodyelem = $("html,body");
		bodyelem.animate({
			scrollTop: y
		}, 800);
		var section = parseInt(section); section--;
		moveMagicLine($('#nav a:eq(' + section +')'));
		$('#nav .current').removeClass('current');
		$('#nav li:eq(' + section +')').addClass('current');
	}
	
	function animateProducts(){
		$('#p02').animate({ "left" : "300px"}, 1200, 'easeOutQuint');
		$('#p03').animate({ "left" : "600px"}, 1200, 'easeOutQuint');
		$('#p04').animate({ "left" : "0px", "top" : "285px"}, 1200, 'easeOutQuint');
		$('#p05').animate({ "left" : "300px", "top" : "285px"}, 1200, 'easeOutQuint');
		$('#p06').animate({ "left" : "600px", "top" : "285px"}, 1200, 'easeOutQuint');
	}

	var flag = 0;
	function openProducts(cat, subtab){
		$('#product-list').animate({
			'left': '-99em'
		}, { duration: 500, queue: false });
		$('#product-detail').animate({
			'right': '50%'
		}, { duration: 500, queue: false });
		if( flag != 1 ){
			$.tabs("tab-products",cat);
			flag = 1;
		} else {
			$('#tab-products .tabs_links li').removeClass('on');
			$('#product-menu #prod0' + cat).parent().addClass('on');
			$('#tab-products .tabs_cont').hide();
			$('#prod-0' + cat).show();
		}
		if( subtab == '1' ){
			$('.product-detail li:eq(1)').removeClass('on');
			$('.product-detail li:eq(0)').addClass('on');
			$('#info01, #info02, #info03, #info04, #info05, #info06').show();
			$('#recipe01, #recipe02, #recipe03, #recipe04, #recipe05, #recipe06').hide();
		}
		if( subtab == '2' ){
			$('.product-detail li:eq(0)').removeClass('on');
			$('.product-detail li:eq(1)').addClass('on');
			$('#info01, #info02, #info03, #info04, #info05, #info06').hide();
			$('#recipe01, #recipe02, #recipe03, #recipe04, #recipe05, #recipe06').show();
		}
		$('.product-detail li a').live('click', function(){
			var tab = $(this).attr('href');
			$(this).parent().parent().parent().find('.tcont').hide();
			$(tab).show();
			$(this).parent().parent().find('li').removeClass('on');
			$(this).parent().addClass('on');
			return false;
		});
		
	}
	
	function backProductsMenu(){
		$('#product-list').animate({
			'left': '50%'
		}, { duration: 500, queue: false });
		$('#product-detail').animate({
			'right': '-99em'
		}, { duration: 500, queue: false });
		return false;
	}
	
	function goToURL(url){
		$('.overlay, #search-results').hide();
		switch(url){
			case 'home': goToSection('1'); break;
			case 'nuestros-productos': goToSection('2'); animateProducts(); backProductsMenu(); break;
			case 'nuestros-productos-i': goToSection('2'); animateProducts(); backProductsMenu(); break;
			case 'quienes-somos': goToSection('3'); break;
			case 'quienes-somos-i': goToSection('3'); break;
			case 'en-accion': goToSection('4'); break;
			case 'contacto': goToSection('5'); break;
			case 'carnes-frias': 
				openProducts(1,1);
				goToSection('2');
				break;
			case 'receta-carnes-frias': 
				openProducts(1,2);
				goToSection('2');
				break;
			case 'quesos': 
				openProducts(2,1);
				goToSection('2');
				break;
			case 'receta-quesos': 
				openProducts(2,2);
				goToSection('2');
				break;
			case 'yoghurts': 
				openProducts(3,1);
				goToSection('2');
				break;
			case 'receta-yoghurts': 
				openProducts(3,2);
				goToSection('2');
				break;
			case 'lacteos': 
				openProducts(4,1);
				goToSection('2');
				break;
			case 'receta-lacteos': 
				openProducts(4,2);
				goToSection('2');
				break;
			case 'alimentos': 
				openProducts(5,1);
				goToSection('2');
				break;
			case 'receta-alimentos': 
				openProducts(5,2);
				goToSection('2');
				break;
			case 'carnes': 
				openProducts(6,1);
				goToSection('2');
				break;
			case 'receta-carnes': 
				openProducts(6,2);
				goToSection('2');
				break;
			case 'informacion-corporativa': 
				//$('#cont').css('height','auto');
				$('#foot').load('informacion-corporativa.php?t='+Math.random(), function(){ 
  		      	$.tabs("footer-tab");
					$('#block-footer, #foot').slideDown(400, function(){
						var hf = $('#block-footer').height();
						hf += 4315;
						$('#cont').css('height', hf + 'px');
					});
					setTimeout(function(){
                        var hf = $('#block-footer').height();
                        hf += 4315;
                        $('#cont').css('height', hf + 'px');
                    }, 500);
					$('#footer-menu .on').removeClass('on');
					$('#footer-menu li:first').addClass('on');
					goToSection('6');
				});
				break;
			case 'informacion-corporativa-i': 
				//$('#cont').css('height','auto');
				$('#foot').load('informacion-corporativa-i.php?t='+Math.random(), function(){ 
  		      	$.tabs("footer-tab");
					$('#block-footer, #foot').slideDown(400, function(){
						var hf = $('#block-footer').height();
						hf += 4315;
						$('#cont').css('height', hf + 'px');
					});
					setTimeout(function(){
                        var hf = $('#block-footer').height();
                        hf += 4315;
                        $('#cont').css('height', hf + 'px');
                    }, 500);
					$('#footer-menu .on').removeClass('on');
					$('#footer-menu li:first').addClass('on');
					goToSection('6');
				});
				break;
			case 'historia': 
				// $('#cont').css('height','auto');
				$('#foot').load('informacion-corporativa.php?t='+Math.random(), function(){ 
	        	$.tabs("footer-tab",2);
					$('#block-footer, #foot').slideDown(400, function(){
						var hf = $('#block-footer').height();
						hf += 4315;
						$('#cont').css('height', hf + 'px');
					});
					setTimeout(function(){
                        var hf = $('#block-footer').height();
                        hf += 4315;
                        $('#cont').css('height', hf + 'px');
                    }, 500);
					$('#footer-menu .on').removeClass('on');
					$('#footer-menu li:first').addClass('on');
					goToSection('6');
				});
				break;
			case 'inversionistas': 
				//$('#cont').css('height','auto');
				$('#foot').load('inversionistas.php?t='+Math.random(), function(){ 
        		$.tabs("footer-tab");
					$('#block-footer, #foot').slideDown(400, function(){
						var hf = $('#block-footer').height();
						hf += 4315;
						$('#cont').css('height', hf + 'px');
					});
					setTimeout(function(){
                        var hf = $('#block-footer').height();
                        hf += 4315;
                        $('#cont').css('height', hf + 'px');
                    }, 500);
					$('#footer-menu .on').removeClass('on');
					$('#footer-menu li:eq(1)').addClass('on');
					goToSection('6');
				});
				break;
			case 'inversionistas-i': 
				//$('#cont').css('height','auto');
				$('#foot').load('inversionistas_i.php?t='+Math.random(), function(){ 
        		$.tabs("footer-tab");
					$('#block-footer, #foot').slideDown(400, function(){
						var hf = $('#block-footer').height();
						hf += 4315;
						$('#cont').css('height', hf + 'px');
					});
					setTimeout(function(){
                        var hf = $('#block-footer').height();
                        hf += 4315;
                        $('#cont').css('height', hf + 'px');
                    }, 500);
					$('#footer-menu .on').removeClass('on');
					$('#footer-menu li:eq(1)').addClass('on');
					goToSection('6');
				});
				break;
			case 'sustentabilidad': 
				//$('#cont').css('height','auto');
				$('#foot').load('sustentabilidad.php?t='+Math.random(), function(){ 
					$('#block-footer, #foot').slideDown(400, function(){
						var hf = $('#block-footer').height();
						hf += 4315;
						$('#cont').css('height', hf + 'px');
					});
					setTimeout(function(){
                        var hf = $('#block-footer').height();
                        hf += 4315;
                        $('#cont').css('height', hf + 'px');
                    }, 500);
					$('#footer-menu .on').removeClass('on');
					$('#footer-menu li:eq(2)').addClass('on');
					goToSection('6');
				});
				break;
			case 'sustentabilidad-i': 
				//$('#cont').css('height','auto');
				$('#foot').load('sustentabilidad_i.php?t='+Math.random(), function(){ 
					$('#block-footer, #foot').slideDown(400, function(){
						var hf = $('#block-footer').height();
						hf += 4315;
						$('#cont').css('height', hf + 'px');
					});
					setTimeout(function(){
                        var hf = $('#block-footer').height();
                        hf += 4315;
                        $('#cont').css('height', hf + 'px');
                    }, 500);
					$('#footer-menu .on').removeClass('on');
					$('#footer-menu li:eq(2)').addClass('on');
					goToSection('6');
				});
				break;
			case 'bolsa-trabajo':
				//$('#cont').css('height','auto');
				$('#foot').load('bolsa-trabajo.php?'+$.now(), function(){ 
					$('#block-footer, #foot').slideDown(400, function(){
						var hf = $('#block-footer').height();
						hf += 4315;
						$('#cont').css('height', hf + 'px');
					});
					setTimeout(function(){
                        var hf = $('#block-footer').height();
                        hf += 4315;
                        $('#cont').css('height', hf + 'px');
                    }, 500);
					$('#footer-menu .on').removeClass('on');
					$('#footer-menu li:eq(3)').addClass('on');
					goToSection('6');
				});
				break;
			case 'bolsa-trabajo-i':
				//$('#cont').css('height','auto');
				$('#foot').load('bolsa-trabajo-i.php?'+$.now(), function(){ 
					$('#block-footer, #foot').slideDown(400, function(){
						var hf = $('#block-footer').height();
						hf += 4315;
						$('#cont').css('height', hf + 'px');
					});
					setTimeout(function(){
                        var hf = $('#block-footer').height();
                        hf += 4315;
                        $('#cont').css('height', hf + 'px');
                    }, 500);
					$('#footer-menu .on').removeClass('on');
					$('#footer-menu li:eq(3)').addClass('on');
					goToSection('6');
				});
				break;
		}
	}
	

/*			< Links >			*/


	$('.page-link').live('click', function(){
		var url = $(this).attr('href');
		url = url.split('#');
		url = url[1];
		goToURL(url);
	});

/*			< Stage title >			*/

	$('#home-slider .title').each(function(){
		var h = $(this).parent().height();
		$(this).css('bottom', h + 'px');
	});

/*			< Window Scroll >			*/

	$(window).bind('scroll', function(){
		Move();
	});
	$(window).resize(function(){
		 Move();
	});
	
	function Move(){

		var pos = $(window).scrollTop();
		if( pos < 760 ) { $('#header').removeClass('small'); moveMagicLine($('#nav a:eq(0)')); }	
		if( pos > 760 && pos < 1700 ) { $('#header').addClass('small'); moveMagicLine($('#nav a:eq(1)')); animateProducts(); }
		if( pos > 1701 && pos < 2500 ) { $('#header').addClass('small'); moveMagicLine($('#nav a:eq(2)')); }	
		if( pos > 2501 && pos < 3400 ) { $('#header').addClass('small'); moveMagicLine($('#nav a:eq(3)')); }	
		if( pos > 3401 ) { $('#header').addClass('small'); moveMagicLine($('#nav a:eq(4)')); }
		
		var windowHeight = $(window).height();
		
		var div01 = pos * 0.24;
		var div01b = pos * 0.33;
		var div02 = pos * 0.15;

		var milk = 220 + pos * -0.22;
		var bgframe01 = -700 + pos * 0.58;
		var bgframe02 = -700 + pos * 0.53;
		var bgrotate = pos * 0.2;
		var p02 = pos * 0.38;
		var p03 = pos * 0.73;
		var p04 = pos * 0.45;
		var p05 = pos * 0.6;
		var p0405 = pos * 0.35;

		var bg = pos * 0.1;
		var pizza = -500 + pos * 0.6;
		var cheese = 1000 - pos * 0.61;
		var pinkcircle = 600 + pos * -0.38;
		var family = pos * 0.18;
		var greencircle =  pos * 0.19;
		
		//if( $.browser.mobile ) alert('mobile');
		
		if($.browser.msie){} else {
			$('#div01').css({ "bottom" : div01 + "px"});
			$('#div02').css({ "bottom" : div02 + "px"});
			$('#milk').css({ "top" : milk + "px"});
			if( bgframe01 < 0 ) $('#bg-frame01').css({ "left" : bgframe01 + "px"});
			if( bgframe02 < 0 ) $('#bg-frame02').css({ "right" : bgframe02 + "px"});
			/*if( p02 < 300 ) $('#p02').css({ "left" : p02 + "px"});
			if( p03 < 600 ) $('#p03').css({ "left" : p03 + "px"});
			if( p04 < 140 ) $('#p04').css({ "left" : p04 + "px"});
			if( p05 < 430 ) $('#p05').css({ "left" : p05 + "px"});
			if( p0405 < 285 ) $('#p04, #p05').css({ "top" : p0405 + "px"});*/
			$('#block-aboutus').css({ "background-position" : bg + "px 0"});
			$('.pizza').css({ "top" : pizza + "px"});
			$('.cheese').css({ "top" : cheese + "px"});
			$('#pink-circle').css({ "top" : pinkcircle + "px"});
			$('.family').css({ "left" : family + "px"});
			$('.green-circle').css({ "top" : greencircle + "px"});
		}

	}
	
/*			< Social Media Hover >			*/

	$('#social-media').hover(
		function(){
			$(this).animate({
				left: '0'
			}, 500, 'easeOutQuint');	
		},
		function(){
			$(this).animate({
				left: '-120px'
			}, 500, 'easeOutQuint');	
		}
	);
	$('#social-media div').hover(
		function(){ $(this).addClass('hover'); },
		function(){ $(this).removeClass('hover'); }
	);


/*			< Search Results >			*/

	$('#search_form').submit(function(){

/*
	if (document.search_form.idioma.value=='e')
			xajax_busqueda(xajax.getFormValues('search_form'));
		else
			xajax_busqueda_i(xajax.getFormValues('search_form'));
*/
	var t = $('#search_form #texto').val();
	var idioma = $('#search_form #idioma').val();
	if (idioma=='e') {
		$('#search-results').load('buscador.php', {texto:t, t:Math.random()}, function(){
			$("#search-results .nano").nanoScroller();
		});
	} else {
		$('#search-results').load('buscador_i.php', {texto:t, t:Math.random()}, function(){
			$("#search-results .nano").nanoScroller();
		});
	}

	$('#search-results').animate({
			top: '0'
		}, 300, 'easeOutQuint').show(400);
		return false;
	});


/*			< Close Buttons >			*/


	$('.close, #block-footer .btn.purple').live('click', function(){
		$(this).parent().hide(400);
		$('#cont').css('height','4315px');
		$('.overlay, #block-footer').hide();
		$('#footer-menu .on').removeClass('on');
		return false;
	});


	$('.brand-detail .close').click(function(){
		$('body,html').animate({
			scrollTop: 900
		}, 800);
	});

	$('.tjoven .close-tj').live('click', function(){
		$('#talento-joven').parent().hide(400);
		$('#talento-joven').hide(400);
		return false;
	});


	$('.openDirecciones').live('click', function(){
		$(this).hide();
		$('#map-points').show(400);
		$('.contact-box').hide(400);
		$('.openenviar').show();		
	});

	$('#contact-form .btn').click(function(){  // RRN
		if (document.forma_contacto.email.value=='') { alert('Falta correo electronico...'); return false; }
		if (!isEmail(document.forma_contacto.email.value)) { alert('Correo electronico invalido...'); return false; }																							
		if (document.forma_contacto.mensaje.value=='') { alert('Falta mensaje...'); return false; }
		$('#contact-form').animate({ left: '-999em' }, 1200, 'easeOutQuint', function(){ $('#thank-msg').show(); });
		xajax_enviar_contacto(xajax.getFormValues('forma_contacto'));
		return false;
	});
	$('#contact-form-i .btn').click(function(){  // RRN
		if (document.forma_contacto.email.value=='') { alert('E-mail is required...'); return false; }
		if (!isEmail(document.forma_contacto.email.value)) { alert('Invalid E-mail...'); return false; }																							
		if (document.forma_contacto.mensaje.value=='') { alert('Message is required...'); return false; }
		$('#contact-form-i').animate({ left: '-999em' }, 1200, 'easeOutQuint', function(){ $('#thank-msg').show(); });
		xajax_enviar_contacto(xajax.getFormValues('forma_contacto'));
		return false;
	});
	$('#thank-msg .btn').click(function(){  // RRN
		$('#thank-msg').hide();
		$('#contact-form').show();
		$('#contact-form-i').show();
		return false;
	});

	$('.clscontact').live('click', function(){
		$('.contact-box').hide(400);
		$('.contact-box').css({'width' : '0', 'padding' : '0'});
		$('.openenviar').show();		
		$('#map-points').hide(400);
		if( $('#map-points').is(':visible') ) $('.openDirecciones').show();
	});
	
	$('.region_').click(function(){ 
		$('.contact-box').hide(400);
		$('.openenviar').show();	
		$('#map-points').hide(400); 
		$('.openDirecciones').show();

		$('#map-canvas').gmap('clear', 'markers');

		var reg = $(this).attr('rel');
		// $('#map-dirs').load(reg+'.html?t='+Math.random());
		// RRN
		if (reg=='mx') {
			var estado = $('#mexico-estados').val();
			var ciudad = $('#mexico-ciudades').val();
			xajax_direcciones('Mexico', estado, ciudad);
			xajax_mapa('Mexico', estado, ciudad);
		}
		if (reg=='us') {
			var estado = $('#usa-estados').val();
			var ciudad = $('#usa-ciudades').val();
			xajax_direcciones('EUA', estado, ciudad);
			xajax_mapa('EUA', estado, ciudad);
		}
		if (reg=='ca') {
			var estado = $('#ca-estados').val();
			var ciudad = $('#ca-ciudades').val();
			xajax_direcciones('Centroamerica', estado, ciudad);
			xajax_mapa('Centroamerica', estado, ciudad);
		}
		if (reg=='pe') {
			var estado = $('#peru-estados').val();
			var ciudad = $('#peru-ciudades').val();
			xajax_direcciones('Peru', estado, ciudad);
			xajax_mapa('Peru', estado, ciudad);
		}

//		var latlng = marcadores[0].split(',')
//		var lat = latlng[0];
//		var lng = latlng[1];
//		var origin = new google.maps.LatLng(lat,lng);
//		$('#map-canvas').gmap('get','map').setOptions({'center': origin, zoom: 13 });
//		for( var i=0; i < marcadores.length; i++ ){
//			$('#map-canvas').gmap('addMarker', { 'position': marcadores[i], icon: image });
//		}

	});

	$('.openenviar').live('click', function(){
		$('.openenviar').hide(400);
		$('#thank-msg').hide();
		$('.contact-box').show(400);
		$('#contact-form').show();
		$('#contact-form').css('left',0);
		$('#contact-form-i').show();
		$('#contact-form-i').css('left',0);
		$('#map-points').hide(400);
		$('.openDirecciones').show();
	});

	$('.clsdirecciones').live('click', function(){
     $('.openDirecciones').show();
	});
	
	$('.direcciones a').click(function(){
		$('.contact-box').hide(400);
		$('.openenviar').show();	
		$('#map-points').hide(400);
		$('.openDirecciones').show();
		return false;
	});
	
	
/*			< Sliders >			*/

	$('#home-slider').iosSlider({
		snapToChildren: true,
		navNextSelector: '#next-home',
		navPrevSelector: '#prev-home',
		infiniteSlider: true,
		onSlideComplete: slideComplete,
		onSliderLoaded: sliderLoaded
	});

	// $('#results').iosSlider({
	// 	snapToChildren: true,
	// 	navNextSelector: '#next-results',
	// 	navPrevSelector: '#prev-results',
	// 	infiniteSlider: true
	// });

	$('#brands-slider01').iosSlider({
		snapToChildren: true,
		navNextSelector: '#next-brands01',
		navPrevSelector: '#prev-brands01',
		infiniteSlider: false
	});
	$('#brands-slider02').iosSlider({
		snapToChildren: true,
		navNextSelector: '#next-brands02',
		navPrevSelector: '#prev-brands02',
		infiniteSlider: false
	});
	$('#brands-slider03').iosSlider({
		snapToChildren: true,
		navNextSelector: '#next-brands03',
		navPrevSelector: '#prev-brands03',
		infiniteSlider: false
	});
	$('#brands-slider04').iosSlider({
		snapToChildren: true,
		navNextSelector: '#next-brands04',
		navPrevSelector: '#prev-brands04',
		infiniteSlider: false
	});
	$('#brands-slider05').iosSlider({
		snapToChildren: true,
		navNextSelector: '#next-brands05',
		navPrevSelector: '#prev-brands05',
		infiniteSlider: false
	});
	
	$('#aboutus-slider').iosSlider({
		snapToChildren: true,
		navNextSelector: '#next-aboutus',
		navPrevSelector: '#prev-aboutus',
		navSlideSelector: $('#nav-aboutus a'),
		infiniteSlider: true,
		onSlideChange: function(args){ 
			var index = args.currentSlideNumber;
			$('#nav-aboutus .on').removeClass('on');
			$('#nav-aboutus a:eq(' + index +')').addClass('on');
		}
	});
	
	function slideComplete(args) {
		
		$(args.sliderObject).find('.cont').attr('style', '');

		$(args.currentSlideObject).find('.cont').animate({
			left: '54%',
			opacity: 1
		}, 300, 'easeOutQuint');
		
	}
	
	function sliderLoaded(args) {
		
		$(args.sliderObject).find('.cont').attr('style', '');
		
		$(args.currentSlideObject).find('.cont').animate({
			left: '54%',
			opacity: 1
		}, 300, 'easeOutQuint');
		
	}
	
	
/*			< Tabs >			*/

	$.tabs("select-menu");

	$('#product-menu a').click(function(){
		var cat = $(this).attr('rel');
		$.tabs("prod-detail0" + cat);
		$('.product-detail li:eq(1)').removeClass('on');
		$('.product-detail li:eq(0)').addClass('on');
		$('#info01, #info02, #info03, #info04, #info05, #info06').show();
		$('#recipe01, #recipe02, #recipe03, #recipe04, #recipe05, #recipe06').hide();		
	});
	
/*			< Scroller >			*/

	$('.product-detail .btn').click(function(){	$(".nano").nanoScroller(); });
	$(".nano").nanoScroller();
	
	
/*			< Product Hover >			*/

	$('.product').hover(
		function(){ $(this).find('.cont').show(200); },
		function(){ $(this).find('.cont').hide(); }
	);
	

/*			< Brands Detail >			*/

	$('.brands-slider a').click(function(){
		var categoria_marca = $(this).attr('rel');  // RRN
		$('.brands-slider .on').removeClass('on'); $(this).addClass('on');
		$('.brand-detail').show(300);
		$('body,html').animate({
			scrollTop: 1200
		}, 800);
		xajax_detalle_marca(categoria_marca);  // RRN
		return false;
	});
	$('.brand-detail .close').click(function(){
		$('.brand-detail').hide(400);
		$('.brands-slider .on').removeClass('on');
		return false;
	});
	

/*			< Tooltips >			*/

	$('.tiptip').tipTip({ delay: 0, defaultPosition: 'top' });
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('.tiptip').tipTip({ activation: 'focus' });
	}
	
/*			< GMap >			*/

	var markers = new Array();
	markers['mx'] = new Array();
	markers['mx'][0] = "25.665376, -100.34813";
	markers['mx'][1] = "25.65937, -100.284148"; 
	markers['mx'][2] = "25.65937, -100.284148";
	markers['mx'][3] = "25.709363, -100.303052";
	markers['spgg'] = new Array();
	markers['spgg'][0] = "25.637551, -100.362105";
	markers['us'] = new Array();
	markers['us'][0] = "33.427323, -112.083446";
	markers['ca'] = new Array();
	markers['ca'][0] = "9.998775, -84.22343";
	markers['pe'] = new Array();
	markers['pe'][0] = "-12.063264, -76.969551";
	
	var image = 'assets/img/icons/mapmarker.png';
	$('#map-canvas').gmap({center: '15.961329, -91.948244', zoom: 4, mapTypeControl: false, panControl: false, streetViewControl: false, scaleControl: false, zoomControl: true, zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.RIGHT_CENTER
    }, scrollwheel: false, styles: [ 
		{ stylers: [ { saturation: -100 } ] },
		{ featureType: "road", elementType : "geometry.stroke", stylers : [ { visibility : "simplified" }, { saturation : -90 } ] },
		{ featureType: "road", elementType : "geometry", stylers: [ { visibility : "simplified" } ] },
		{ featureType: "road", elementType : "labels.text", stylers: [ { visibility : "simplified" } ] } 
	] }).bind('init', function () { 
		/*for( var i=0; i < markers['mty'].length; i++ ){
			$('#map-canvas').gmap('addMarker', { 'position': markers['mty'][i], icon: image });
		}*/
	});
	
	$('.map-link').live('click',function(){
		var cd = $(this).attr('title');
		var num = $(this).attr('rel');
		var id_ubicacion = $(this).attr('rel');
//		var latlng = markers[cd][num].split(',')
//		var lat = latlng[0];
//		var lng = latlng[1];
//		var origin = new google.maps.LatLng(lat,lng);
//		$('#map-canvas').gmap('get','map').setOptions({'center': origin });
		$('.contact-box').hide(400);
		$('.openenviar').show();	
//		$('#map-points').hide(400);
//		$('.openDirecciones').show();
		xajax_reubica(id_ubicacion);
	});

/*			< Dropkick >			*/

	$('.drop').dropkick({ width: 164  });

	$('#region').dropkick({ 
		change: function (value, label) {
			var idioma = $('#idioma').val();
			xajax_change_region(value,idioma);
		}		
	});

	$('.drop-estado').dropkick({ 
		width: 164,
		change: function (value, label) {
			var region = $('#region').val();
			xajax_change_estado(region,value);
			xajax_mapa(region, value, '');
		}
	});

	$('.drop-ciudad').dropkick({ 
		width: 164,
		change: function (value, label) {
			$('#map-canvas').gmap('clear', 'markers');
			var region = $('#region').val();
			var estado = $('#estado').val();
			var ciudad = $('#ciudad').val();
			xajax_direcciones(region, estado, ciudad);
			xajax_mapa(region, estado, ciudad);
		}
	});

	
	$(".dk_options_inner").mCustomScrollbar({
		scrollInertia:250
	});
	$(".dk_toggle").live('click', function(){
		var customScrollbar=$(this).parent().find(".mCSB_scrollTools");
		customScrollbar.css({"opacity":0});
		$(this).parent().find('.dk_options_inner').mCustomScrollbar("update");
		customScrollbar.animate({opacity:1},"slow");
	});



/*			< Social Media Grid >			*/

/*
	$('#socialist').socialist({
			networks: [
				{name:'facebook',id:'sigmaalimentos'},
				//{name:'twitter',id:'sigmaalimentosd'},
				//{name:'instagram',id:'adsgm',apiKey:'d813bcf582284ea7af815249729b96cb'},
				//{name:'rss',id:'http://webmedia.daniloblack.com.mx/sigma/news10.xml'}
				//{name:'rss',id:'http://proyectos.grupomx.com/sigma/xml/news_i.xml?t='+Math.random()}
			 ],
			maxResults: 3,
			fields:['source','heading','text','date','image','followers','likes']
	});
*/
	
	$('#socialist').dcSocialStream({
		feeds: {
			facebook: {
				id: '191742793241',
				out: 'title,intro,text,user,share'
			},
			twitter: {
				id: 'sigmaalimentos'
			}
		},
		rotate: {
			delay: 0
		},
		twitterId: 'sigmaalimentos',
		control: false,
		filter: false,
		wall: true,
		cache: false,
		order: 'date',
		max: 'limit',
		limit: 3,
		iconPath: 'assets/img/bg/',
		imagePath: 'assets/img/dcsns-dark/'
	});

	$('.dcsns-rss a').live('click', function(){
		var id = $(this).attr('href');
		$('#news'+id).parent().show(400);
		$('#news'+id).show(400);
		return false;
	});

	$('.btn-tj').live('click', function(){
		$('#talento-joven').parent().show(400);
		$('#talento-joven').show(400);
		return false;
	});

/*			< Isotope Menu >			*/

	$('#no-filter').click(function(){ $('#news-menu .btn').parent().removeClass('hover').removeClass('off'); $('#socialist ul').isotope({ filter: '' }); });
	$('#filter-twitter').click(function(){ $('#news-menu .btn').parent().removeClass('hover').addClass('off'); $(this).parent().addClass('hover').removeClass('off'); $('#socialist ul').isotope({ filter: '.dcsns-twitter' }); });
	$('#filter-facebook').click(function(){ $('#news-menu .btn').parent().removeClass('hover').addClass('off'); $(this).parent().addClass('hover').removeClass('off'); $('#socialist ul').isotope({ filter: '.dcsns-facebook' }); });
	$('#filter-news').click(function(){ $('#news-menu .btn').parent().removeClass('hover').addClass('off'); $(this).parent().addClass('hover').removeClass('off'); $('#socialist ul').isotope({ filter: '.dcsns-rss' }); });


/*			< Parse location from URL >			*/

	initParseLocation();

});

function openFB(w,h,url){
	w = parseInt(w);
	h = parseInt(h);
	$.fancybox({
		href: url + '',
		width : w,
		height : h,
		type : 'iframe',
		autoSize  : false
	});
}

function isEmail(string) {
	if (string.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
		return true;
	else
		return false;
}
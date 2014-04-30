$(document).ready(function(){

	//Navigation - category slider
	$(".categoryContainer").click(function(){
		$(".categorySlider").slideToggle(100);
	});

	$(".categoryHover").mouseenter(function(){
		$(".currentCategory").fadeTo(100,1);
		$(".triangle").fadeTo(100,1);

	});

	$(".categoryHover").mouseleave(function(){
		$(".currentCategory").fadeTo(100,0);
		$(".triangle").fadeTo(100,0.5);
		$(".categorySlider").slideUp(100);
	});

	//Link descrption on hover
	$(".accordionElement").mouseenter(function(){
		$(this).children(".accordionExpander").slideDown(0);
	});
	$(".accordionHeader").mouseleave(function(){
		$(".accordionExpander").slideUp(0);
	});
	$(".accordionExpander").mouseenter(function(){
		$(this).slideUp(0);
	});
	$(".accordionExpander").mouseleave(function(){
		$(this).slideUp(0);
	});

	//Swaps site icon to magnifier on hover
	var originalImgSrc;

	$(".accordionHeader").mouseenter(function(){
		originalImgSrc = $(this).children(".siteIcon").attr('src');
		$(this).children(".siteIcon").attr("src","../img/magnifier.png");
	});

	$(".accordionHeader").mouseleave(function(){
		$(this).children(".siteIcon").attr("src",originalImgSrc);
	});

	//Masonry - cascading grid - http://masonry.desandro.com/
	var $container = $('.contentContainer');
	$(function(){        
	   //$container.imagesLoaded(function(){                    
	      $container.masonry({
	         itemSelector: '.listWindow',
	         isFitWidth: true,
	      });
	   //});
	});

	//Leftovers from accordion which doesn't work properly with Masonry
	/*
	$(".accordionElement").each(function() {
		var $dropdown = $(this);

		$(".siteIcon", $dropdown).click(function(e) {
			e.preventDefault();
			$div = $(".accordionExpander", $dropdown);
			$div.slideToggle(100);
			$(".accordionExpander").not($div).slideUp(100);
			return false;
		});

	});
	
	$("html").click(function(){
		$(".accordionExpander").slideUp(100);
	});

	$(".siteTitle").click(function(){
		event.stopPropagation();
	});
	*/
});
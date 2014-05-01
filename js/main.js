$(document).ready(function(){
	
	//Google Analytics
	 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	  ga('create', 'UA-49779109-2', 'dominikdsgnr.github.io');
	  ga('send', 'pageview');

	//Navigation - category slider
	$(".categoryContainer").click(function(){
		$(".categorySlider").slideToggle(100);
	});

	$(".categoryHover").mouseenter(function(){
		$(".currentCategory").fadeTo(100,1);
		$(".hamburger").fadeTo(100,1);

	});

	$(".categoryHover").mouseleave(function(){
		$(".currentCategory").fadeTo(100,0);
		$(".hamburger").fadeTo(100,0.5);
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

	/* Leftovers from accordion which doesn't work properly with Masonry
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
$(document).ready(function(){

	/*Includes from localhost
		$(".preload").load("http://localhost/DopeLists/include_preload.html");
		$(".topWrapper").load("http://localhost/DopeLists/include_top.html");
		$(".frankensteinHamburger").load("http://localhost/DopeLists/include_menu.html");
		$(".adContainer").load("http://localhost/DopeLists/include_ad.html");
		$(".footerContainer").load("http://localhost/DopeLists/include_footer.html");
	*/

	//Includes from dopelists.com
		$(".preload").load("http://dopelists.com/include_preload.html");
		$(".topWrapper").load("http://dopelists.com/include_top.html");
		$(".frankensteinHamburger").load("http://dopelists.com/include_menu.html");
		$(".adContainer").load("http://dopelists.com/include_ad.html");
		$(".footerContainer").load("http://dopelists.com/include_footer.html");
	
	//Google Analytics
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	  ga('create', 'UA-49779109-1', 'dopelists.com');
	  ga('send', 'pageview');

	//Twitter API
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

	//Navigation slider
	$(".frankensteinHamburger").click(function(){
		$(".navigationSliderWrapper").slideToggle(100);
	});

	$(".frankensteinHamburger").mouseleave(function(){
		$(".navigationSliderWrapper").slideUp(100);
	});

	//Highlighting categories
	$("#A1").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C1").toggleClass("highlightListWindow");
	});
	$("#A2").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C2").toggleClass("highlightListWindow");
	});
	$("#A3").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C3").toggleClass("highlightListWindow");
	});
	$("#A4").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C4").toggleClass("highlightListWindow");
	});
	$("#A5").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C5").toggleClass("highlightListWindow");
	});
	$("#A6").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C6").toggleClass("highlightListWindow");
	});
	$("#A7").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C7").toggleClass("highlightListWindow");
	});
	$("#A8").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C8").toggleClass("highlightListWindow");
	});
	$("#A9").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C9").toggleClass("highlightListWindow");
	});
	$("#A10").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C10").toggleClass("highlightListWindow");
	});
	$("#A11").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C11").toggleClass("highlightListWindow");
	});
	$("#A12").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C12").toggleClass("highlightListWindow");
	});
	$("#A13").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C13").toggleClass("highlightListWindow");
	});
	$("#A14").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C14").toggleClass("highlightListWindow");
	});
	$("#A15").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C15").toggleClass("highlightListWindow");
	});
	$("#A16").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C16").toggleClass("highlightListWindow");
	});
	$("#A17").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C17").toggleClass("highlightListWindow");
	});
	$("#A18").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C18").toggleClass("highlightListWindow");
	});
	$("#A19").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C19").toggleClass("highlightListWindow");
	});
	$("#A20").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C20").toggleClass("highlightListWindow");
	});
	$("#A21").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C21").toggleClass("highlightListWindow");
	});
	$("#A22").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C22").toggleClass("highlightListWindow");
	});
	$("#A23").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C23").toggleClass("highlightListWindow");
	});
	$("#A24").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C24").toggleClass("highlightListWindow");
	});
	$("#A25").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C25").toggleClass("highlightListWindow");
	});
	$("#A26").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C26").toggleClass("highlightListWindow");
	});
	$("#A27").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C27").toggleClass("highlightListWindow");
	});
	$("#A28").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C28").toggleClass("highlightListWindow");
	});
	$("#A29").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C29").toggleClass("highlightListWindow");
	});
	$("#A30").click(function(){
		$(".listWindow").removeClass("highlightListWindow");
		$("#C30").toggleClass("highlightListWindow");
	});

	//Link description on hover
	$(".linkContainer").mouseenter(function(){
		$(this).children(".linkInfo").slideDown(0);
	});
	
	$(".linkContainerTwo").mouseleave(function(){
		$(".linkInfo").slideUp(0);
	});

	$(".linkInfo").mouseenter(function(){
		$(this).slideUp(0);
	});

	$(".linkInfo").mouseleave(function(){
		$(this).slideUp(0);
	});

	//Swaps site icon to magnifier on hover
	var originalImgSrc;

	$(".linkContainerTwo").mouseenter(function(){
		originalImgSrc = $(this).children(".linkIcon").attr('src');
		$(this).children(".linkIcon").attr("src","../img/magnifier.png");
	});

	$(".linkContainerTwo").mouseleave(function(){
		$(this).children(".linkIcon").attr("src",originalImgSrc);
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
});
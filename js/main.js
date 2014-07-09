//----------------------------------------------------------------------------------//
//
// DOM READY
//
//----------------------------------------------------------------------------------//
$(document).ready(function(){

	//----------------------------------------------------------------------------------//
	// GOOGLE ANALYTICS
	//----------------------------------------------------------------------------------//

	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	  ga('create', 'UA-49779109-1', 'dopelists.com');
	  ga('send', 'pageview');


	//----------------------------------------------------------------------------------//
	// TWITTER API
	//----------------------------------------------------------------------------------//

	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");


	//----------------------------------------------------------------------------------//
	// INCLUDES LOADING
	//----------------------------------------------------------------------------------//

	//from localhost
	//$(".top").load("http://localhost/Dev_DopeLists/include_top.html"); $(".footer").load("http://localhost/Dev_DopeLists/include_footer.html");

	//from dopelists.com
	$(".top").load("http://dopelists.com/include_top.html"); $(".footer").load("http://dopelists.com/include_footer.html");


	//----------------------------------------------------------------------------------//
	// ANCHOR LINKS
	//----------------------------------------------------------------------------------//

	//Goes through every .listWindow and adds inside it <a> link with href= of .listWindow id
	$(".listWindow").each(function() {

		var currentId = $(this).attr("id");

		$(this).children("h2").before("<a class='anchor' href=#" + currentId + ">#" + currentId + "</a>");
	});

	$(".listWindow").mouseenter(function() {
		$(this).children(".anchor").css("opacity","1");
	});

	$(".listWindow").mouseleave(function() {
		$(this).children(".anchor").css("opacity","0");
	});


	//----------------------------------------------------------------------------------//
	// LINK DESCRIPTIONS
	//----------------------------------------------------------------------------------//

	// Removes empty description divs so they don't show up empty
	$(".listWindow > div > li > div:empty").remove();

	// Displays description on hover
	$('.listWindow > div > li').mouseenter(function() {
		$(this).children('div').slideDown(0);
	});
	$('.listWindow > div > li').mouseleave(function() {
		$(this).children('div').slideUp(0);
	});
	$('.listWindow > div > li > div').mouseenter(function() {
		$(this).slideUp(0);
	});

	// Displays description on focus
	$('.listWindow > div > li').focusin(function() {
		$(this).children('div').slideDown(0);
	});
	$('.listWindow > div > li').focusout(function() {
		$(this).children('div').slideUp(0);
	});


	//----------------------------------------------------------------------------------//
	// FAVICON LOADER: Prepends blankfavicon.png before every link and then changes it to site favicon
	//----------------------------------------------------------------------------------//

	//Goes through each list element a
	$(".listWindow > div > li > a").each(function() {

		//Prepends blankfavicon <img> in list element a (kind of doesn't work on Chrome and Firefox)
		$(this).prepend("<img src='../img/blankfavicon.png'>");

		//Gets href value of list element a
		var siteurl = $(this).attr("href");

		//Sets first <img> src as Google favicons service with added site url
		//Alternatives:
		// https://s2.googleusercontent.com/s2/favicons?domain_url= [best]
		// https://s2.googleusercontent.com/s2/favicons?domain= [best]
		// https://plus.google.com/_/favicon?domain_url= [good]
		// https://plus.google.com/_/favicon?domain= [good]
		// http://www.google.com/s2/favicons?domain= [unreliable, sometimes blocked by anti-spam bots]
		// http://g.etfv.co/ [slow]
		// http://fvicon.com/ [slow and unreliable, but many features]
		$(this).children("img:nth-of-type(1)").attr("src","https://s2.googleusercontent.com/s2/favicons?domain_url=" + siteurl);

		//If second <img> exists (manually inserted <img> inside a - because sometimes Google favicons don't work)
		if ($(this).children("img:nth-of-type(2)").length > 0) {

				//Then it removes first <img> in a
				$(this).children("img").first().remove();
		};
	});

	});


//----------------------------------------------------------------------------------//
//
// AJAX STOP
//
//----------------------------------------------------------------------------------//
$(document).ajaxStop(function() {

	//----------------------------------------------------------------------------------//
	// MASONRY - cascading grid - http://masonry.desandro.com/
	//----------------------------------------------------------------------------------//

	$(function(){        
		$(".lists").masonry({
			columnWidth: 10,
			itemSelector: '.listWindow',
			transitionDuration: '0'
		});
	});


	//----------------------------------------------------------------------------------//
	// TOP BORDER COLOR CHANGE
	//----------------------------------------------------------------------------------//

	$(".top > a:nth-of-type(1)").mouseenter(function() {
		$(".top").css("border-color","rgba(0,0,0,0.5)");
	});

	$(".top > a:nth-of-type(1)").mouseleave(function() {
		$(".top").css("border-color","rgba(0,0,0,0.7)");
	});


	//----------------------------------------------------------------------------------//
	// NAVIGATION BUTTONS CREATOR
	//----------------------------------------------------------------------------------//

	$(".navigation > .buttons").append( "<span class='show'>All</span>" );

	$(".listWindow").each(function() {

		$(".navigation > .buttons").append(
			"<div class='pressed' value='" + $(this).attr("id") + "'>" + $(this).children("h2").html() + "</div>"
		);

	}); 


	// divs for no result, used by function below
	$(".lists").before("<div class='listsInfo'></div>");


	//----------------------------------------------------------------------------------//
	// NAVIGATION BUTTONS CHECKER listWindowCheckForPressed();
	//----------------------------------------------------------------------------------//
	// Checks what lists are visible and makes relevant navigation buttons pressed
	function listWindowCheckForPressed() {

		$(".listWindow").each(function() {

			if ( $(this).css("display") == "block" ) {
				$( ".navigation > .buttons > div[value=" + $(this).attr("id") + "]" ).addClass("pressed");
				$( ".navigation > .buttons > div[value=" + $(this).attr("id") + "] > .add" ).text("-");
			}

			else if ( $(this).css("display") == "none" ) {
				$( ".navigation > .buttons > div[value=" + $(this).attr("id") + "]" ).removeClass("pressed");
				$( ".navigation > .buttons > div[value=" + $(this).attr("id") + "] > .add" ).text("+");
			}

		});

		if( $(".listWindow:visible").length == $(".listWindow").length ) {
			$( ".navigation > .buttons > .show" ).addClass("pressed");
			//$( ".navigation > .buttons > .show" ).text("Show All");
			$(".listsInfo").hide();
		} else {
			$( ".navigation > .buttons > .show" ).removeClass("pressed");
			//$( ".navigation > .buttons > .show" ).text("Show All");
		}

		if ( $(".listWindow:visible").length == 0 ) {
			$(".listsInfo").show();
			$(".listsInfo").text("No results...");
		} else {
			$(".listsInfo").hide();
		}

		$(".lists").masonry();

	};

	//
	listWindowCheckForPressed();

	// List hash 
	$(".anchor").click(function() {
		$(".listWindow").show();
		listWindowCheckForPressed();
		$("#livesearch").val("");
	});


	//----------------------------------------------------------------------------------//
	// NAVIGATION BUTTONS
	//----------------------------------------------------------------------------------//

	$(".navigation > .buttons > div").click(function() {
		$(".listsInfo").hide();
		$(".listWindow").hide();

		$(".listWindow#" + $(this).attr("value") ).show();
		$("html, body").animate({ scrollTop: $(".lists").offset().top }, '1000', 'swing');
		window.location.hash = "";
		listWindowCheckForPressed();
		$("#livesearch").val("");

		return false;
	});

	// Show all button
	$(".navigation > .buttons > .show").click(function() {
		$(".listWindow").show();

		window.location.hash = "";
		listWindowCheckForPressed();
		$("#livesearch").val("");

		return false;
	});


	//----------------------------------------------------------------------------------//
	// LIVE SEARCH
	//----------------------------------------------------------------------------------//
	$('#livesearch').keyup(function() {
		var f = $(this).val();
		var regex = new RegExp(f, 'gi');

		window.location.hash = "";
		$('.listWindow').hide();

		$("h2").each(function() {

			if($(this).html().match(regex)) {
				$(this).parent(".listWindow").show();
			}
		});

		$("h3").each(function() {

			if($(this).html().match(regex)) {
				$(this).parent("div").parent(".listWindow").show();
			}
		});

	listWindowCheckForPressed();
	});

	// Scroll on Enter
	$("#livesearch").keypress(function(e) {
		if(e.which == 13) {
			if( $(".listsInfo:visible").length == 1 ) {
				$("html, body").animate({ scrollTop: $(".listsInfo").offset().top }, '1000', 'swing');
			} else {
			$("html, body").animate({ scrollTop: $(".lists").offset().top }, '1000', 'swing');
			}
		}
	});


	//----------------------------------------------------------------------------------//
	// HASHLINKS FIX
	//----------------------------------------------------------------------------------//

	if ( $(window.location.hash).length > 0 ) {
		$("html, body").animate({ scrollTop: $(window.location.hash).offset().top }, '1000', 'swing');
	}
});
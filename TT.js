/*FileName: TT.js
Last updated: July 4, 2017
Author: AJ*/

/********************* JAVASCRIPT FUNCTIONS *********************/
/************************* Site-wide ****************************/

/* Returns the date each web page was last modified in the format 1-January-2013 */
function getLastModified()
{
	let lastMod = new Date(document.lastModified);
	let months = new Array("January", "February", "March", "April", "May", "June", "July", "August",
							"September", "October", "November", "December");
	
	document.write("Last Modified: " + lastMod.getDate() + "-" + months[lastMod.getMonth()] + "-" + lastMod.getFullYear());
}

/************************* Index page ****************************/

// Start the flashing green lights in the GRID
let releasedNodes = document.getElementsByClassName("released");

let lightOn = false;

function showStatusLights()
{
	setInterval(startGreenFlashingLights, 1000);
}

function startGreenFlashingLights()
{
	for(let count = 0; count < releasedNodes.length; count++)
	{
		releasedNodes[count].style.visibility = lightOn ? "visible" : "hidden";
	}
	
   	lightOn = !lightOn;
}

/********************* JAVASCRIPT EVENT LISTENERS *********************/

window.addEventListener("load", showStatusLights);

/************************** JQUERY ****************************/

/* Start of jQuery function; this loads all jQuery when the website loads */
$(function(){
	
/************************* Site-wide ****************************/
	
	$(".navList a").each(function() {
	    if ($(this).prop("href") == window.location.href)
	    	$(this).addClass("current");
	});
	
	$(".footer a").each(function() {
	    if ($(this).prop("href") == window.location.href)
	    	$(this).addClass("current");
	});

	let hamburgerIcon = $(".responsiveNav");
	hamburgerIcon.on("click", function(e){
		$(".responsiveNavList").slideDown(500);
		e.preventDefault();
	});

/************************* Index page ****************************/

let tabNodes = document.getElementsByClassName("itemTabs");

for(let count = 0; count < tabNodes.length; count++) {
	$(".tab" + (count + 1)).on("click", function(){
		$(".details" + (count + 1)).slideToggle(500, "swing");
	});
	
}

/******************* FOR MOBILE GRID DISPLAY **********************/



/*************************** Addons page **************************/
	
	let disclaimerDirect = $("#disclaimerDirect");
	disclaimerDirect.on("click", function(e) {
        $.scrollTo($(this).attr("href"));
    });
    
    let mapSlides1 = $("#mapSlides1"); 
    mapSlides1.cycle({
		fx: 'scrollHorz',
		timeout: 0,
		speed: 500,
		prev: '#prevSlides1',
		next: '#nextSlides1'
	});
	
	let mapSlides2 = $("#mapSlides2");
	mapSlides2.cycle({
		fx: 'scrollHorz',
		timeout: 0,
		speed: 500,
		prev: '#prevSlides2',
		next: '#nextSlides2'
	});
}); /* End of jQuery function */











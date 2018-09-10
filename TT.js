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
let nodesLeft = document.getElementsByClassName("leftGreenLight");
let nodesRight = document.getElementsByClassName("rightGreenLight");

let lightOn = false;

function showStatusLights()
{
	setInterval(startGreenFlashingLights, 1000);
}

function startGreenFlashingLights()
{
	for(let count = 0; count < nodesLeft.length; count++)
	{
		nodesLeft[count].style.visibility = lightOn ? "visible" : "hidden";
		nodesRight[count].style.visibility = lightOn ? "hidden" : "visible";
	}
	
   	lightOn = !lightOn;
}

/********************* JAVASCRIPT EVENT LISTENERS *********************/

window.addEventListener("load", showStatusLights);

/************************** JQUERY ****************************/

/* Start of jQuery function; this loads all jQuery when the website loads */
$(function(){
	
/************************* Site-wide ****************************/
	
	$("#navList a").each(function() {
	    if ($(this).prop("href") == window.location.href)
	    	$(this).addClass("current");
	});
	
	$("#footer a").each(function() {
	    if ($(this).prop("href") == window.location.href)
	    	$(this).addClass("current");
	});

/************************* Index page ****************************/

	let messageHeader = $("#messageHeader");
	messageHeader.on("click", function(){
		$("#introduction").slideToggle(500, "swing");
	});
	
	let messageDirect = $("#messageHeader");
	messageDirect.on("click",function(e){
        $.scrollTo($(this).attr("href"));
    });    
	
	let modalLink = $("#modalLink");
	modalLink.on("click", function(e){
		$("#mask").show();
		e.preventDefault();
	});
	
	let mask = $("#mask");
	mask.on("click", function(e){
		$("#mask").hide();
	});
	

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











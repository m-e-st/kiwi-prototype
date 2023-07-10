/***
 *	TIM-Dispatcher.js 
 *
 *	Copyright 2022 Michael Stumpp <mstumpp@hwn.de>
 *
 */
 
let username = none;

/*** initialization on document ready ***/
/*
$(document).ready(function(){
  // jQuery initialization goes here...
}); 
*/


document.addEventListener("DOMContentLoaded", function(event) { 
  // DOM initialization goes here...
  //~ if (checkIntranetAccess() == false) openModal('offline');
  
  //~ intervalTimer(true);
});


/***
 * displays modal element
 * 
 */
function openModal(modalName) {
	document.getElementById(modalName).style.display='block';
}

function closeModal(modalName) {
	document.getElementById(modalName).style.display='none';
}

/***
 * shows server status of all server elements using opacity
 * 
 */

function logon() {
}

/***
 * check online status loading an image
 * 
 */

function logoff() {
}


 

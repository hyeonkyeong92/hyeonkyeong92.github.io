// Store the meta element
var viewport_meta = document.getElementById('viewport-meta');

// Define our viewport meta values
var viewports = {
		default: viewport_meta.getAttribute('content'),
		landscape: 'width=990'
	};

// Change the viewport value based on screen.width
var viewport_set = function() {
		if ( screen.width > 768 )
			viewport_meta.setAttribute( 'content', viewports.landscape );
		else
			viewport_meta.setAttribute( 'content', viewports.default );
	}

// Set the correct viewport value on page load
viewport_set();

// Set the correct viewport after device orientation change or resize
window.onresize = function() { 
	viewport_set(); 
}


//==============Button Click Event

// var nav = document.getElementsByClassName('nav-wrap');
// function openNav(){
// 	nav.addClass('openNavAction');
// }

const html = document.querySelector('html');
const headerBtn = html.querySelector('.toggler');

const navWrap = document.querySelector('.nav-wrap');
const headerBtnWrap = document.querySelector('.h-menu');

headerBtn.addEventListener('click',() =>{
	navWrap.classList.toggle('active');
	headerBtnWrap.classList.toggle('active');
});




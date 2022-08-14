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


//==============Scroll Event

function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
  } //높이값 확인
  
  function handleScroll() {
    //공통함수1
    const elems = document.querySelectorAll('.obj-ani');
    const elems2 = document.querySelectorAll('.obj-vertical-ani');
    
    elems.forEach(elem => {
        if (isElementUnderBottom(elem, -20)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateY(70px)';
  
        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(0px)';
  
        }
    })
    // event1

    elems2.forEach(elem => {
        var topMove = 0;
        if (isElementUnderBottom(elem, -20)) {
            topMove = topMove + 2;
            elem.style.transform = 'translate3d(0,70px,0)';
            // elem.style.transform = 'translate3d(' + -topMove + ' px, 0px,  0px)';
  
        } else {
            topMove = topMove - 2;
            elem.style.transform = 'translate3d(0,0px,0)';
            // elem.style.transform = 'translate3d(' + -topMove + ' px, 0px,  0px)';
  
        }
        console.log(topMove);
    })
  
  }
  //event2

  
  window.addEventListener('scroll', handleScroll);





  // =================== text scroll event================== //
  //get in touch button

//on hover text transform scale
$(document).ready(function(){
    $('.fs-parallex-effect').each(function(){
        var splitText =  $(this).find('.parallex-title').text();      
         console.log(splitText);

        for (var i = 0; i < splitText.length; i++) {
            $(this).find('.parallex-title').append('<span class="letter"><span>'+splitText.charAt(i)+'</span></span>');
        }

        // $('.parallex-title .letter').each(function(){
        //     var letterVal = $(this).text();
        //     if(letterVal == " "){
        //         $(this).addClass('space');
        //     }
        // });

        // var letterLength = $('.parallex-title').children('.letter').length;        
        // var transitionTime = (0.3)/(letterLength);

        // for(k = 1; k <= letterLength; k++){
        //     $('.letter:nth-child('+k+')').css('animation-duration',transitionTime+'s');
        //     transitionTime = transitionTime + 0.04;
        // }
    });
});


//left and right move text with scroll
var lastScrollTop = 0;
var leftMove = 0;
// var rightMove = 0;

// $(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (st > lastScrollTop){
//        leftMove = leftMove + 5;
//        $('.left-side').find('.parallex-title').css({"transform" : "translate3d(" + -leftMove + "px, 0px,  0px)"});
       
//        rightMove = rightMove - 5;
//        $('.right-side').find('.parallex-title').css({"transform": "translate3d(" + -rightMove + "px, 0px,  0px)"});
//    }
//    else{
//         leftMove = leftMove - 5;
//         $('.left-side').find('.parallex-title').css({"transform": "translate3d(" + -leftMove + "px, 0px,  0px)"});

//         rightMove = rightMove + 5;    
//        $('.right-side').find('.parallex-title').css({"transform": "translate3d(" + -rightMove + "px, 0px,  0px)"});
//    }
//    lastScrollTop = st;
// });

$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       leftMove = leftMove + 2;
       $('.left-side').find('.parallex-title').css({"transform" : "translate3d(" + -leftMove + "px, 0px,  0px)"});
       
   }
   else{
        leftMove = leftMove - 2;
        $('.left-side').find('.parallex-title').css({"transform": "translate3d(" + -leftMove + "px, 0px,  0px)"});

   }
   lastScrollTop = st;
});


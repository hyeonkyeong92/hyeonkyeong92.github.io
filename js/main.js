// Store the meta element
// var viewport_meta = document.getElementById('viewport-meta');

// Define our viewport meta values
// var viewports = {
// 		default: viewport_meta.getAttribute('content'),
// 		landscape: 'width=990'
// 	};

// Change the viewport value based on screen.width
// var viewport_set = function() {
// 		if ( screen.width > 768 )
// 			viewport_meta.setAttribute( 'content', viewports.landscape );
// 		else
// 			viewport_meta.setAttribute( 'content', viewports.default );
// 	}

// Set the correct viewport value on page load
// viewport_set();

// Set the correct viewport after device orientation change or resize
// window.onresize = function() { 
// 	viewport_set(); 
// }


//===================== Nav Button Click Event=====================//

(function(){
    const headerBtn = document.querySelector('.toggler');

    const navWrap = document.querySelector('.nav-wrap');
    const headerBtnWrap = document.querySelector('.h-menu');
    
    const navList = document.querySelectorAll('.nav-lists .list');
    
    function closeNavHandler(){
        navWrap.classList.remove('active');
        headerBtnWrap.classList.remove('active');
    }

    for(let i = 0; i<navList.length; i++){
        navList[i].addEventListener('click',closeNavHandler);
    }

    function menuBtnHandler(){
        navWrap.classList.toggle('active');
        headerBtnWrap.classList.toggle('active');
    }


    headerBtn.addEventListener('click', menuBtnHandler);
    
})();



//==========================Scroll Event===========================//

function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
} //높이값 확인



  function handleScroll() {
    //공통함수1
    const elems = document.querySelectorAll('.obj-ani');
    const elems2 = document.querySelectorAll('.obj-vertical-ani');
    const elems3 = document.querySelectorAll('.obj-horizontal-ani');
    
    elems.forEach(elem => {
        if (isElementUnderBottom(elem, -20)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateY(70px)';
            elem.style.transitionDuration = '.4s'
  
        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(0px)';
  
        }
    })
    // event1

    elems2.forEach(elem => {
        // var topMove = 0;
        if (isElementUnderBottom(elem, -20)) {
            // elem.style.transform = `translate3d(${+ -topMove}px,0px, 0px)`;
            elem.style.transform = `translate3d(200px,0px, 0px)`;
       

        } else {
            elem.style.transform = `translate3d(-50px,0px, 0px)`;
            // elem.style.transform = 'translate3d(' + -topMove + ' px, 0px,  0px)';
  
        }

    })
    // event2

    elems3.forEach(elem =>{
        if (isElementUnderBottom(elem, -80)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateX(70px)';
            elem.style.transitionDuration = '.8s'
    
        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateX(0px)';
    
        }
    })
    // event3

    //Header Background Change
    const burgerElem = document.querySelector('.hamburger');

    const posY = this.window.pageYOffset;
    const sectionAbout = this.document.querySelector('#section-about-wrap').getBoundingClientRect().top;
    const sectionAnimation = this.document.querySelector('#section-animation-wrap').getBoundingClientRect().top;

    const sectionAboutTop = posY + sectionAbout;
    const sectionAnimationTop = posY + sectionAnimation;

    if(posY >= sectionAboutTop && posY < sectionAnimationTop) {
        // console.log('hello');
        burgerElem.classList.add('changeWhite');
    } else if(posY >= sectionAnimationTop && posY) {
        // console.log('bye');
        burgerElem.classList.remove('changeWhite');
    } else if(posY <= sectionAboutTop ) {
        // console.log('bye');
        burgerElem.classList.remove('changeWhite');
    }



  }

  
  window.addEventListener('scroll', handleScroll);

//Scroll Event 끝




// ===================Mouse Over Event=====================//






  // =================== JQuery --- Text Scroll Event================== //
  //get in touch button

//on hover text transform scale
$(document).ready(function(){
    $('.fs-parallex-effect').each(function(){
        var splitText =  $(this).find('.parallex-title').text();      
        //  console.log(splitText);

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


//left and right and vertical move text with scroll
var lastScrollTop = 0;
var leftMove = 0;


$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       leftMove = leftMove + 2;
       $('.section').find('.parallex-title').css({"transform" : "translate3d(" + -leftMove + "px, 0px,  0px)"});
       
   }
   else{
        leftMove = leftMove - 2;
        $('.section').find('.parallex-title').css({"transform": "translate3d(" + -leftMove + "px, 0px,  0px)"});

   }
   lastScrollTop = st;
//    console.log(st);
});


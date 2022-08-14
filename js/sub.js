
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
            topMove = topMove + 100;
            elem.style.transform = 'translate3d(0px,'+ - topMove +'px,0px)';
            // elem.style.transform = 'translate3d(' + -topMove + ' px, 0px,  0px)';
  
        } else {
            topMove = topMove - 100;
            elem.style.transform = 'translate3d(0px,'+ - topMove +'px,0px)';
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

//

function initMoving(target,position,topLimit,btmLimit){
	if(!target)
		return false;
	var obj = target;
	obj.initTop = position;
	obj.topLimit = topLimit;
	obj.bottomLimit = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - btmLimit - obj.offsetHeight;
	obj.style.position = "absolute";
	obj.top = obj.initTop;
	obj.left = obj.initLeft;
	if(typeof(window.pageYOffset) == "number") {
		obj.getTop = function() {
			return window.pageYOffset;
		}
	} else if (typeof(document.documentElement.scrollTop) == "number") {
		obj.getTop = function() {
			return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
		}
	} else {
		obj.getTop = function() {
			return 0;
		}
	}
	if (self.innerHeight) {	//WebKit
		obj.getHeight = function() {
			return self.innerHeight;
		}
	} else if(document.documentElement.clientHeight) {
		obj.getHeight = function() {
			return document.documentElement.clientHeight;
		}
	} else {
		obj.getHeight = function() {
			return 500;
		}
	}
	obj.move = setInterval(function() {
		if (obj.initTop > 0) {
			pos = obj.getTop() + obj.initTop;
		} else {
			pos = obj.getTop() + obj.getHeight() + obj.initTop;
			//pos = obj.getTop() + obj.getHeight() / 2 - 15;
		}
		if (pos > obj.bottomLimit)
			pos = obj.bottomLimit;
		if (pos < obj.topLimit)
			pos = obj.topLimit;
		interval = obj.top - pos;
		obj.top = obj.top - interval / 3;
		obj.style.top = obj.top + "px";
	}, 30)

    console.log(obj);
}


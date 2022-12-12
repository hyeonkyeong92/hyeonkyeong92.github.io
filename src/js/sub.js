

//==========================Scroll Event===========================//

function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
} //높이값 확인
  
function handleScroll() {
    //공통함수1
    const elems = document.querySelectorAll('.obj-ani');
    const sectionElems = document.querySelectorAll('.section-ani');
    const elems2 = document.querySelectorAll('.obj-ani2');
    const elems3 = document.querySelectorAll('.obj-ani3');

    elems.forEach(elem => {
        if (isElementUnderBottom(elem, -20)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateY(70px)';
            elem.style.transitionDuration = '.6s'
  
        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(0px)';
        }
    })
    // event1

    sectionElems.forEach(elem => {
        if (isElementUnderBottom(elem, -20)) {
            elem.style.transform = 'translateY(0px)';
            elem.style.transitionDuration = '.6s'
  
        } else {
            elem.style.transform = 'translateY(-70px)';
  
        }
    })
    // event2

    elems2.forEach((elem, index) => {
        if(isElementUnderBottom(elem, -40)){
            elem.classList.remove('scroll-ani');
            
        }else{
            elem.classList.add('scroll-ani');
        }
    });
    // event3

    elems3.forEach(elem => {
        if (isElementUnderBottom(elem, -40)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateX(-70px)';
            elem.style.transitionDuration = '.8s'
  
        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateX(0px)';
        }
    })
    // event3

}

  
  window.addEventListener('scroll', handleScroll);

//Scroll Event 끝

//=========================Page Back=========================//
const iconBackElem = document.querySelector('.h-menu');

iconBackElem.addEventListener('click', function (){
    window.history.back();
    // console.log('click');
});

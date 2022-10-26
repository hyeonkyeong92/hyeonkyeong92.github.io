

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
    const aniElem = document.querySelectorAll('.obj-ani2');

    aniElem.forEach((elem, index) => {
        if(isElementUnderBottom(elem, -20)){
            aniElem[index].classList.add('scroll-ani');
        }
        
    });

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

}

// function animationHandler(){

//     yOffset = window.pageYOffset;
//     console.log(yOffset);
// }
  
  window.addEventListener('scroll', handleScroll);
//   window.addEventListener('scroll', animationHandler);
//Scroll Event 끝


//=========================Page Back=========================//
const iconBackElem = document.querySelector('.h-menu');

iconBackElem.addEventListener('click', function (){
    window.history.back();
    // console.log('click');
});

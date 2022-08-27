

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

  
  window.addEventListener('scroll', handleScroll);

//Scroll Event 끝


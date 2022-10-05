

(function(){

    const tabSelectWrap = document.querySelector('.tab-wrap');

    function selectHandler(e){
        let targetElem = e.target;
    }

    tabSelectWrap.addEventListener('click', selectHandler);


})();

function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
} //높이값 확인

function handleScroll() {
    //공통함수1
    const elems = document.querySelectorAll('.ani-top');
    const elems2 = document.querySelectorAll('.add-title-ani');

    elems.forEach(elem => {
        if (isElementUnderBottom(elem, -20)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateY(70px)';
            elem.style.transitionDuration = '.8s'
  
        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(0px)';
        }
    })
    elems2.forEach(elem => {
        if (isElementUnderBottom(elem, -20)) {
            elem.style.animation = "ani-sub-title 1.6s both 0.3s";
        }
    })
    
  }


window.addEventListener('scroll', handleScroll);


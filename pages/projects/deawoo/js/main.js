
//탭메뉴
(function(){

    const tabSelectList = document.querySelectorAll('.tab-wrap li');
    const tabSelectedElem = document.querySelectorAll('.project-lists .item');
    let activeConts;

    // console.log(tabSelectList);
    // console.log(tabSelectedElem);

    for(var i = 0; i<tabSelectList.length; i++){
        tabSelectList[i].querySelector('a').addEventListener('click',function(e){
            e.preventDefault();
            
            for(var j = 0; j<tabSelectList.length; j++){
                tabSelectList[j].classList.remove('on');
                tabSelectedElem[j].style.display = "none";
            }

            this.parentNode.classList.add('on');

            activeConts = this.getAttribute('href');
            document.querySelector(activeConts).style.display = 'flex';
            document.querySelector(activeConts).style.animation = 'ani-up .8s cubic-bezier(0.51, 0.09, 0.56, 0.89)';
        });

    }

    document.querySelector('.project-lists .item:nth-child(1)').style.display = 'flex';
            

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
    
    //headerScroll 함수
    const headerElem = document.querySelector('.header');
    const headerHeight = headerElem.offsetHeight + 280;
    const windowTop = window.scrollY; // 스크롤 세로값이 헤더높이보다 크거나 같으면 헤더에 클래스 'ani-scroll'을 추가한다

    if(windowTop > headerHeight){
        headerElem.classList.add('ani-scroll');
    }else{
        headerElem.classList.remove('ani-scroll');
    }



}




window.addEventListener('scroll', handleScroll);


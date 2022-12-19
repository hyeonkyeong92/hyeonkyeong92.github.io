
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



//=========================Page Back=========================//
const iconBackElem = document.querySelector('.h-menu');

iconBackElem.addEventListener('click', function (){
    window.history.back();
    // console.log('click');
});

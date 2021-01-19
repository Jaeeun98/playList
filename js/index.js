const loadingBtn = document.querySelector('.btnDiv');
const loadingBox = document.querySelector('.loadingBox');
const loadingIcon = document.querySelector('.fas');
const loadingText = document.querySelector('.xmasText');
const body = document.querySelector('body');
const section = document.querySelector('section');
const kpopBtn = document.querySelector('.kNavPop');
const popBtn = document.querySelector('.pNavPop');
const kpop = document.querySelector('.kpop');
const kpopSubBtn = document.querySelector('.kpop > div > h2');
const pop = document.querySelector('.pop');
const popSubBtn = document.querySelector('.pop > div > h2');

//loading icon 
window.onload = function(){ 
    setTimeout(() => {
        loadingIcon.style.opacity = 0;
        loadingText.style.opacity = 0;
    }, 5000);
};

//btn move
function kpopMove(){
    section.style.display = "block";
    body.style.transform = "translateY(-100%)";
}
loadingBtn.addEventListener('click', kpopMove);

//nav scroll
kpopBtn.addEventListener('click', function(){
    body.style.transform = "translateY(-200%)";
})
popBtn.addEventListener('click', kpopMove);

//sub scroll
kpopSubBtn.addEventListener('click', function(){
    kpop.style.transform = "translateX(-50%)"
});
popSubBtn.addEventListener('click', function(){
    pop.style.transform = "translateX(-50%)"
});





/*

// btn click, move main
function moveMain (){
    window.scrollBy({top : loadingBox.offsetHeight, behavior: 'smooth'});
}

loadingBtn.addEventListener('click', moveMain);

*/
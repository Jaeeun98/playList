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
        loadingText.style.opacity = 0;
    }, 5000);
    setTimeout(() => {
        section.style.display = "block";
        body.style.transform = "translateY(-100%)";
    }, 6000);
};


//nav scroll
kpopBtn.addEventListener('click', function(){
    body.style.transform = "translateY(-200%)";
})

popBtn.addEventListener('click', function(){
    body.style.transform = "translateY(-100%)";
});

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
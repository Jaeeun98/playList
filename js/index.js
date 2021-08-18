const loadingBox = document.querySelector('.loadingBox');
const loadingIcon = document.querySelector('.fas');
const loadingText = document.querySelector('.xmasText');
const body = document.querySelector('body');
const section = document.querySelector('section');
const popBtn = document.querySelector('.kNavPop');
const kpopBtn = document.querySelector('.pNavPop');
const kpop = document.querySelector('.kpop');
const kpopSubBtn = document.querySelector('.kpop > div > h2');
const pop = document.querySelector('.pop');
const popSubBtn = document.querySelector('.pop > div > h2');
const back = document.querySelectorAll('.back');
const mainNavKpop = document.querySelector('.mainNavKpop');
const mainNavPop = document.querySelector('.mainNavPop');


(function () {
    var d = document, s = d.createElement('script');
    s.src = 'https://playlist-4.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();

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

//nav
const kpopMove = () => body.style.transform = "translateY(-100%)";
const popMove = () => body.style.transform = "translateY(-200%)"
const kpopMainMove = () => body.style.transform = "translate(-100%, -100%)";
const popMainMove = () => body.style.transform = "translate(-100%, -200%)";

//index nav
kpopBtn.addEventListener('click', kpopMove);
popBtn.addEventListener('click', popMove);

//index to main scroll
kpopSubBtn.addEventListener('click', kpopMainMove);
popSubBtn.addEventListener('click', popMainMove);

//main nav
back[0].addEventListener('click', kpopMove);
back[1].addEventListener('click', popMove);
mainNavKpop.addEventListener('click', kpopMainMove);
mainNavPop.addEventListener('click', popMainMove);

const loadingBtn = document.querySelector('.btnDiv');
const loadingHeight = document.querySelector('.loadingBox').offsetHeight;

// btn click, move main
function moveMain (){
    window.scrollBy({top : loadingHeight, behavior: 'smooth'});
    console.log(loadingHeight);
}

loadingBtn.addEventListener('click', moveMain);

//play
//play
const playBtn = document.querySelector('.playBtn');
const nav = document.querySelector('nav');
const album = document.querySelector('.album');
const navLi = document.querySelectorAll('nav > ul li');
let toggle = false;

function movePlayBtn(){
    if(!toggle){
        nav.animate(
            [{
                transform : 'translate(-750px, -350px)',
            }],
            {   duration : 1000,
                easing : 'ease',
                fill : 'forwards'
            })    
        playBtn.animate(
            [{
                width : '60px',
                height : '60px'
            }],
            {
                duration : 1000,
                easing : 'ease',
                fill : 'forwards'
            })     
        setTimeout(albumDisplay, 1000);
    } else {
        navView();
    }      
}

function albumDisplay (){
    album.style.display = 'flex';
    album.animate(
        //keyframes
        [{opacity : 1}],
        //options
        {
            duration : 1000,
            easing : 'linear',
            fill : 'forwards'
        })
        album.style.cursor = 'pointer';
    toggle = true;    
}
console.log(navLi.length)
function navView (){
    for(let i=0; i<navLi.length; i++){
        navLi[i].style.opacity = 1;
        navLi[i].animate(
            [{
                transform : 'translateX(' + (70+(i*50))  + 'px) rotate(360deg)'
            }],
            {
                duration : 1000,
                easing : 'linear',
                fill : 'forwards'
            })
    }  
}

playBtn.addEventListener('click', movePlayBtn);
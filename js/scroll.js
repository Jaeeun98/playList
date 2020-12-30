const loadingBtn = document.querySelector('.btnDiv');
const loadingHeight = document.querySelector('.loadingBox').offsetHeight;

// btn click, move main
function moveMain (){
    window.scrollBy({top : loadingHeight, behavior: 'smooth'});
    //scroll, offsetTop(width, height, 좌표구하기 정리)
}

loadingBtn.addEventListener('click', moveMain);

//play
const popBtn = document.querySelector('.pop button');
const popNav = document.querySelector('.pop nav');
const popAlbum = document.querySelector('.popAlbum');
const popAlbumImg = document.querySelectorAll('.popAlbumImg');
const popNavLi = document.querySelectorAll('.pop nav ul li');
let toggle = false;

function movePlayBtn(){
    if(!toggle){
        popNav.animate(
            [{
                transform : 'translate(-750px, -350px)',
            }],
            {   duration : 1000,
                easing : 'ease',
                fill : 'forwards'
            })    
            popBtn.animate(
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
    popAlbum.style.display = 'flex';
    popAlbum.animate(
        //keyframes
        [{opacity : 1}],
        //options
        {
            duration : 1000,
            easing : 'linear',
            fill : 'forwards'
        })
    for(let i=0; i<popAlbumImg.length; i++){
        popAlbumImg[i].style.cursor = 'pointer';
    }        
    toggle = true;    
}

function navView (){
    for(let i=0; i<popNavLi.length; i++){
        popNavLi[i].style.opacity = 1;
        popNavLi[i].animate(
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

popBtn.addEventListener('click', movePlayBtn);





/*

loadingBtn.addEventListener('click', moveMain);

function scrollMove(){ 
    window.
}

window.addEventListener('scroll', scrollMove);


const navLi = document.querySelectorAll('nav > ul li');



for(let i=0; i<navLi.length; i++){
    navLi[i].addEventListener('click', function(){
        navLi[i]
    });
}
*/
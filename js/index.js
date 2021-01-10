const loadingBtn = document.querySelector('.btnDiv');
const loadingBox = document.querySelector('.loadingBox');
const loadingIcon = document.querySelector('.fas');
const loadingText = document.querySelector('.xmasText');
const body = document.querySelector('body');
const section = document.querySelector('section');
const popBtn = document.querySelector('.navPop div');

//loading icon 
window.onload = function(){ 
    setTimeout(() => {
        loadingIcon.style.opacity = 0;
        loadingText.style.opacity = 0;
    }, 5000);
};

//btn move
loadingBtn.addEventListener('click', () => {
    section.style.display = "block";
    body.style.transform = "translateY(-100%)";
});

//scroll
popBtn.addEventListener('click', function(){
    body.style.transform = "translateY(-200%)";
})



/*

// btn click, move main
function moveMain (){
    window.scrollBy({top : loadingBox.offsetHeight, behavior: 'smooth'});
}

loadingBtn.addEventListener('click', moveMain);

*/
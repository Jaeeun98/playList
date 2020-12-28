const loadingBtn = document.querySelector('.btnDiv');
const loadingHeight = document.querySelector('.loadingBox').offsetHeight;

// btn click, move main
function moveMain (){
    window.scrollBy({top : loadingHeight, behavior: 'smooth'});
    console.log(loadingHeight);
}

loadingBtn.addEventListener('click', moveMain);

//play
const playBtn = document.querySelector('.playBtn');
const album = document.querySelector('.album');

playBtn.addEventListener('click', function(){
    playBtn.animate
    album.style.display = "flex";
    album.style.opacity = "1";
})
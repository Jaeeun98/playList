const loadingBtn = document.querySelector('.btnDiv');
const popBox = document.querySelector('.pop');

/*
function moveMain (){
    let popHeight = popBox.innerHeight;
}

loadingBtn.addEventListener('click', moveMain);
console.log(popHeight);
*/

//play
const playBtn = document.querySelector('.playBtn');
const album = document.querySelector('.album');

playBtn.addEventListener('click', function(){
    playBtn.animate
    album.style.display = "flex";
    album.style.opacity = "1";
})
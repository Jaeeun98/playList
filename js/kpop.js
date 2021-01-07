const kBtn = document.querySelectorAll('.kpopPlayBtn i');
const kPlayList = document.querySelectorAll('.kpopPlayList p');
const kAlbum = document.querySelectorAll('.kpopAlbumImg');
let mCount = 4;
let pCount = 0;

function nextBtn(){
    pCount++;
    mCount--;
    //playList
    for(let i=0; i<kPlayList.length; i++){
        if(kPlayList[pCount] != kPlayList[i]) {
            kPlayList[i].classList.remove('play');
        } else {
            kPlayList[pCount].classList.add('play');
        }
    }
    if(pCount == kPlayList.length-1){
        pCount=-1;
    }

    //album
    kAlbum[mCount].classList.add('AlbumAni');

    if(mCount == 0){
        mCount=4;
        for(let i=0; i<kAlbum.length; i++){
            kAlbum[i].classList.remove('AlbumAni');
        } 
    }
}

function prevBtn(){
    
}


kBtn[1].addEventListener('click', prevBtn);
kBtn[2].addEventListener('click', nextBtn);



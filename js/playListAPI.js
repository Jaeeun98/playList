const videoBox = document.querySelector('.video');
const playListUl = document.querySelector('.playListUl');
const key = "AIzaSyBJFWmVhHaFhVmTyg7PQPD9EJolH1AX4Vk";
const itemIdMv = "PL4fGSI1pDJn7rC9G6HKWK7Na4R9iu-c8O"  //mv
const itemId = "PL4fGSI1pDJn6jXS_Tv_N9B8Z0HTRVJE0m";  //album
const playListApi = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${itemId}&key=${key}`;
const ramdomIcon = document.querySelector('.fas');
//let shuffle = false;
//팝송100 : PL4fGSI1pDJn6O1LS0XSdF3RyO0Rq_LDeI

//playList
fetch(playListApi)
  .then(res => res.json())
  .then(data => showPlayListItem(data));
function showPlayListItem(data){
  for(i=0; i<data.items.length; i++){
    const num = i+1;
    const title = data.items[i].snippet.title;
    const list = document.createElement('li');
    const videoId = data.items[i].snippet.resourceId.videoId;
    const output = `
        <div class="num">${num}</div>
        <div class="title">${title}</div>
        <div class="playBtn">
          <div class="play">&#9654</div>
          <div class="stop">&#9632</div>
        </div>
    `
    list.innerHTML = output;
    playListUl.appendChild(list);

    //videoId className add
    list.classList.add(videoId);
    playListUl.style.backgroundAttachment = "local";
    showVideo();
  } 
}
//video iframe
let player;
function showVideo(){
  player = new YT.Player('player', {
    height:'400',
    width:'90%',
    playerVars:{
      'modestbranding' : 1,
      'list' : itemIdMv,
      'listType' : "playlist",
      'autoplay' : 0,
      'controls' : 1,
      'rel' : 0,
      'loop' : 1
    },
    events: {
      'onReady' : ready,
    }
  })
}
//shuffle
//ramdomIcon.addEventListener('click', function(){
//  shuffle ? shuffle = false : shuffle = true;
//})
//load 중에 함수 호출하면 오류뜸, 준비중일때 세팅
function ready(e){
  

  console.log(e.target);

  //playlist
  const playlistArr = e.target.getPlaylist();
  //console.log(playlistArr);
  //console.log(e.target.playerInfo.videoData);

  for(i=0;i<5;i++){
    const playlistVideoApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${playlistArr[i]}&key=${key}`
    fetch(playlistVideoApi)
    .then(res => res.json())
    .then(data => showPlayListItme2(data));
    
  }
  function showPlayListItme2(data){
    console.log(data.items[0].snippet);
  }
  

  //shuffle
  //shuffle ? e.target.setShuffle(true) : e.target.setShuffle(false);


  //e.target.loadPlaylist(itemId);
}








//playListClick


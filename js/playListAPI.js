const videoBox = document.querySelector('.video');
const playListUl = document.querySelector('.playListUl');
const key = "AIzaSyBJFWmVhHaFhVmTyg7PQPD9EJolH1AX4Vk";
const itemIdMv = "PL4fGSI1pDJn7rC9G6HKWK7Na4R9iu-c8O"  //mv
const itemId = "PL4fGSI1pDJn6jXS_Tv_N9B8Z0HTRVJE0m";  //album
const popItemId = "PL4fGSI1pDJn6O1LS0XSdF3RyO0Rq_LDeI"; //pop
const playListApi = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${itemId}&key=${key}`;
const ramdomIcon = document.querySelector('.fas');
//let shuffle = false;


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
    showVideo();
  } 
}
//video iframe
let player;
let popPlayer;
function showVideo(){
  player = new YT.Player('player', {
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
  popPlayer = new YT.Player('popPlayer', {
    width:'90%',
    playerVars:{
      'modestbranding' : 1,
      'list' : popPlayer,
      'listType' : "playlist",
      'autoplay' : 0,
      'controls' : 1,
      'rel' : 0,
      'loop' : 1
    },
    events: {
      'onReady' : popReady,
    }
  })
  
}
//shuffle
//ramdomIcon.addEventListener('click', function(){
//  shuffle ? shuffle = false : shuffle = true;
//})

//popReady
function popReady(e){
  console.log(e.target)
}

//load 중에 함수 호출하면 오류뜸, 준비중일때 세팅
//kpopReady
const fetchArr = [];
function ready(e){
  console.log(e.target);

  //playlist
  const playlistArr = e.target.getPlaylist();
  for(let i=0;i<5;i++){
    const playlistVideoApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${playlistArr[i]}&key=${key}` 
    fetch(playlistVideoApi)
    fetchArr.push(fetch(playlistVideoApi)) //api 가져오기
  }
  //shuffle
  //shuffle ? e.target.setShuffle(true) : e.target.setShuffle(false);
}

function showPlayListItme2(data){
  console.log(data[0])
 // let titleArr = data.items[0].snippet.title;
 // console.log(titleArr);
}
















/*

//search
const searchApi = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=date&type=playlist&key=${key}`
  fetch(searchApi)
    .then(res => res.json)
    .then(data => titleSort(data))
function titleSort(data){
  console.log(data);
}

*/

//playListClick


const videoBox = document.querySelector('.video');
const playListUl = document.querySelector('.playListUl');
const key = "AIzaSyBJFWmVhHaFhVmTyg7PQPD9EJolH1AX4Vk";
const itemId = 'PL4fGSI1pDJn6jXS_Tv_N9B8Z0HTRVJE0m';
const playListApi = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${itemId}&key=${key}`;
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
    showVideo();
  } 
}

let player;
function showVideo(){
  player = new YT.Player('player', {
    height:'400',
    width:'90%',
    playerVars:{
      'modestbranding' : 1,
      'list' : itemId,
      'listType' : "playlist",
      'autoplay' : 1,
      'controls' : 1,
      'rel' : 0,
      'loop' : 1,
    },
    events: {
      'onReady' : load,
    }
  })
}

function load(e){
  e.target.loadPlaylist(itemId, 0);
}




/*

function showVideo(){
  const list = document.querySelectorAll('.playListUl > li');
  for(i=0; i<list.length; i++){
    const videoId = list[i].className;
    const videoApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${key}`;
    fetch(videoApi)
      .then(res => res.json)
      .then(data => {
        const artist = data.tags[0];
        const output = `
          <div class="artist"></div>
        `
        list.innerHTML = output;
      });
  }
}

*/



/*
fetch(ytbPlayList)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    showVideo(data);
  });

  function showVideo(data) {
    const kpopVideo = data.items[1].snippet.title;
    let output = `
      <video>
        ${kpopVideo}
      </video>
    `;
    video.innerHTML = output;
  }
*/


  

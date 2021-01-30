const videoBox = document.querySelector('.video');
const kpopPlayListUl = document.querySelector('.kpopPlayListUl');
const popPlayListUl = document.querySelector('.popPlayListUl')
const key = "AIzaSyBJFWmVhHaFhVmTyg7PQPD9EJolH1AX4Vk";
const kpopListId = "PLOHoVaTp8R7dfrJW5pumS0iD_dhlXKv17";
const popListId = "PLOHoVaTp8R7d3L_pjuwIa6nRh4tH5nI4x";
const ramdomIcon = document.querySelector('.fas');

//video iframe
//forIn 사용
let player;
let popPlayer;
function onYouTubeIframeAPIReady(){
  player = new YT.Player('player', {
    width:'90%',
    playerVars:{
      'modestbranding' : 1,
      'list' : kpopListId,
      'listType' : "playlist",
      'autoplay' : 0,
      'controls' : 1,
      'rel' : 0,
      'loop' : 0
    },
    events: {
      'onReady' : ready,
      'onStateChange' : stateChange,
    }
  })

  popPlayer = new YT.Player('popPlayer', {
    width:'90%',
    playerVars:{
      'modestbranding' : 1,
      'list' : popListId,
      'listType' : "playlist",
      'autoplay' : 0,
      'controls' : 1,
      'rel' : 0,
      'loop' : 0
    },
    events: {
      'onReady' : ready,
      'onStateChange' : stateChange
      
    }
  })
}

//load 중에 함수 호출하면 오류뜸, 준비중일때 세팅
//kpopReady
function ready(e){
  console.log();
  //playlist
  const videoIdArr = e.target.getPlaylist();
  const promiseList = videoIdArr.map(getItem);
  const playlistId = e.target.playerInfo.playlistId;

  function getItem(id){
    const videoApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${key}` 
  
    return new Promise(res => {
      fetch(videoApi)
        .then(res => res.json())
        .then(({ items }) => {
          res(items[0].snippet);
        })
      })
  }

  Promise.all(promiseList)
    .then(valuse => {
      if(playlistId == kpopListId) {
        //kpop
        valuse.forEach((snippet, index) => {
          const num = index+1;
          const title = snippet.title;
          const list = document.createElement('li');
          const videoId = videoIdArr[index];
  
          const output = `
            <div class="num">${num}</div>
            <div class="title">${title}</div>
            <div class="playBtn">
              <div class="play">&#9654</div>
              <div class="stop">&#9632</div>
            </div>
            `
          list.innerHTML = output;
          list.classList.add(videoId);
          kpopPlayListUl.appendChild(list);
        })
      } else {
        //pop
        valuse.forEach((snippet, index) => {
          const num = index+1;
          const title = snippet.title;
          const list = document.createElement('li');
          const videoId = videoIdArr[index];
  
          const output = `
            <div class="popNum">${num}</div>
            <div class="popTitle">${title}</div>
            <div class="popPlayBtn">
              <div class="popPlay">&#9654</div>
              <div class="popStop">&#9632</div>
            </div>
            `
          list.innerHTML = output;
          list.classList.add(videoId);
          popPlayListUl.appendChild(list);
        })
      }
      
    })
    .then(() => {
      //stop, click play
      if(playlistId == kpopListId){
        //kpop
        const stopBtn = document.querySelectorAll('.stop');
        stopBtn.forEach((item) => item.addEventListener('click', stop))

        const playBtn = document.querySelectorAll('.play');
        playBtn.forEach((item, index) => item.addEventListener('click', () => play(index)))
      } else {
        //pop
        const stopBtn = document.querySelectorAll('.popStop');
        stopBtn.forEach((item) => item.addEventListener('click', popStop))

        const playBtn = document.querySelectorAll('.popPlay');
        playBtn.forEach((item, index) => item.addEventListener('click', () => popPlay(index)))
      }
      
    })
    const stop = () => player.pauseVideo();
    const play = (index) => player.playVideoAt(index);
    const popStop = () => popPlayer.pauseVideo();
    const popPlay = (index) => popPlayer.playVideoAt(index);
}


function stateChange(e){
  //playlist click color change
  if(e.data == 1){
    const playId = e.target.playerInfo.videoData.video_id;
    const list = document.querySelectorAll('.playListUl li');

    list.forEach(item => {
      const listId = item.className;
      if(playId == listId) {
        item.classList.add('choiceLi');
      } else {
        item.classList.remove('choiceLi');
      }
    })
   

    
  }
  
}


//popReady
function popReady(e){
  console.log(e.target)
}



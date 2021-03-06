const key = "AIzaSyBJFWmVhHaFhVmTyg7PQPD9EJolH1AX4Vk";
const kpoplistId = "PLOHoVaTp8R7dfrJW5pumS0iD_dhlXKv17";
const poplistId = "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG";

//api 추가
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//video iframe
/*
function onYouTubeIframeAPIReady(){
  const playerlist = [player, popPlayer];

  playerlist.forEach(player => {
    player = new YT.Player(player, {
      width:'90%',
      playerVars:{
        'modestbranding' : 1,
        'list' : player === playerlist[0] ? kpopListId : popListId,
        'listType' : "playlist",
        'rel' : 0,
      },
      events: {
        'onReady' : ready,
        'onStateChange' : stateChange,
      }
    })
  })
}
*/
let player;
let popPlayer;
function onYouTubeIframeAPIReady(){
  player = new YT.Player('player', {
    playerVars:{
      'modestbranding' : 1,
      'list' : kpoplistId,
      'listType' : "playlist",
      'rel' : 0,
      'origin' : 'http://localhost:8000',
      'enablejsapi' : 1
    },
    events: {
      'onReady' : ready,
      'onStateChange' : stateChange,
    }
  })

  popPlayer = new YT.Player('popPlayer', {
    playerVars:{
      'modestbranding' : 1,
      'list' : poplistId,
      'listType' : "playlist",
      'rel' : 0,
      'origin' : 'http://localhost:8000',
      'enablejsapi' : 1
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
  //playlist
  const videoIdArr = e.target.getPlaylist();
  const promiseList = videoIdArr.map(getItem);
  const playlistId = e.target.playerInfo.playlistId;

  function getItem(id){
    const videoApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${key}` 
    
    return new Promise(res => {
      fetch(videoApi)
        .then(res => res.json())
        .then(res => console.log(res));
      })
  }

  Promise.all(promiseList)
    .then(valuse => {
      console.log(valuse);
      if(playlistId == kpoplistId) {

        //kpop
        const kpopPlaylistUl = document.querySelector('.kpopPlayListUl');
        valuse.forEach((snippet, index) => {
          const num = index+1;
          const title = snippet.title;
          const list = document.createElement('li');
          const videoId = videoIdArr[index];
  
          const output = `
            <div class="num">${num}</div>
            <div class="title">${title}</div>
            <div class="play">&#9654</div>
            `
          list.innerHTML = output;
          list.classList.add(videoId);
          kpopPlaylistUl.appendChild(list);
        })
      } else {
        //pop
        const popPlaylistUl = document.querySelector('.popPlayListUl')
        valuse.forEach((snippet, index) => {
          const num = index+1;
          const title = snippet.title;
          const list = document.createElement('li');
          const videoId = videoIdArr[index];
  
          const output = `
            <div class="popNum">${num}</div>
            <div class="popTitle">${title}</div>
            <div class="popPlay">&#9654</div>
            `
          list.innerHTML = output;
          list.classList.add(videoId);
          popPlaylistUl.appendChild(list);
        })
      }
      
    })
    .then(() => {
      //stop, click play
      if(playlistId == kpoplistId){
        //kpop
        const stopBtn = document.querySelector('.stop');
        stopBtn.addEventListener('click', stop);

        const playBtn = document.querySelectorAll('.play');
        playBtn.forEach((item, index) => item.addEventListener('click', () => play(index)))
      } else {
        //pop
        const stopBtn = document.querySelector('.popStop');
        stopBtn.addEventListener('click', popStop);

        const playBtn = document.querySelectorAll('.popPlay');
        playBtn.forEach((item, index) => item.addEventListener('click', () => popPlay(index)))
      }
    })
    const stop = () => player.pauseVideo();
    const play = (index) => player.playVideoAt(index);
    const popStop = () => popPlayer.pauseVideo();
    const popPlay = (index) => popPlayer.playVideoAt(index);
}

let check = 0;
function stateChange(e){
  //playlist click color change
  const playId = e.target.playerInfo.videoData.video_id;
  //const playlistId = e.target.playerInfo.playlistId;
  if(e.data == 1){
    const list = document.querySelectorAll('kpopPlayListUl li');
    console.log(list);
    list.forEach(item => {
      const listId = item.className;
      if(playId == listId) {
        item.classList.add('choiceLi');
      } else {
        item.classList.remove('choiceLi');
      }
    })
    //error
    check = 0;
  } else if(e.data == -1) check++;

 

  if(check >= 2) {
    player.playVideoAt(e.target.playerInfo.playlistIndex + 1);
    check = 1; 
  }
}


/*
 if(playlistId == kpoplistId){
    

  } 
else {
  if(e.data == 1){
    const list = document.querySelectorAll('popPlayListUl li');

    list.forEach(item => {
      const listId = item.className;
      if(playId == listId) {
        item.classList.add('choiceLi');
      } else {
        item.classList.remove('choiceLi');
      }
    })
    //error
    check = 0;
  } else if(e.data == -1) check++;
}


/*
  function colorChange(item){
    if(e.data == 1){
      const playId = e.target.playerInfo.videoData.video_id;
      const list = document.querySelectorAll(`.${item} li`);
      console.log(list);
  
      list.forEach(item => {
        const listId = item.className;
        if(playId == listId) {
          item.classList.add('choiceLi');
        } else {
          item.classList.remove('choiceLi');
        }
      })
      //error
      check = 0;
    } else if(e.data == -1) check++;
  }
  
  playlistId == kpoplistId ? colorChange('kpopPlayListUl') : colorChange('popPlayListUl');







const playlistId = e.target.playerInfo.playlistId;
  let list;

  if(e.data == 1){

    if(playlistId == kpoplistId){
      list = document.querySelectorAll('.kpopPlayListUl li');
      console.log(list);
    } else {
      list = document.querySelectorAll('.popPlayListUl li');
    }

    list.forEach(item => {
      const listId = item.className;
      if(playId == listId) {
        item.classList.add('choiceLi');
      } else {
        item.classList.remove('choiceLi');
      }
    })
    //error
    check = 0;
  } else if(e.data == -1) check++;
*/
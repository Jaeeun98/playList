const videoBox = document.querySelector('.video');
const playListUl = document.querySelector('.playListUl');
const key = "AIzaSyBJFWmVhHaFhVmTyg7PQPD9EJolH1AX4Vk";
const kpopListId = "PLOHoVaTp8R7dfrJW5pumS0iD_dhlXKv17";
const popListId = "PLOHoVaTp8R7d3L_pjuwIa6nRh4tH5nI4x";
//const ramdomIcon = document.querySelector('.fas');

//video iframe
let player;
let popPlayer;
function showVideo(){
  player = new YT.Player('player', {
    width:'90%',
    playerVars:{
      'modestbranding' : 1,
      'list' : kpopListId,
      'listType' : "playlist",
      'autoplay' : 0,
      'controls' : 1,
      'rel' : 0,
      'loop' : 1
    },
    events: {
      'onReady' : kpopReady,
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
      'loop' : 1
    },
    events: {
      'onReady' : popReady,
    }
  })
  
}



//load 중에 함수 호출하면 오류뜸, 준비중일때 세팅
//kpopReady
function kpopReady(e){
  //playlist
  const videoIdArr = e.target.getPlaylist();
  const promiseList = videoIdArr.map(getItem);

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
        playListUl.appendChild(list);
      })
    })









//popReady
function popReady(e){
  console.log(e.target)
}



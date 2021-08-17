const key = "AIzaSyBJFWmVhHaFhVmTyg7PQPD9EJolH1AX4Vk";
const kpoplistId = "PLOHoVaTp8R7dfrJW5pumS0iD_dhlXKv17";
const poplistId = "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG";

//api 추가
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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
      'onReady' : onPlayerReady,
    }
  })
}
function onPlayerReady(event) {
  event.target.playVideo();
}






/*
const key = "AIzaSyBJFWmVhHaFhVmTyg7PQPD9EJolH1AX4Vk";
const kpoplistId = "PLOHoVaTp8R7dfrJW5pumS0iD_dhlXKv17";
const poplistId = "PLD7SPvDoEddZUrho5ynsBfaI7nqhaNN5c";

//api 추가
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
let popPlayer;
function onYouTubeIframeAPIReady(){
  player = new YT.Player('player', {
    playerVars:{
      'modestbranding' : 1,
      'list' : kpoplistId,
      'listType' : "playlist",
    },
    
  })

  popPlayer = new YT.Player('popPlayer', {
    playerVars:{
      'modestbranding' : 1,
      'list' : poplistId,
      'listType' : "playlist",
    },
    
  })
}


*/
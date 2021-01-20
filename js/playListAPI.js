const video = document.querySelector('.video');
const playList = document.querySelector('.playList');
const key = "AIzaSyBJFWmVhHaFhVmTyg7PQPD9EJolH1AX4Vk";
const listId = "UCVL0iXJT4lY7GevJ50J_Fow";
const ytbPlayList = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${listId}&key=${key}`;
const itemId = 'PLZyzA5tubSHDVZEx89wKDlaHomhkjjWg5';
const ytbPlayListItems = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${itemId}&key=${key}`

fetch(ytbPlayListItems)
  .then(res => res.json())
  .then(data => {
    console.log(data);
})


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
  

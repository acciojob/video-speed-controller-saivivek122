let video=document.getElementById("video");
let playButton=document.querySelector(".player_button.toggle");
let volumeButton=document.getElementById("volume");
let playbackspeedButton=document.getElementById("playbackspeed");
let progress=document.getElementById("progress")
let backwardButton=document.getElementById("backward");
let forwardButton=document.getElementById("forward")

 
playButton.addEventListener("click",(e)=>{
  if(video.paused || video.ended){
    video.play();
    playButton.textContent="❚ ❚"
  
  }
  else{
    video.pause();
    playButton.textContent="►"
  }
})


volumeButton.addEventListener("input",()=>{
  console.log(volumeButton.value);
  video.volume=volumeButton.value;
})

// video.addEventListener("loadedmetadata",()=>{
//   progress.setAttribute("max",video.duration)

  
// })

// progress.setAttribute("max", video.duration);
video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});


video.addEventListener("timeupdate",()=>{
  progress.value=video.currentTime;
})
playbackspeedButton.addEventListener("input",()=>{
  video.playbackRate=playbackspeedButton.value;
})
backwardButton.addEventListener("click",()=>{
  let backwardTime=backwardButton.value;
  video.currentTime=video.currentTime*(-backwardTime);
  progress.value=video.currentTime*backwardTime;
})

forwardButton.addEventListener("click",()=>{
  let forwardTime=forwardButton.value;
  video.currentTime=video.currentTime*(forwardTime);
  progress.value=video.currentTime*forwardTime;
})






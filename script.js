const bar= document.getElementById('pgBar')
const masterPlay= document.getElementById('masterPlay')
const masterPause= document.getElementById('masterPause')
const gif =document.getElementById('gif');
let audioElement = new Audio('songs/1.mp3')
let playsong=document.getElementsByClassName('playsong')
let duration=document.getElementById('duration')
// let duration= document.getElementsByClassName('duration')

masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<0){
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle-o')
        gif.style.opacity=1
    }
    else{
        audioElement.pause()    
        masterPlay.classList.add('fa-play-circle')
        masterPlay.classList.remove('fa-pause-circle-o')
        gif.style.opacity=0
        
    }
})
var progress=0
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress)
    bar.value=progress
    duration.innerText = `${progress}:00`; 
    
    
})
bar.addEventListener('change', ()=>{
    audioElement.currentTime=  (bar.value * audioElement.duration)/100
})
Array.from(playsong).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    index=parseInt(e.target.id)
    console.log(index)
    audioElement.src= `songs/${index}.mp3`;

    if (audioElement.paused || audioElement.currentTime<0){
        audioElement.play()
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle-o')
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle-o')
        gif.style.opacity=1
    }
    
})
})

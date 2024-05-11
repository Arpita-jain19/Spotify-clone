console.log("Spotify")
let songs=[
    {
        songname:"Salam-e-Ishq",
        filePath:"Music/1.mp3",
        coverPath:"girl.jpg"
    },
    {
        songname:"tu hiii-e-Ishq",
        filePath:'Music/2.mp3',
        coverPath:"girl.jpg"
    },
    {
        songname:"jb we met-e-Ishq",
        filePath:'Music/3.mp3',
        coverPath:"girl.jpg"
    },
    {   
        songname:"Salam-e-Ishq",
        filePath:'Music/4.mp3',
        coverPath:"girl.jpg"
    },
    {
        songname:"Salam-e-Ishq",
        filePath:'Music/5.mp3',
        coverPath:"girl.jpg"
    },
    {
        songname:"Salam-e-Ishq",
        filePath:'Music/6.mp3',
        coverPath:"girl.jpg"
    },
    {
        songname:"Salam-e-Ishq",
        filePath:"Music/7.mp3",
        coverPath:"girl.jpg"
    },
    {
        songname:"Salam-e-Ishq",
        filePath:"Music/8.mp3",
        coverPath:"girl.jpg"
    },
    {
        songname:"Salam-e-Ishq",
        filePath:"Music/9.mp3",
        coverPath:"girl.jpg"
    },
    {
        songname:"Salam-eeeee-Ishq",
        filePath:"Music/10.mp3",
        coverPath:"girl.jpg"
    }



]
let songItem=Array.from(document.getElementsByClassName('songItem'))
let songIndex=0;
let audioElement=new Audio('Music/1.mp3');
let masterPlay=document.getElementById('masterPlay');

// let mastername=document.getElementById("masterSongName")
let myProgressbar=document.getElementById('myProgressBar');
let masterSong=document.getElementById("masterSong")
let timestamp=document.getElementById("timestamp")
songItem.forEach((element,i)=>{
    console.log(element,i)
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songname
   
    // element.getElementsByClassName("timestamp")[0].innerText=songs[i].audioElement.duration

})


const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target)
        makeAllPlays();
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        
        audioElement.src=`Music/${songIndex+1}.mp3`;
        masterSong.innerText=songs[songIndex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')

    })
})

let gif=document.getElementById('gif');
//Handle play pause

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }

    console.log('clic')
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    console.log(audioElement.duration)
    let progress=parseInt((audioElement.currentTime)/(audioElement.duration)*100)
    console.log(progress)
    myProgressbar.value=progress

})
myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressbar.value*audioElement.duration)/100
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9)
        songIndex=0;
    else
    songIndex+=1
    audioElement.src=`Music/${songIndex+1}.mp3`;
    masterSong.innerText=songs[songIndex].songname;
    // mastername.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
        songIndex=0;
    else
    songIndex-=1
    audioElement.src=`Music/${songIndex+1}.mp3`;
    // mastername.innerText=songs[songIndex].songname;
    masterSong.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')

})
// audioElement.play();
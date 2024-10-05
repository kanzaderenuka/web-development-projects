console.log("welldone");
// INITIALISE VARIABLES
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItems'));
// ARRAY OF OBJECTS
let songs = [
    {songName: "Tu- hi-tu-Salam-e-Ishq", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Mast-Kalandar-", filePath: "songs\2.mp3",coverPath:"covers/2.jpg"},
    {songName: "Jane-ja-Salam-e-Ishq", filePath: "songs\3.mp3", coverPath:"covers/3.jpg"},
   {songName: "Tu-chij-badi-Salam-e-Ishq", filePath: "songs\4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Ganpati-bappa-Salam-e-Ishq", filePath: "songs\5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Na-mangu-Salam-e-Ishq", filePath: "songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "Sawan-bhdo-Salam-e-Ishq", filePath: "songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName: "Kale-kale-Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Akhome-me-Salam-e-Ishq", filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName: "In-ankho-ki-masti-Salam-e-Ishq", filePath:"songs/10.mp3", coverPath: "covers/10.jpg"},
]
songItems.forEach((i)=>{
    console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

})
let audioElement = new Audio('songs/1.mp3');
// HANDLE PLAY/PAUSE CLICK
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})
// listen to event
myProgressBar.addEventListener('timeupdate', () =>{

// UPDATE SEEKBAR
progress = parseInt(audioElement.currentTime/audioElement.duration)*100;
// console.log(progress);
myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

    const makeAllPlays =()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        })
    }
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            console.log(e.target);

            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
             masterPlay.classList.add('fa-pause-circle');
    })       
          
        })
    document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
    document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
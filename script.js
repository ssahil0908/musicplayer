console.log("welcome");

let audioElement = new Audio('songs/1.mp3');
//audioElement.play();
let songIndex = 0;
let play = document.getElementById('play');
let progressid = document.getElementById('rangeid');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let songitem = Array.from(document.getElementsByClassName('song'));

let song = [

    { songName: "STAY- Justin Bieber", filePath: "songs/1.mp3", coverPath: "img/1.jpg" },
    { songName: "Let Me Down Slowly- Alec Benjamin", filePath: "songs/2.mp3", coverPath: "img/2.jpg" },
    { songName: "Let Me Love You- DJ Snake", filePath: "songs/3.mp3", coverPath: "img/3.jpg" },
    { songName: "MONTERO- Lil Nas X", filePath: "songs/4.mp3", coverPath: "img/4.jpg" },
    { songName: "Shape of you- Ed Sheeran", filePath: "songs/5.mp3", coverPath: "img/5.jpg" },
    { songName: "INDUSTRY BABY- Lil Nas X", filePath: "songs/6.mp3", coverPath: "img/6.jpg" },

]

songitem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;

}
)


play.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle')
    }
    else {
        audioElement.pause();
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle')
        playsong();
    }

}
);
audioElement.addEventListener('timeupdate', () => {

    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    progressid.value = progress;
});

progressid.addEventListener('change', () => {

    audioElement.currentTime = progressid.value * audioElement.duration / 100;


});

const playsong = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {

        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');

    })
}



/*  Array.from(document.getElementsByClassName('songItemPlay')).addEventListener( 'click' , (element) => {
       if(element.classList=='fa-pause-circle')
    {   element.classList.remove('fa-pause-circle');
      element.classList.add('fa-circle-play');  
  }
  })
*/

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        playsong();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');


    });
});

document.getElementById('next').addEventListener('click', (e) => {

    if (songIndex >= 5) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');

    playsong();
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-pause-circle');


});

document.getElementById('prev').addEventListener('click', () => {

    if (songIndex <= 5) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');

    playsong();
});

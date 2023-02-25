console.log("Welcome to spotify");

// intialize the variables 
var songIndex = 0;
let audioElement = new Audio('songs/Besharmi Ki Height.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let Gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let update_song_name = document.getElementById('masterSongName');

// taking id of  gif for showing which somg is played or not in songlist using document.getElementById
let Gif1 = document.getElementById('gif1');
let Gif2 = document.getElementById('gif2');
let Gif3 = document.getElementById('gif3');
let Gif4 = document.getElementById('gif4');
let Gif5 = document.getElementById('gif5');
let Gif6 = document.getElementById('gif6');
let Gif7 = document.getElementById('gif7');
let Gif8 = document.getElementById('gif8');
let Gif9 = document.getElementById('gif9');
let Gif10 = document.getElementById('gif10');

let listIcon1 = document.getElementById('0');
let listIcon2 = document.getElementById('1');
let listIcon3 = document.getElementById('2');
let listIcon4 = document.getElementById('3');
let listIcon5 = document.getElementById('4');
let listIcon6 = document.getElementById('5');
let listIcon7 = document.getElementById('6');
let listIcon8 = document.getElementById('7');
let listIcon9 = document.getElementById('8');
let listIcon10 = document.getElementById('9');

let songs = [
    { songName: "Besharmi ki height-Beny Dayal", filePath: "songs/Besharmi Ki Height.mp3", coverPath: "covers/besharmi ki height.jpg" },
    { songName: "Arere Yekkada-Unknown", filePath: "songs/Arere Yekkada.mp3", coverPath: "covers/Arere Yekkada.jpg" },
    { songName: "High Heels-Yo Yo Honey Singh", filePath: "songs/high-heels.mp3", coverPath: "covers/High Heels.jpg" },
    { songName: "High Rated Gabru-Guru Randhawa", filePath: "songs/High Rated Gabru.mp3", coverPath: "covers/High Rated Gabru.webp" },
    { songName: "Lagdi Lahore-Guru Randhawa", filePath: "songs/Lagdi Lahore.mp3", coverPath: "covers/Lagdi Lahore.jpg" },
    { songName: "Let-Me-Love-You-Justin Biber", filePath: "songs/Let-Me-Love-You.mp3", coverPath: "covers/Let-Me-Love-You.jpg" },
    { songName: "Manike Mage Hithe-Yohani", filePath: "songs/Manike Mage Hithe.mp3", coverPath: "covers/Manike Mage Hithe.jpg" },
    { songName: "Naach Meri Rani-Guru Randhawa", filePath: "songs/Naach Meri Rani.mp3", coverPath: "covers/Naach Meri Rani.jpg" },
    { songName: "Raatan Lambiya-Neha Kakkar", filePath: "songs/Raatan Lambiya.mp3", coverPath: "covers/Raatan Lambiya.jpg" },
    { songName: "rehna_h_tere_dil_mai-Unknown", filePath: "songs/rehna_h_tere_dil_mai.mp3", coverPath: "covers/rehna_h_tere_dil_mai.jpg" },

];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// handle play/pause click
masterPlay.addEventListener('click', (e) => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        Gif.style.opacity = '1';

        console.log(songIndex);
        if (songIndex == 0) {
            // changing the icons inside the class list 
            listIcon1.classList.remove('fa-circle-play');
            listIcon1.classList.add('fa-circle-pause');

            // adding gif inside the list_item
            Gif1.style.opacity = 1;

        }

        else if (songIndex == 1) {
            // changing the icons inside the class list 
            listIcon2.classList.remove('fa-circle-play');
            listIcon2.classList.add('fa-circle-pause');

            // adding gif inside the list_item
            Gif2.style.opacity = 1;

        }
        else if (songIndex == 2) {
            // changing the icons inside the class list 
            listIcon3.classList.remove('fa-circle-play');
            listIcon3.classList.add('fa-circle-pause');


            // adding gif inside the list_item
            Gif3.style.opacity = 1;

        }
        else if (songIndex == 3) {
            // changing the icons inside the class list 
            listIcon4.classList.remove('fa-circle-play');
            listIcon4.classList.add('fa-circle-pause');


            // adding gif inside the list_item
            Gif4.style.opacity = 1;

        }
        else if (songIndex == 4) {
            // changing the icons inside the class list 
            listIcon5.classList.remove('fa-circle-play');
            listIcon5.classList.add('fa-circle-pause');


            // adding gif inside the list_item
            Gif5.style.opacity = 1;
        }
        else if (songIndex == 5) {
            // changing the icons inside the class list 
            listIcon6.classList.remove('fa-circle-play');
            listIcon6.classList.add('fa-circle-pause');


            // adding gif inside the list_item
            Gif6.style.opacity = 1;

        }
        else if (songIndex == 6) {
            // changing the icons inside the class list 
            listIcon7.classList.remove('fa-circle-play');
            listIcon7.classList.add('fa-circle-pause');


            // adding gif inside the list_item
            Gif7.style.opacity = 1;

        }
        else if (songIndex == 7) {
            // changing the icons inside the class list 
            listIcon8.classList.remove('fa-circle-play');
            listIcon8.classList.add('fa-circle-pause');

            // adding gif inside the list_item
            Gif8.style.opacity = 1;

        }
        else if (songIndex == 8) {
            // changing the icons inside the class list 
            listIcon9.classList.remove('fa-circle-play');
            listIcon9.classList.add('fa-circle-pause');

            // adding gif inside the list_item
            Gif9.style.opacity = 1;

        }
        else if (songIndex == 9) {
            // changing the icons inside the class list 
            listIcon10.classList.remove('fa-circle-play');
            listIcon10.classList.add('fa-circle-pause');

            // adding gif inside the list_item
            Gif10.style.opacity = 1;

        }
        else {
            console.log("Id  not found ");
        }

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');

        Gif1.style.opacity = 0;
        Gif2.style.opacity = 0;
        Gif3.style.opacity = 0;
        Gif4.style.opacity = 0;
        Gif5.style.opacity = 0;
        Gif6.style.opacity = 0;
        Gif7.style.opacity = 0;
        Gif8.style.opacity = 0;
        Gif9.style.opacity = 0;
        Gif10.style.opacity = 0;

        Gif.style.opacity = '0';

        console.log(songIndex);
        if (songIndex == 0) {
            // changing the icons inside the class list 
            listIcon1.classList.remove('fa-circle-pause');
            listIcon1.classList.add('fa-circle-play');
        }

        else if (songIndex == 1) {
            // changing the icons inside the class list 
            listIcon2.classList.remove('fa-circle-pause');
            listIcon2.classList.add('fa-circle-play');

        }
        else if (songIndex == 2) {
            // changing the icons inside the class list 
            listIcon3.classList.remove('fa-circle-pause');
            listIcon3.classList.add('fa-circle-play');

        }
        else if (songIndex == 3) {
            // changing the icons inside the class list 
            listIcon4.classList.remove('fa-circle-pause');
            listIcon4.classList.add('fa-circle-play');

        }
        else if (songIndex == 4) {
            // changing the icons inside the class list 
            listIcon5.classList.remove('fa-circle-pause');
            listIcon5.classList.add('fa-circle-play');

        }
        else if (songIndex == 5) {

            // changing the icons inside the class list 
            listIcon6.classList.remove('fa-circle-pause');
            listIcon6.classList.add('fa-circle-play');

        }
        else if (songIndex == 6) {

            // changing the icons inside the class list 
            listIcon7.classList.remove('fa-circle-pause');
            listIcon7.classList.add('fa-circle-play');

        }
        else if (songIndex == 7) {

            // changing the icons inside the class list 
            listIcon8.classList.remove('fa-circle-pause');
            listIcon8.classList.add('fa-circle-play');

        }
        else if (songIndex == 8) {

            // changing the icons inside the class list 
            listIcon9.classList.remove('fa-circle-pause');
            listIcon9.classList.add('fa-circle-play');

        }
        else if (songIndex == 9) {

            // changing the icons inside the class list 
            listIcon10.classList.remove('fa-circle-pause');
            listIcon10.classList.add('fa-circle-play');

        }
        else {
            console.log("Id  not found ");
        }
    }
}
);

// listen to events

audioElement.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
}
);

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
}
);


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {

        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        songIndex = parseInt(e.target.id);
        console.log(songs[songIndex].filePath);

        audioElement.src = songs[songIndex].filePath;

        console.log(audioElement);

        audioElement.currentTime = 0;
        audioElement.play();

        console.log(e.target.id)

        songIndex = parseInt(e.target.id);



        if (e.target.id == "0") {
            Gif1.style.opacity = 1;
            Gif2.style.opacity = 0;
            Gif3.style.opacity = 0;
            Gif4.style.opacity = 0;
            Gif5.style.opacity = 0;
            Gif6.style.opacity = 0;
            Gif7.style.opacity = 0;
            Gif8.style.opacity = 0;
            Gif9.style.opacity = 0;
            Gif10.style.opacity = 0;


        }
        else if (e.target.id == "1") {

            Gif1.style.opacity = 0;
            Gif2.style.opacity = 1;
            Gif3.style.opacity = 0;
            Gif4.style.opacity = 0;
            Gif5.style.opacity = 0;
            Gif6.style.opacity = 0;
            Gif7.style.opacity = 0;
            Gif8.style.opacity = 0;
            Gif9.style.opacity = 0;
            Gif10.style.opacity = 0;
        }
        else if (e.target.id == "2") {

            Gif1.style.opacity = 0;
            Gif2.style.opacity = 0;
            Gif3.style.opacity = 1;
            Gif4.style.opacity = 0;
            Gif5.style.opacity = 0;
            Gif6.style.opacity = 0;
            Gif7.style.opacity = 0;
            Gif8.style.opacity = 0;
            Gif9.style.opacity = 0;
            Gif10.style.opacity = 0;
        }
        else if (e.target.id == "3") {

            Gif1.style.opacity = 0;
            Gif2.style.opacity = 0;
            Gif3.style.opacity = 0;
            Gif4.style.opacity = 1;
            Gif5.style.opacity = 0;
            Gif6.style.opacity = 0;
            Gif7.style.opacity = 0;
            Gif8.style.opacity = 0;
            Gif9.style.opacity = 0;
            Gif10.style.opacity = 0;
        }
        else if (e.target.id == "4") {

            Gif1.style.opacity = 0;
            Gif2.style.opacity = 0;
            Gif3.style.opacity = 0;
            Gif4.style.opacity = 0;
            Gif5.style.opacity = 1;
            Gif6.style.opacity = 0;
            Gif7.style.opacity = 0;
            Gif8.style.opacity = 0;
            Gif9.style.opacity = 0;
            Gif10.style.opacity = 0;
        }
        else if (e.target.id == "5") {
            Gif1.style.opacity = 0;
            Gif2.style.opacity = 0;
            Gif3.style.opacity = 0;
            Gif4.style.opacity = 0;
            Gif5.style.opacity = 0;
            Gif6.style.opacity = 1;
            Gif7.style.opacity = 0;
            Gif8.style.opacity = 0;
            Gif9.style.opacity = 0;
            Gif10.style.opacity = 0;
        }
        else if (e.target.id == "6") {
            Gif1.style.opacity = 0;
            Gif2.style.opacity = 0;
            Gif3.style.opacity = 0;
            Gif4.style.opacity = 0;
            Gif5.style.opacity = 0;
            Gif6.style.opacity = 0;
            Gif7.style.opacity = 1;
            Gif8.style.opacity = 0;
            Gif9.style.opacity = 0;
            Gif10.style.opacity = 0;
        }
        else if (e.target.id == "7") {
            Gif1.style.opacity = 0;
            Gif2.style.opacity = 0;
            Gif3.style.opacity = 0;
            Gif4.style.opacity = 0;
            Gif5.style.opacity = 0;
            Gif6.style.opacity = 0;
            Gif7.style.opacity = 0;
            Gif8.style.opacity = 1;
            Gif9.style.opacity = 0;
            Gif10.style.opacity = 0;
        }
        else if (e.target.id == "8") {
            Gif1.style.opacity = 0;
            Gif2.style.opacity = 0;
            Gif3.style.opacity = 0;
            Gif4.style.opacity = 0;
            Gif5.style.opacity = 0;
            Gif6.style.opacity = 0;
            Gif7.style.opacity = 0;
            Gif8.style.opacity = 0;
            Gif9.style.opacity = 1;
            Gif10.style.opacity = 0;
        }
        else if (e.target.id == "9") {
            Gif1.style.opacity = 0;
            Gif2.style.opacity = 0;
            Gif3.style.opacity = 0;
            Gif4.style.opacity = 0;
            Gif5.style.opacity = 0;
            Gif6.style.opacity = 0;
            Gif7.style.opacity = 0;
            Gif8.style.opacity = 0;
            Gif9.style.opacity = 0;
            Gif10.style.opacity = 1;
        }
        else {
            console.log("output not found ")
        }
        Gif.style.opacity = 1;
        // updating song name 
        console.log(songs[songIndex].songName);
        update_song_name.innerText = songs[songIndex].songName;

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');


    })
})


document.getElementById('next').addEventListener('click', (e) => {
    songIndex = parseInt(songIndex);
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }

    console.log(songIndex)

    if (songIndex == 0) {

        // changing the gif of list items when we click on the next button 

        Gif1.style.opacity = 1;
        Gif2.style.opacity = 0;
        Gif3.style.opacity = 0;
        Gif4.style.opacity = 0;
        Gif5.style.opacity = 0;
        Gif6.style.opacity = 0;
        Gif7.style.opacity = 0;
        Gif8.style.opacity = 0;
        Gif9.style.opacity = 0;
        Gif10.style.opacity = 0;

        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-play');
        listIcon1.classList.add('fa-circle-pause');
        listIcon2.classList.remove('fa-circle-pause');
        listIcon2.classList.add('fa-circle-play');
        listIcon3.classList.remove('fa-circle-pause');
        listIcon3.classList.add('fa-circle-play');
        listIcon4.classList.remove('fa-circle-pause');
        listIcon4.classList.add('fa-circle-play');
        listIcon5.classList.remove('fa-circle-pause');
        listIcon5.classList.add('fa-circle-play');
        listIcon6.classList.remove('fa-circle-pause');
        listIcon6.classList.add('fa-circle-play');
        listIcon7.classList.remove('fa-circle-pause');
        listIcon7.classList.add('fa-circle-play');
        listIcon8.classList.remove('fa-circle-pause');
        listIcon8.classList.add('fa-circle-play');
        listIcon9.classList.remove('fa-circle-pause');
        listIcon9.classList.add('fa-circle-play');
        listIcon10.classList.remove('fa-circle-pause');
        listIcon10.classList.add('fa-circle-play');


    }
    else if (songIndex == 1) {

        Gif1.style.opacity = 0;
        Gif2.style.opacity = 1;
        Gif3.style.opacity = 0;
        Gif4.style.opacity = 0;
        Gif5.style.opacity = 0;
        Gif6.style.opacity = 0;
        Gif7.style.opacity = 0;
        Gif8.style.opacity = 0;
        Gif9.style.opacity = 0;
        Gif10.style.opacity = 0;

        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-pause');
        listIcon1.classList.add('fa-circle-play');
        listIcon2.classList.remove('fa-circle-play');
        listIcon2.classList.add('fa-circle-pause');
        listIcon3.classList.add('fa-circle-play');
        listIcon4.classList.add('fa-circle-play');
        listIcon5.classList.add('fa-circle-play');
        listIcon6.classList.add('fa-circle-play');
        listIcon7.classList.add('fa-circle-play');
        listIcon8.classList.add('fa-circle-play');
        listIcon9.classList.add('fa-circle-play');
        listIcon10.classList.add('fa-circle-play');
    }
    else if (songIndex == 2) {

        Gif1.style.opacity = 0;
        Gif2.style.opacity = 0;
        Gif3.style.opacity = 1;
        Gif4.style.opacity = 0;
        Gif5.style.opacity = 0;
        Gif6.style.opacity = 0;
        Gif7.style.opacity = 0;
        Gif8.style.opacity = 0;
        Gif9.style.opacity = 0;
        Gif10.style.opacity = 0;

        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-pause');
        listIcon1.classList.add('fa-circle-play');
        listIcon2.classList.remove('fa-circle-pause');
        listIcon2.classList.add('fa-circle-play');
        listIcon3.classList.remove('fa-circle-play');
        listIcon3.classList.add('fa-circle-pause');
        listIcon4.classList.add('fa-circle-play');
        listIcon5.classList.add('fa-circle-play');
        listIcon6.classList.add('fa-circle-play');
        listIcon7.classList.add('fa-circle-play');
        listIcon8.classList.add('fa-circle-play');
        listIcon9.classList.add('fa-circle-play');
        listIcon10.classList.add('fa-circle-play');
    }
    else if (songIndex == 3) {

        Gif1.style.opacity = 0;
        Gif2.style.opacity = 0;
        Gif3.style.opacity = 0;
        Gif4.style.opacity = 1;
        Gif5.style.opacity = 0;
        Gif6.style.opacity = 0;
        Gif7.style.opacity = 0;
        Gif8.style.opacity = 0;
        Gif9.style.opacity = 0;
        Gif10.style.opacity = 0;

        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-pause');
        listIcon1.classList.add('fa-circle-play');
        listIcon2.classList.remove('fa-circle-pause');
        listIcon2.classList.add('fa-circle-play');
        listIcon3.classList.remove('fa-circle-pause');
        listIcon3.classList.add('fa-circle-play');
        listIcon4.classList.remove('fa-circle-play');
        listIcon4.classList.add('fa-circle-pause');
        listIcon5.classList.add('fa-circle-play');
        listIcon6.classList.add('fa-circle-play');
        listIcon7.classList.add('fa-circle-play');
        listIcon8.classList.add('fa-circle-play');
        listIcon9.classList.add('fa-circle-play');
        listIcon10.classList.add('fa-circle-play');
    }
    else if (songIndex == 4) {

        Gif1.style.opacity = 0;
        Gif2.style.opacity = 0;
        Gif3.style.opacity = 0;
        Gif4.style.opacity = 0;
        Gif5.style.opacity = 1;
        Gif6.style.opacity = 0;
        Gif7.style.opacity = 0;
        Gif8.style.opacity = 0;
        Gif9.style.opacity = 0;
        Gif10.style.opacity = 0;

        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-pause');
        listIcon1.classList.add('fa-circle-play');
        listIcon2.classList.remove('fa-circle-pause');
        listIcon2.classList.add('fa-circle-play');
        listIcon3.classList.remove('fa-circle-pause');
        listIcon3.classList.add('fa-circle-play');
        listIcon4.classList.remove('fa-circle-pause');
        listIcon4.classList.add('fa-circle-play');
        listIcon5.classList.remove('fa-circle-play');
        listIcon5.classList.add('fa-circle-pause');
        listIcon6.classList.add('fa-circle-play');
        listIcon7.classList.add('fa-circle-play');
        listIcon8.classList.add('fa-circle-play');
        listIcon9.classList.add('fa-circle-play');
        listIcon10.classList.add('fa-circle-play');

    }
    else if (songIndex == 5) {
        Gif1.style.opacity = 0;
        Gif2.style.opacity = 0;
        Gif3.style.opacity = 0;
        Gif4.style.opacity = 0;
        Gif5.style.opacity = 0;
        Gif6.style.opacity = 1;
        Gif7.style.opacity = 0;
        Gif8.style.opacity = 0;
        Gif9.style.opacity = 0;
        Gif10.style.opacity = 0;

        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-pause');
        listIcon1.classList.add('fa-circle-play');
        listIcon2.classList.remove('fa-circle-pause');
        listIcon2.classList.add('fa-circle-play');
        listIcon3.classList.remove('fa-circle-pause');
        listIcon3.classList.add('fa-circle-play');
        listIcon4.classList.remove('fa-circle-pause');
        listIcon4.classList.add('fa-circle-play');
        listIcon5.classList.remove('fa-circle-pause');
        listIcon5.classList.add('fa-circle-play');
        listIcon6.classList.remove('fa-circle-play');
        listIcon6.classList.add('fa-circle-pause');
        listIcon7.classList.add('fa-circle-play');
        listIcon8.classList.add('fa-circle-play');
        listIcon9.classList.add('fa-circle-play');
        listIcon10.classList.add('fa-circle-play');

    }
    else if (songIndex == 6) {
        Gif1.style.opacity = 0;
        Gif2.style.opacity = 0;
        Gif3.style.opacity = 0;
        Gif4.style.opacity = 0;
        Gif5.style.opacity = 0;
        Gif6.style.opacity = 0;
        Gif7.style.opacity = 1;
        Gif8.style.opacity = 0;
        Gif9.style.opacity = 0;
        Gif10.style.opacity = 0;


        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-pause');
        listIcon1.classList.add('fa-circle-play');
        listIcon2.classList.remove('fa-circle-pause');
        listIcon2.classList.add('fa-circle-play');
        listIcon3.classList.remove('fa-circle-pause');
        listIcon3.classList.add('fa-circle-play');
        listIcon4.classList.remove('fa-circle-pause');
        listIcon4.classList.add('fa-circle-play');
        listIcon5.classList.remove('fa-circle-pause');
        listIcon5.classList.add('fa-circle-play');
        listIcon6.classList.remove('fa-circle-pause');
        listIcon6.classList.add('fa-circle-play');
        listIcon7.classList.remove('fa-circle-play');
        listIcon7.classList.add('fa-circle-pause');
        listIcon8.classList.add('fa-circle-play');
        listIcon9.classList.add('fa-circle-play');
        listIcon10.classList.add('fa-circle-play');

    }
    else if (songIndex == 7) {
        Gif1.style.opacity = 0;
        Gif2.style.opacity = 0;
        Gif3.style.opacity = 0;
        Gif4.style.opacity = 0;
        Gif5.style.opacity = 0;
        Gif6.style.opacity = 0;
        Gif7.style.opacity = 0;
        Gif8.style.opacity = 1;
        Gif9.style.opacity = 0;
        Gif10.style.opacity = 0;

        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-pause');
        listIcon1.classList.add('fa-circle-play');
        listIcon2.classList.remove('fa-circle-pause');
        listIcon2.classList.add('fa-circle-play');
        listIcon3.classList.remove('fa-circle-pause');
        listIcon3.classList.add('fa-circle-play');
        listIcon4.classList.remove('fa-circle-pause');
        listIcon4.classList.add('fa-circle-play');
        listIcon5.classList.remove('fa-circle-pause');
        listIcon5.classList.add('fa-circle-play');
        listIcon6.classList.remove('fa-circle-pause');
        listIcon6.classList.add('fa-circle-play');
        listIcon7.classList.remove('fa-circle-pause');
        listIcon7.classList.add('fa-circle-play');
        listIcon8.classList.remove('fa-circle-play');
        listIcon8.classList.add('fa-circle-pause');
        listIcon9.classList.add('fa-circle-play');
        listIcon10.classList.add('fa-circle-play');


    }
    else if (songIndex == 8) {
        Gif1.style.opacity = 0;
        Gif2.style.opacity = 0;
        Gif3.style.opacity = 0;
        Gif4.style.opacity = 0;
        Gif5.style.opacity = 0;
        Gif6.style.opacity = 0;
        Gif7.style.opacity = 0;
        Gif8.style.opacity = 0;
        Gif9.style.opacity = 1;
        Gif10.style.opacity = 0;

        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-pause');
        listIcon1.classList.add('fa-circle-play');
        listIcon2.classList.remove('fa-circle-pause');
        listIcon2.classList.add('fa-circle-play');
        listIcon3.classList.remove('fa-circle-pause');
        listIcon3.classList.add('fa-circle-play');
        listIcon4.classList.remove('fa-circle-pause');
        listIcon4.classList.add('fa-circle-play');
        listIcon5.classList.remove('fa-circle-pause');
        listIcon5.classList.add('fa-circle-play');
        listIcon6.classList.remove('fa-circle-pause');
        listIcon6.classList.add('fa-circle-play');
        listIcon7.classList.remove('fa-circle-pause');
        listIcon7.classList.add('fa-circle-play');
        listIcon8.classList.remove('fa-circle-pause');
        listIcon8.classList.add('fa-circle-play');
        listIcon9.classList.remove('fa-circle-play');
        listIcon9.classList.add('fa-circle-pause');
        listIcon10.classList.add('fa-circle-play');

    }
    else if (songIndex == 9) {
        Gif1.style.opacity = 0;
        Gif2.style.opacity = 0;
        Gif3.style.opacity = 0;
        Gif4.style.opacity = 0;
        Gif5.style.opacity = 0;
        Gif6.style.opacity = 0;
        Gif7.style.opacity = 0;
        Gif8.style.opacity = 0;
        Gif9.style.opacity = 0;
        Gif10.style.opacity = 1;


        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-pause');
        listIcon1.classList.add('fa-circle-play');
        listIcon2.classList.remove('fa-circle-pause');
        listIcon2.classList.add('fa-circle-play');
        listIcon3.classList.remove('fa-circle-pause');
        listIcon3.classList.add('fa-circle-play');
        listIcon4.classList.remove('fa-circle-pause');
        listIcon4.classList.add('fa-circle-play');
        listIcon5.classList.remove('fa-circle-pause');
        listIcon5.classList.add('fa-circle-play');
        listIcon6.classList.remove('fa-circle-pause');
        listIcon6.classList.add('fa-circle-play');
        listIcon7.classList.remove('fa-circle-pause');
        listIcon7.classList.add('fa-circle-play');
        listIcon8.classList.remove('fa-circle-pause');
        listIcon8.classList.add('fa-circle-play');
        listIcon9.classList.remove('fa-circle-pause');
        listIcon9.classList.add('fa-circle-play');
        listIcon10.classList.remove('fa-circle-play');
        listIcon10.classList.add('fa-circle-pause');

    }
    else {
        console.log("output not found ")
    }
    console.log(songs[songIndex].filePath);

    audioElement.src = songs[songIndex].filePath;

    console.log(audioElement);

    audioElement.currentTime = 0;
    audioElement.play();

    Gif.style.opacity = 1;

    // updating song name 
    console.log(songs[songIndex].songName);
    update_song_name.innerText = songs[songIndex].songName;

    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', () => {

    songIndex = parseInt(songIndex);

    if (songIndex <= 0) {
        songIndex = 0;
    }
    else if (songIndex == 9) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }

    console.log(songIndex)
    if (songIndex == 0) {

        Gif1.style.opacity = 1;
        Gif2.style.opacity = 0;
        Gif3.style.opacity = 0;
        Gif4.style.opacity = 0;
        Gif5.style.opacity = 0;
        Gif6.style.opacity = 0;
        Gif7.style.opacity = 0;
        Gif8.style.opacity = 0;
        Gif9.style.opacity = 0;
        Gif10.style.opacity = 0;

        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-play');
        listIcon1.classList.add('fa-circle-pause');
        listIcon2.classList.remove('fa-circle-pause');
        listIcon2.classList.add('fa-circle-play');
        listIcon3.classList.remove('fa-circle-pause');
        listIcon3.classList.add('fa-circle-play');
        listIcon4.classList.add('fa-circle-play');
        listIcon5.classList.add('fa-circle-play');
        listIcon6.classList.add('fa-circle-play');
        listIcon7.classList.add('fa-circle-play');
        listIcon8.classList.add('fa-circle-play');
        listIcon9.classList.add('fa-circle-play');
        listIcon10.classList.add('fa-circle-play');

    }
    else if (songIndex == 1) {

        Gif1.style.opacity = 0;
        Gif2.style.opacity = 1;
        Gif3.style.opacity = 0;
        Gif4.style.opacity = 0;
        Gif5.style.opacity = 0;
        Gif6.style.opacity = 0;
        Gif7.style.opacity = 0;
        Gif8.style.opacity = 0;
        Gif9.style.opacity = 0;
        Gif10.style.opacity = 0;


        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-pause');
        listIcon1.classList.add('fa-circle-play');
        listIcon2.classList.remove('fa-circle-play');
        listIcon2.classList.add('fa-circle-pause');
        listIcon3.classList.remove('fa-circle-pause');
        listIcon3.classList.add('fa-circle-play');
        listIcon4.classList.add('fa-circle-play');
        listIcon5.classList.add('fa-circle-play');
        listIcon6.classList.add('fa-circle-play');
        listIcon7.classList.add('fa-circle-play');
        listIcon8.classList.add('fa-circle-play');
        listIcon9.classList.add('fa-circle-play');
        listIcon10.classList.add('fa-circle-play');

    }
    else if (songIndex == 2) {

        Gif1.style.opacity = 0;
        Gif2.style.opacity = 0;
        Gif3.style.opacity = 1;
        Gif4.style.opacity = 0;
        Gif5.style.opacity = 0;
        Gif6.style.opacity = 0;
        Gif7.style.opacity = 0;
        Gif8.style.opacity = 0;
        Gif9.style.opacity = 0;
        Gif10.style.opacity = 0;

        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-pause');
        listIcon1.classList.add('fa-circle-play');
        listIcon2.classList.remove('fa-circle-pause');
        listIcon2.classList.add('fa-circle-play');
        listIcon3.classList.remove('fa-circle-play');
        listIcon3.classList.add('fa-circle-pause');
        listIcon4.classList.remove('fa-circle-pause');
        listIcon4.classList.add('fa-circle-play');
        listIcon5.classList.add('fa-circle-play');
        listIcon6.classList.add('fa-circle-play');
        listIcon7.classList.add('fa-circle-play');
        listIcon8.classList.add('fa-circle-play');
        listIcon9.classList.add('fa-circle-play');
        listIcon10.classList.add('fa-circle-play');

    }
    else if (songIndex == 3) {

        Gif1.style.opacity = 0;
        Gif2.style.opacity = 0;
        Gif3.style.opacity = 0;
        Gif4.style.opacity = 1;
        Gif5.style.opacity = 0;
        Gif6.style.opacity = 0;
        Gif7.style.opacity = 0;
        Gif8.style.opacity = 0;
        Gif9.style.opacity = 0;
        Gif10.style.opacity = 0;

        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-pause');
        listIcon1.classList.add('fa-circle-play');
        listIcon2.classList.remove('fa-circle-pause');
        listIcon2.classList.add('fa-circle-play');
        listIcon3.classList.remove('fa-circle-pause');
        listIcon3.classList.add('fa-circle-play');
        listIcon4.classList.remove('fa-circle-play');
        listIcon4.classList.add('fa-circle-pause');
        listIcon5.classList.remove('fa-circle-pause');
        listIcon5.classList.add('fa-circle-play');
        listIcon6.classList.add('fa-circle-play');
        listIcon7.classList.add('fa-circle-play');
        listIcon8.classList.add('fa-circle-play');
        listIcon9.classList.add('fa-circle-play');
        listIcon10.classList.add('fa-circle-play');

    }
    else if (songIndex == 4) {

        Gif1.style.opacity = 0;
        Gif2.style.opacity = 0;
        Gif3.style.opacity = 0;
        Gif4.style.opacity = 0;
        Gif5.style.opacity = 1;
        Gif6.style.opacity = 0;
        Gif7.style.opacity = 0;
        Gif8.style.opacity = 0;
        Gif9.style.opacity = 0;
        Gif10.style.opacity = 0;

        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-pause');
        listIcon1.classList.add('fa-circle-play');
        listIcon2.classList.remove('fa-circle-pause');
        listIcon2.classList.add('fa-circle-play');
        listIcon3.classList.remove('fa-circle-pause');
        listIcon3.classList.add('fa-circle-play');
        listIcon4.classList.remove('fa-circle-pause');
        listIcon4.classList.add('fa-circle-play');
        listIcon5.classList.remove('fa-circle-play');
        listIcon5.classList.add('fa-circle-pause');
        listIcon6.classList.remove('fa-circle-pause');
        listIcon6.classList.add('fa-circle-play');
        listIcon7.classList.add('fa-circle-play');
        listIcon8.classList.add('fa-circle-play');
        listIcon9.classList.add('fa-circle-play');
        listIcon10.classList.add('fa-circle-play');

    }
    else if (songIndex == 5) {
        Gif1.style.opacity = 0;
        Gif2.style.opacity = 0;
        Gif3.style.opacity = 0;
        Gif4.style.opacity = 0;
        Gif5.style.opacity = 0;
        Gif6.style.opacity = 1;
        Gif7.style.opacity = 0;
        Gif8.style.opacity = 0;
        Gif9.style.opacity = 0;
        Gif10.style.opacity = 0;

        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-pause');
        listIcon1.classList.add('fa-circle-play');
        listIcon2.classList.remove('fa-circle-pause');
        listIcon2.classList.add('fa-circle-play');
        listIcon3.classList.remove('fa-circle-pause');
        listIcon3.classList.add('fa-circle-play');
        listIcon4.classList.remove('fa-circle-pause');
        listIcon4.classList.add('fa-circle-play');
        listIcon5.classList.remove('fa-circle-pause');
        listIcon5.classList.add('fa-circle-play');
        listIcon6.classList.remove('fa-circle-play');
        listIcon6.classList.add('fa-circle-pause');
        listIcon7.classList.remove('fa-circle-pause');
        listIcon7.classList.add('fa-circle-play');
        listIcon8.classList.add('fa-circle-play');
        listIcon9.classList.add('fa-circle-play');
        listIcon10.classList.add('fa-circle-play');

    }
    else if (songIndex == 6) {
        Gif1.style.opacity = 0;
        Gif2.style.opacity = 0;
        Gif3.style.opacity = 0;
        Gif4.style.opacity = 0;
        Gif5.style.opacity = 0;
        Gif6.style.opacity = 0;
        Gif7.style.opacity = 1;
        Gif8.style.opacity = 0;
        Gif9.style.opacity = 0;
        Gif10.style.opacity = 0;

        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-pause');
        listIcon1.classList.add('fa-circle-play');
        listIcon2.classList.remove('fa-circle-pause');
        listIcon2.classList.add('fa-circle-play');
        listIcon3.classList.remove('fa-circle-pause');
        listIcon3.classList.add('fa-circle-play');
        listIcon4.classList.remove('fa-circle-pause');
        listIcon4.classList.add('fa-circle-play');
        listIcon5.classList.remove('fa-circle-pause');
        listIcon5.classList.add('fa-circle-play');
        listIcon6.classList.remove('fa-circle-pause');
        listIcon6.classList.add('fa-circle-play');
        listIcon7.classList.remove('fa-circle-play');
        listIcon7.classList.add('fa-circle-pause');
        listIcon8.classList.remove('fa-circle-pause');
        listIcon8.classList.add('fa-circle-play');
        listIcon9.classList.add('fa-circle-play');
        listIcon10.classList.add('fa-circle-play');

    }
    else if (songIndex == 7) {
        Gif1.style.opacity = 0;
        Gif2.style.opacity = 0;
        Gif3.style.opacity = 0;
        Gif4.style.opacity = 0;
        Gif5.style.opacity = 0;
        Gif6.style.opacity = 0;
        Gif7.style.opacity = 0;
        Gif8.style.opacity = 1;
        Gif9.style.opacity = 0;
        Gif10.style.opacity = 0;

        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-pause');
        listIcon1.classList.add('fa-circle-play');
        listIcon2.classList.remove('fa-circle-pause');
        listIcon2.classList.add('fa-circle-play');
        listIcon3.classList.remove('fa-circle-pause');
        listIcon3.classList.add('fa-circle-play');
        listIcon4.classList.remove('fa-circle-pause');
        listIcon4.classList.add('fa-circle-play');
        listIcon5.classList.remove('fa-circle-pause');
        listIcon5.classList.add('fa-circle-play');
        listIcon6.classList.remove('fa-circle-pause');
        listIcon6.classList.add('fa-circle-play');
        listIcon7.classList.remove('fa-circle-pause');
        listIcon7.classList.add('fa-circle-play');
        listIcon8.classList.remove('fa-circle-play');
        listIcon8.classList.add('fa-circle-pause');
        listIcon9.classList.remove('fa-circle-pause');
        listIcon9.classList.add('fa-circle-play');
        listIcon10.classList.add('fa-circle-play');

    }
    else if (songIndex == 8) {
        Gif1.style.opacity = 0;
        Gif2.style.opacity = 0;
        Gif3.style.opacity = 0;
        Gif4.style.opacity = 0;
        Gif5.style.opacity = 0;
        Gif6.style.opacity = 0;
        Gif7.style.opacity = 0;
        Gif8.style.opacity = 0;
        Gif9.style.opacity = 1;
        Gif10.style.opacity = 0;

        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-pause');
        listIcon1.classList.add('fa-circle-play');
        listIcon2.classList.remove('fa-circle-pause');
        listIcon2.classList.add('fa-circle-play');
        listIcon3.classList.remove('fa-circle-pause');
        listIcon3.classList.add('fa-circle-play');
        listIcon4.classList.remove('fa-circle-pause');
        listIcon4.classList.add('fa-circle-play');
        listIcon5.classList.remove('fa-circle-pause');
        listIcon5.classList.add('fa-circle-play');
        listIcon6.classList.remove('fa-circle-pause');
        listIcon6.classList.add('fa-circle-play');
        listIcon7.classList.remove('fa-circle-pause');
        listIcon7.classList.add('fa-circle-play');
        listIcon8.classList.remove('fa-circle-pause');
        listIcon8.classList.add('fa-circle-play');
        listIcon9.classList.remove('fa-circle-pause');
        listIcon9.classList.add('fa-circle-play');
        listIcon10.classList.remove('fa-circle-pause');
        listIcon10.classList.add('fa-circle-play');

    }

    else if (songIndex == 9) {
        Gif1.style.opacity = 0;
        Gif2.style.opacity = 0;
        Gif3.style.opacity = 0;
        Gif4.style.opacity = 0;
        Gif5.style.opacity = 0;
        Gif6.style.opacity = 0;
        Gif7.style.opacity = 0;
        Gif8.style.opacity = 0;
        Gif9.style.opacity = 1;
        Gif10.style.opacity = 0;

        console.log("Prithvi Singh Raikwal");

        // changing the icons of list items when we click on the next button 
        listIcon1.classList.remove('fa-circle-pause');
        listIcon1.classList.add('fa-circle-play');
        listIcon2.classList.remove('fa-circle-pause');
        listIcon2.classList.add('fa-circle-play');
        listIcon3.classList.remove('fa-circle-pause');
        listIcon3.classList.add('fa-circle-play');
        listIcon4.classList.remove('fa-circle-pause');
        listIcon4.classList.add('fa-circle-play');
        listIcon5.classList.remove('fa-circle-pause');
        listIcon5.classList.add('fa-circle-play');
        listIcon6.classList.remove('fa-circle-pause');
        listIcon6.classList.add('fa-circle-play');
        listIcon7.classList.remove('fa-circle-pause');
        listIcon7.classList.add('fa-circle-play');
        listIcon8.classList.remove('fa-circle-pause');
        listIcon8.classList.add('fa-circle-play');
        listIcon9.classList.remove('fa-circle-play');
        listIcon9.classList.add('fa-circle-pause');
        listIcon10.classList.remove('fa-circle-pause');
        listIcon10.classList.add('fa-circle-play');

        songIndex = 8;
    }

    else {
        console.log("output not found ")
    }

    console.log(songs[songIndex].filePath);

    audioElement.src = songs[songIndex].filePath;

    console.log(audioElement);

    audioElement.currentTime = 0;
    audioElement.play();

    Gif.style.opacity = 1;


    // updating song name 
    console.log(songs[songIndex].songName);
    update_song_name.innerText = songs[songIndex].songName;


    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
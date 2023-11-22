// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
let title = document.querySelector(".title");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
    {
        name: "أنا دمي فلسطيني",
        artist: "محمد عساف",
        image: "https://i.scdn.co/image/ab67616d00001e02ac30149cda9889b2784f4f9b",
        path: "media/annadammi.mp3"
    },
    {
        name: "An Phailistín",
        artist: "Sharon Shannon & Róisín Elsafty",
        image: "https://i1.sndcdn.com/artworks-zn9o3VrBPX7z-0-t500x500.png",
        path: "media/anphailistin.mp3"
    },
    {
        name: "Rossa Palestina",
        artist: "Umberto Fiori",
        image: "https://i1.sndcdn.com/artworks-D5HJ0yMIUoEkql5A-QoNUfA-t500x500.jpg",
        path: "media/rossapalestina.mp3"
    },
    {
        name: "Leve Palestina",
        artist: "Kofia",
        image: "https://i1.sndcdn.com/artworks-8sdYTcAWMzUHcURz-TPKXpQ-t500x500.jpg",
        path: "media/levepalestina.mp3"
    },
    {
        name: "قاوم فيداك الاعصار",
        artist: "جوليا بطرس",
        image: "https://i1.sndcdn.com/artworks-000038101652-srjmvk-t500x500.jpg",
        path: "media/resistwithyourhands.mp3"
    },
    {
        name:"ابعت سلام بغصن زيتون",
        artist:"اليانا",
        image:"https://img.youm7.com/ArticleImgs/2023/10/21/62162-%D8%A5%D8%B1%D8%AA%D8%A8%D8%A7%D8%B7-%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%A8%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86.jpg",
        path:"media/olivebranch.mp3"
    },
    {
        name:"رجاوي فلسطيني",
        artist:"The Ultras مغرب",
        image:"https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-1/353666124_222106083965073_1087727377559666484_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YXKKlEjEth8AX9Ro3F1&_nc_ht=scontent-lhr8-1.xx&oh=00_AfCQXXOhew3nGdvdwt7IlAQDcaBsdsfVAmfsGZua9v0Y_A&oe=6561388F",
        path:"media/rajawi.mp3"
    },
    {
        name:"قاوم",
        artist:"غير معروف",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuG12w5Iud2uDsNZLUE6ygeW5js507cTlFNA&usqp=CAU",
        path:"media/resist.mp3"
    }
]
function loadTrack(track_index) {
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();

    // Load a new track
    curr_track.src = track_list[track_index].path;
    curr_track.load();

    // Update details of the track
    track_art.style.backgroundImage =
        "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
    title.textContent = track_list[track_index].name

    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);

    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);

    // Apply a random background color
    random_bg_color();
}

function random_bg_color() {
    // Get a random number between 64 to 256
    // (for getting lighter colors)
    let red = Math.floor(Math.random() * 256 + 64);
    let green = Math.floor(Math.random() * 256 + 64);
    let blue = Math.floor(Math.random() * 256 + 64);


    let red2 = Math.floor(Math.random() * 256 + 64);
    let green2 = Math.floor(Math.random() * 256 + 64);
    let blue2 = Math.floor(Math.random() * 256 + 64);

    // Construct a color with the given values
    let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    let bgColor2 = "rgb(" + red2 + ", " + green2 + ", " + blue2 + ")";

    // Set the background to the new color
    document.body.style.background = "linear-gradient(90deg,"+bgColor+", "+bgColor2+")";
}

// Function to reset all values to their default
function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function playpauseTrack() {
    // Switch between playing and pausing
    // depending on the current state
    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack() {
    // Play the loaded track
    curr_track.play();
    isPlaying = true;

    // Replace icon with the pause icon
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
    // Pause the loaded track
    curr_track.pause();
    isPlaying = false;

    // Replace icon with the play icon
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
    // Go back to the first track if the
    // current one is the last in the track list
    if (track_index < track_list.length - 1)
        track_index += 1;
    else track_index = 0;

    // Load and play the new track
    loadTrack(track_index);
    playTrack();
}

function prevTrack() {
    // Go back to the last track if the
    // current one is the first in the track list
    if (track_index > 0)
        track_index -= 1;
    else track_index = track_list.length - 1;

    // Load and play the new track
    loadTrack(track_index);
    playTrack();
}
function seekTo() {
    // Calculate the seek position by the
    // percentage of the seek slider
    // and get the relative duration to the track
    seekto = curr_track.duration * (seek_slider.value / 100);

    // Set the current track position to the calculated seek position
    curr_track.currentTime = seekto;
}

function setVolume() {
    // Set the volume according to the
    // percentage of the volume slider set
    curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
    let seekPosition = 0;

    // Check if the current track duration is a legible number
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        // Calculate the time left and the total duration
        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        // Add a zero to the single digit time values
        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        // Display the updated duration
        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
// Load the first track in the tracklist
loadTrack(track_index);


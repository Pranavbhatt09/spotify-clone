console.log("Welcome to Spotify")
// Initialize the variables
let songIndex=0;
let audioElement = new Audio('1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName:"Rain Over Me", filePath:"song/1.mp3", coverPath: "covers/rain.jpg"}
    {songName:"Rain Over Me", filePath:"song/1.mp3", coverPath: "covers/rain.jpg"}
    {songName:"Rain Over Me", filePath:"song/1.mp3", coverPath: "covers/rain.jpg"}
    {songName:"Rain Over Me", filePath:"song/1.mp3", coverPath: "covers/rain.jpg"}
    {songName:"Rain Over Me", filePath:"song/1.mp3", coverPath: "covers/rain.jpg"}
    {songName:"Rain Over Me", filePath:"song/1.mp3", coverPath: "covers/rain.jpg"}
]

// audioElement.play()
// handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
    }
})
// listen to events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

    //update seekbar



})
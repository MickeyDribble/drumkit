const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

boom.addEventListener("click", () =>{
    audioBoom.src = "boom.wav"
})
clap.addEventListener("click", () =>{
    audioClap.src = "clap.wav"
})
hihat.addEventListener("click", () =>{
    audioHihat.src = "hihat.wav"
})
kick.addEventListener("click", () =>{
    audioKick.src = "kick.wav"
})
openhat.addEventListener("click", () =>{
    audioOpenHat.src = "openhat.wav"
})
ride.addEventListener("click", () =>{
    audioRide.src = "ride.wav"
})
snare.addEventListener("click", () =>{
    audioSnare.src = "snare.wav"
})
tink.addEventListener("click", () =>{
    audioTink.src = "tink.wav"
})
tom.addEventListener("click", () =>{
    audioTom.src = "tom.wav"
})

document.addEventListener("keypress", (action) => {
    if (action.key === "a" || action.key === "A") {
           audioBoom.src = "boom.wav";
    } 
      else if (action.key === "s" || action.key === "S") {
            audioClap.src = "clap.wav";
    }
      else if (action.key === "d" || action.key === "D") {
        audioHihat.src = "hihat.wav";
    }
      else if (action.key === "f" || action.key === "F") {
            audioKick.src = "kick.wav";
    } else if (action.key === "g" || action.key === "G") {
        audioOpenHat.src = "openhat.wav";
    } else if (action.key === "h" || action.key === "H") {
        audioRide.src = "ride.wav";
    } else if (action.key === "j" || action.key === "J") {
        audioSnare.src = "snare.wav";
    } else if (action.key === "k" || action.key === "K") {
        audioTink.src = "tink.wav";
    } else if (action.key === "l" || action.key === "L") {
        audioTom.src = "tom.wav";
    }})    

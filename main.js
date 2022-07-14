window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
    if(!audio) return; // will end function 
    audio.currentTime = 0; // will reset our audio file to the start
    audio.play(); //this method will play the audio captured in our html audio element
    key.classList.add('playing') // adds class of playing to our key element
})
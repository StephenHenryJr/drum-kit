

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
    if(!audio) return; // will end function if no audio associated with that key
    audio.currentTime = 0; // will reset our audio file to the start
    audio.play(); //this method will play the audio captured in our html audio element
    key.classList.add('playing') // adds class of playing to our key element   
}

// Simply removes class of playing
// there are multiple transitions ending so we eliminate them all except for transform
function removeTransition(e) {
    if(e.propertyName !== 'transform') return // will skip the rest if not = to transform
    this.classList.remove('playing'); // this is equal to whatever it is being called against which in this case is key
}

// selects every element with a class of .key
// then we iterate over every element and add an event listener
// the event listener looks for when there is a transition that has ended on the element
const keys = document.querySelectorAll('.key');
keys.forEach( key => {
    key.addEventListener('transitionend', removeTransition)
})

window.addEventListener('keydown', playSound)
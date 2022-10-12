# drum-kit

A drum kit I'm building following the #JS30 challenge. 
This one looks like it's going to be fun. 

Completed this. 

What was learned here:
 - JS key events
 - playing audio
 - the transitiond event listener

- Data keys which are simply a way of binding elements
	- In this project we used it to bind the “key” div to our different audio elements

- audio.currentTime = 0 was used to ensure the audio is always reset to the beginning when starting to play

- function(e): our functions had the event parameter in all cases to capture the even taking place

- transitionEnd event listener was introduced
	- it simply checks to see if an element has transitioned and that the transition had 	ended
	- here our key element transitions at some point but it will listen for when it has 	ended

- We loop over our keys with forEach because our keys we select end up in an array, otherwise we would simply add the event listener directly to our selected keys

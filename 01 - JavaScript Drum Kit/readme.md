## Exercise 1: JavaScript Drum Kit

### Key Take-aways:

1. How to recognize key in javascript: there are a few properties such as 'code', 'keyCode', 'key', but the most compatible one accross different broswer systems is 'keyCode'.
2. The solution provided by wesbos has a bug: when you press a key and hold it for a few seconds, the transition border color will stick and not go away. I was able to fix the bug by deleting this line of code in the removePlay function "if (e.propertyName !== 'transform') return undefined;"
3. How to select a custom attribute: e.g. .key[data-key["65"]] or div[data-key["65"]]
4. `document.querySelectorAll` returns an array. 'addEventListener' can only be attached to a single element, but not an array of elements.
5. `audio.currentTime=0` is to reset the audio to the beginning of the audio so that it will play if keydown the same key for more than one time

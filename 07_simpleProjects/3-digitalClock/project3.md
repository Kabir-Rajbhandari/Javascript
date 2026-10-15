## JavaScript

### Project 3

#### - Digital Clock

```javascript
function displayClock(){
    const clock = document.querySelector('#clock');
    // => 1000 -> 1 sec
    // => setInterval 2 parameters (one function, another time)
    setInterval(function(){
        let date = new Date();
        clock.innerHTML = date.toLocaleTimeString();
    }, 1000);
}

displayClock();

```
# Javascript

### Project 1

#### - Color Scheme Switcher

```javascript
function colorChanger(){
    const allColor = document.querySelectorAll('.button');
    const body = document.querySelector("body");

    allColor.forEach((btn) => {
        // eventListener
        btn.addEventListener("click", (e)=>{
            console.log(e); // -> mouseEvent
            console.log(e.target); // -> targeted element

            const userInteraction = e.target.id;

            // can also use if-else condition

            switch(userInteraction){
                case "green":
                    body.style.backgroundColor = e.target.id;
                    break;
                case "blue":
                    body.style.backgroundColor = e.target.id;
                    break;
                case "yellow":
                    body.style.backgroundColor = e.target.id;
                    break;

                case "red":
                    body.style.backgroundColor = e.target.id;
                    break;

                default:
                    body.style.backgroundColor = "#EEEAD7";
                    break;
            }

            const reset = document.querySelector('#reset');
            reset.addEventListener("click", (e) => {
                body.style.backgroundColor = "#EEEAD7";
                body.style.animation = "ease-in-out";
            })
            
        });
    });

}
colorChanger()


```

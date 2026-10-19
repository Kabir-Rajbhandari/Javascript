// event listener:
// => submit, click, hover

// in JS most of the events are run sequentially, 


// use eventListeners instead on using the onCLick function, whereas the eventListeners provide propagation function ability 


 // => not good enough -> better to go with event listeners
    // document.getElementById('cloud_four').onclick = () => {
//     alert("Sucessfully clicked ...");
// };

// e => event object
// document.getElementById('cloud_three').addEventListener("click", (e) => {
//     console.log(e);
// }), false;
// -> false => default

// => event bubbling (false)  & event capturing in propagation


// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY (Position related)
// altKey, ctrlKey, shiftkey, keyCode


// attachEvent() -> this basically works earlier
// jQuery -> on


// document.getElementById('image_wrapper').addEventListener("click", () => {
//     console.log("Clicked inside the ul");
// }, true);

// document.getElementById("cloud_two").addEventListener("click", () => {
//     console.log("Cloud Two is clicked...");

// }, true);

// -> when i clicked the specified ID at the very first it's log the cloud two is clicked and then after the clicked inside the ul because the img/li lies under the ul (parent-node)

// -> also know as event bubbling, like (img to ul) i.e. from lower/inside to higher/outside => false / default one

// but incase of event capturing / true, vice-versa (top-bottom)

// document.getElementById('image_wrapper').addEventListener("click", (e) => {
//     console.log("Clicked inside the ul");
// });

// document.getElementById("cloud_two").addEventListener("click", (e) => {
//     console.log("Cloud Two is clicked...");
//     e.stopPropagation();
// });


// // preventDefault ();

// document.getElementById('google').addEventListener("click", (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("Google Clicked");

// });

function eventFunc(){
document.querySelector('#image_wrapper').addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.parentNode);

    if (e.target.tagName === 'IMG') {
        let removeLi = e.target.parentNode;

        // removeLi.remove(); => way 1
        removeLi.parentNode.removeChild(removeLi);
    } else {
        console.log("This is not the IMG tag");

    }


}, false);
}

eventFunc();
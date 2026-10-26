function apiRequest(){
    const requestUrl = 'https://api.github.com/users/kabir-rajbhandari';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl);
    xhr.onreadystatechange = () => {
        console.log(xhr.readyState);
        if (xhr.readyState === 4){
            // const data = xhr.responseText // -> String 
            const data = JSON.parse(xhr.responseText);
            // console.log(this.responseText); ->  using an arrow function (() => {}). Arrow functions do not have their own this; they inherit this from the surrounding scope. Therefore, this does not refer to your XMLHttpRequest object here. Instead, use xhr.responseText, because xhr is the variable that holds your XMLHttpRequest object.

            console.log(typeof(data));
            
            console.log(data.followers);
        }
    };
    xhr.send(); // call


    // ECMAScript: it's a standardized scripting language specification createed to set the rules, syntax, and core features for languages like JavaScript.
    // JS -> run time environmemnt, node js is also implementation of  v8 engine
    // v8 -> it's a Google's open source high-performance JavaScript and WebAssembly engine, written in C++. It is basically used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly, and runs on Windows, macOS, and Linux systems that use x64, IA-32, or ARM processors. V8 can be embedded into any C++ application.
    // JS actually runs under the C++, (act like a wrapper)
    // -> v8 engine: debugging

}

apiRequest();


// // REST parameters..
// function sum (...numbers){
//     let total = 0;
//     for(let i = 0; i < numbers.length; i++){
//         total += numbers[i];
//     }
//     console.log(total);
// }

// sum(10,20,30,40);
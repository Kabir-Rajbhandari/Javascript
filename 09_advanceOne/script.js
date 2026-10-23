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
}

apiRequest();
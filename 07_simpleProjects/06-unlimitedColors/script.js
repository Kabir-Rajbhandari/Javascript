// unlimited colors edition:

function unlimitedColors(){

    const randomColor = () => {
        const hex = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++){
            color += hex [Math.floor(Math.random() * 16)];
        }
        return color;
    };



    let getStarted;

    const startBtn = document.querySelector('#startBtn').addEventListener('click', () => {
        if (!getStarted){
            const bgColorChanger =  () => {       
                document.body.style.backgroundColor = randomColor();
           }
           getStarted = setInterval(bgColorChanger, 1000);
        }
        
    }); 
    const stopBtn = document.querySelector('#stopBtn').addEventListener('click', () => {
        clearInterval(getStarted);
        getStarted = null;
    }); 
}

unlimitedColors();
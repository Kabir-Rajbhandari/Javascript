// BMI Generator

// submit event -> on Form

function calculateBMI(){
    const form = document.querySelector('form');
    // this 'll return empty value on each refresh
    // const userHeight = parseInt(document.querySelector('#userHeight').value);
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // receives value after event occur in inputfield
        const userHeight = parseInt(document.querySelector('#userHeight').value);
        const userWeight = parseInt(document.querySelector('#userWeight').value);

        const result = document.querySelector('#show_result');
        const displayMssg = document.querySelector('#displayMssg');

        if ((userHeight === "") || (isNaN(userHeight)) || (userHeight <= 0)){
            result.innerHTML = "Please provide a valid height";
            result.style.backgroundColor = "#B93636";
            result.style.boxShadow = "0 2px 10px 0 rgba(90, 89, 89, 0.4)";
        }
        else if ((userWeight === "") || (isNaN(userWeight)) || (userWeight <= 0)){
            result.innerHTML = "Please provide a valid weight";
            result.style.backgroundColor = "#B93636";
            result.style.boxShadow = "0 2px 10px 0 rgba(90, 89, 89, 0.4)";
        }
        else{
          const BMI = (userWeight / ((userHeight * userHeight) / 10000)).toFixed(2);
          // show result
          result.innerHTML = `${BMI}`;
          result.style.backgroundColor = "#B8CFB3";
          result.style.boxShadow = "0 5px 10px 0 rgba(53, 53, 53, 0.6)"; 
          
          if(BMI < 18.6){
            displayMssg.innerHTML = "Under Weight";
          }else if((BMI > 18.6) && (BMI < 24.9)){
            displayMssg.innerHTML = "Normal Weight";
          }else{
            displayMssg.innerHTML = "Over Weight";
          }   
        }
    });
}

calculateBMI()
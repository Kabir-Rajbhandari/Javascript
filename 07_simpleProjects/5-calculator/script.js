// project 5 -> Calculator

function calculator(){
  const caclDisplay = '';
  const reader = document.querySelector('#number_reader');
  const operators = document.querySelectorAll('.operator');
  
  const numpad = document.querySelectorAll('.number');
  numpad.forEach((number) => {
    number.addEventListener("click", (e) =>{
      e.preventDefault();
      console.log(e.target.id);
      
    })
  })
}

calculator();
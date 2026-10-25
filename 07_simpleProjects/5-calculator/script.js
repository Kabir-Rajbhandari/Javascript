// project 5 -> Calculator

function calculator(){
  let currentValue = '0';
  let previousValue = null;
  let selectedOperator = null;
  let waitingForNextNumber = false;

  // DOM Elements
  const displayEl = document.querySelector('#calcDisplay');
  const clearBtn = document.querySelector('#clear_data');
  const buttonContainer = document.querySelector('.buttons');

  function formatDisplayNumber(numStr){
    if (numStr === 'Error') return 'Error';

    const parts = numStr.split('.');
    let integerPart = parts[0];
    const decimalPart = parts.length > 1 ? '.' + parts[1] : '';

    // Formats integer part with commas
    const isNegative = integerPart.startsWith('-');
    if(isNegative) integerPart = integerPart.slice(1);

    let formattedInt = parseFloat(integerPart).toLocaleString('en-US');
    if(isNaN(parseFloat(integerPart)) && integerPart === '') formattedInt = '0';
  
    // terminary concept
    return (isNegative ? '-' : '') + formattedInt + decimalPart;

    
    

    buttonContainer.addEventListener('click', (e) => {
      console.log(e.target);
    })
    
  }
}

calculator();
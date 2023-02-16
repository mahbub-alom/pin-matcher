function getPin(){
    const pin = pinGenerator();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function pinGenerator(){
    const random = Math.round(Math.random()*10000);
    return random;
}


document.getElementById('generate-btn').addEventListener('click', function(){
    const pin = getPin();
    const displayPin = document.getElementById('form-control');
    displayPin.value = pin;
})
document.getElementById('calculator').addEventListener('click', function(event){
    const getCalculatorNumber = event.target.innerText;
    const fromControl = document.getElementById('from-control');
    const previousTypeNumber = fromControl.value;
    if(isNaN(getCalculatorNumber)){
        if(getCalculatorNumber === 'C'){
            fromControl.value = '';
        }
        else if(getCalculatorNumber === '<'){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const lastDigits = digits.join('');
            fromControl.value = lastDigits;
        }
    }
    else{
        const newTypeNumber = previousTypeNumber + getCalculatorNumber;
        fromControl.value = newTypeNumber;
    }
})

document.getElementById('submit-btn').addEventListener('click', function(){
    const generatePin = document.getElementById('form-control');
    const generatedPin = generatePin.value;

    const fromControl = document.getElementById('from-control');
    const controlFrom = fromControl.value;
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');
    if(generatedPin === controlFrom){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})
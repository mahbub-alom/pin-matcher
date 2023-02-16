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
    console.log(pin);
})
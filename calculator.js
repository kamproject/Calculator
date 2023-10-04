const btn=document.querySelector('button');
const clrBtn=document.querySelector('#clear-button');
const equalBtn=document.querySelector('#equal-button');
const screenDisplay=document.querySelector('.screen');
console.log(btn);
console.log(clrBtn);
console.log(equalBtn);
console.log(screenDisplay);

function showValue(value){
    screenDisplay.textContent= screenDisplay.textContent+value;
    console.log(screenDisplay.textContent)
}

function wipeOut(){
    screenDisplay.textContent=clrBtn.value;
}

function getResult(){
    screenDisplay.textContent=eval(screenDisplay.textContent);
}
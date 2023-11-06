var activeTheme = localStorage.getItem('Theme')
if(activeTheme === 'dark'){
    dark();
}
var a;
var b = 0;
var operator;
var prevOperator;
const numKey = document.querySelectorAll('.num');
for(let i = 0;i < numKey.length;i++){
    numKey[i].addEventListener('click', () => {
        b = ((b*10)+Number(numKey[i].value));
        document.querySelector('.capturing-texts').innerText = b;
    })
}
const ArithmeticOperation = {
    '+' : function(x,y){return x+y},
    '-' : function(x,y){return x-y},
    '*' : function(x,y){return x*y},
    '/' : function(x,y){return x/y}
}
const ArithmeticKeys = document.querySelectorAll('.arithmaticKeys');
for(let i = 0;i < ArithmeticKeys.length;i++){
    ArithmeticKeys[i].addEventListener('click', () => {
        if(operator === undefined){
            operator = ArithmeticKeys[i].value;
        }
        else{
            prevOperator = operator;
            operator = ArithmeticKeys[i].value;
        }
        document.querySelector('.operation').innerText = operator;
        if(a === undefined){
            a = b;
        }
        else{
            a = ArithmeticOperation[prevOperator](a,b);
        }
        document.querySelector('.captured-texts').innerText = a;
        b = 0;
    })
}
document.getElementById('equal').addEventListener('click', () => {
    check();
})
document.getElementById('delete').addEventListener('click', () => {
    if(b>0){
        b = Math.trunc(b/10);
        document.querySelector('.capturing-texts').innerText = b;
    }
    else if(b<=0){
        if(a>0){
            a = Math.trunc(a/10);
            document.querySelector('.captured-texts').innerText = a;
        }
    }
})
function check(){
    a = ArithmeticOperation[operator](a,b)
    operator = undefined
    b = 0
    document.querySelector('.capturing-texts').innerText = b;
    document.querySelector('.captured-texts').innerText = a;
}

function setTheme(){
    if(activeTheme === 'dark')//activeTheme set in localStorage
    {
        bright();
        window.location.href='/'
    }
    else {
        dark();
        window.location.href='/'
    }
}

function dark(){
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.container').style.backgroundColor = '#2c3e50';
    document.querySelector('.text > h1').style.color = 'white';
    document.querySelector('.theme').innerHTML = '<img src="/assets/brightmode.svg" alt="theme">';
    localStorage.setItem('Theme','dark')
}
function bright(){
    document.querySelector('body').style.backgroundColor = '';
    document.querySelector('.container').style.backgroundColor = '';
    document.querySelector('.container').style.border = '';
    document.querySelector('.text > h1').style.color = '';
    document.querySelector('.theme').innerHTML = '<img src="/assets/darkmode.svg" alt="theme">';
    localStorage.removeItem('Theme')
}
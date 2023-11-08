var a
var b
var c = 0
var operation
var prevOperation
var activeTheme = localStorage.getItem('Theme');
if(activeTheme === 'dark'){
    dark();
}
var isClickedArithmeticKey = false
var isClickedEqualKey = false
const capTextA = document.querySelector('.captured-texts-area > .text-a');
const capTextB = document.querySelector('.captured-texts-area > .text-b');
const operationSymbol = document.querySelector('.captured-texts-area > .operation');
const typing = document.querySelector('.capturing-text-area > .capturing-text');
const numKeys  = document.getElementsByClassName('num');
for(let i = 0;i < numKeys.length;i++){
    numKeys[i].addEventListener('click', () => {
        c = ((c*10)+Number(numKeys[i].value));
        typing.innerText = c;
        // console.log(c)
    })
}

const compute = {
    '+' : function(x,y){return x+y},
    '-' : function(x,y){return x-y},
    '*' : function(x,y){return x*y},
    '/' : function(x,y){
        if(x === 0 && y === 0){
            return 0
        }
        else if(x !== 0 && y === 0){
            return 'Math error'
        }
        return x/y
    }
}

const ArithmeticKeys = document.getElementsByClassName('arithmaticKeys');
for(let i = 0;i < ArithmeticKeys.length;i++){
    ArithmeticKeys[i].addEventListener('click', () => {
        if(operation !== undefined){
            prevOperation = operation
        }
        operation = ArithmeticKeys[i].value;
        isClickedArithmeticKey = true
        if(isClickedArithmeticKey){
            if(a !== undefined && isClickedEqualKey === false){
                a = compute[prevOperation](a,c);
                c = 0
                capTextA.innerText = a;
                typing.innerText = '';
                capTextB.innerText = '';
            }
            else {
                a = c;
                c = 0;
                b = undefined
                capTextA.innerText = a;
                capTextB.innerText = ''
                typing.innerText = '';
            }
        }
        operationSymbol.innerText = ArithmeticKeys[i].value;
        // console.log(ArithmeticKeys[i].value)
    })
}

const equalBtn = document.getElementById('equal');
equalBtn.addEventListener('click', () => {
    isClickedEqualKey = true
    if(a !== undefined && c !== undefined){
        b = c;
        capTextB.innerText = b;
        c = compute[operation](a,c);
        typing.innerText = c;
        if(c === 'Math error'){
            document.querySelector('.warning').style.top = '.5rem';
        }
    }
})

const deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', () => {
    if(c === 0){
        typing.innerText = '';
    }
    if(b === 0){
        capTextB.innerText = '';
        operationSymbol.innerText = '';
    }
    if(a === 0){
        capTextA.innerText = '';
    }
    if(c>0){
        c = Math.trunc(c/10);
        typing.innerText = c;
    }
    else if(b>0){
        b = Math.trunc(b/10);
        capTextB.innerText = b;
    }
    
    else if(a>0){
        a = Math.trunc(a/10);
        capTextA.innerText = a;
    }
})

const clearAll = document.querySelector('.clearAll-btn');
clearAll.addEventListener('click', () => {
    a = undefined
    b = undefined
    c = 0
    capTextA.innerText  = '';
    capTextB.innerText = '';
    typing.innerText = '';
    operationSymbol.innerText = '';
    operation = undefined
    prevOperation = undefined
    document.querySelector('.warning').style.top = '-5rem';
})

const themeBtn = document.querySelector('.theme');
themeBtn.addEventListener('click', () => {
    if(activeTheme === 'dark'){
        return bright();
    }
    return dark();
})

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
    document.querySelector('.text > h1').style.color = '';
    document.querySelector('.theme').innerHTML = '<img src="/assets/darkmode.svg" alt="theme">';
    localStorage.removeItem('Theme')
}
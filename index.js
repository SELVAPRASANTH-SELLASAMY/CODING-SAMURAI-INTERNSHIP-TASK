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
    b = Math.trunc(b/10);
    document.querySelector('.capturing-texts').innerText = b;
})
function check(){
    a = ArithmeticOperation[operator](a,b)
    operator = undefined
    b = 0
    document.querySelector('.capturing-texts').innerText = b;
    document.querySelector('.captured-texts').innerText = a;
}
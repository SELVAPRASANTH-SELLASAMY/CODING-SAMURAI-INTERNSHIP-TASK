let values = 0;
let a = null;
var operation;
window.onload = function(){
    const btn = document.querySelectorAll('.num');
    for(let i=0;i<btn.length;i++){
        btn[i].addEventListener('click',()=>{
            // values = btn[i].value;
            values = (values*10)+Number(btn[i].value);
        })
    }
    const arm = document.querySelectorAll('.arithmaticKeys');
    for(let i=0;i<arm.length;i++){
        arm[i].addEventListener('click',()=>{
            operation = arm[i].value;
            if(a !== null){
                if(operation === '+'){
                    a = a+values;
                }
                else if(operation === '-'){
                    a = a-values;
                }
                else if(operation === '*'){
                    a = a*values;
                }
                else if(operation === '/'){
                    a = a/values;
                }
            }
            else{
                a = values;
            }
            values = 0;
        })
    }
}
const print = () =>{
    alert(values+a)
    alert(a)
}
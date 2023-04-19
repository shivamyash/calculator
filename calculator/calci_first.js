const dashboard = document.getElementById('dashboard') ; 
let expression = ' ' ; 

function press(num){
     expression += num ;
     dashboard.value  = expression ; 
}

function equal(){
    dashboard.value = eval(expression) ; 
    expression = ' ' ; 
}

let clear =  document.getElementById('clear') ; 
clear.addEventListener('click' , function(){
    expression = ' ' ; 
    dashboard.value = expression ; 
})
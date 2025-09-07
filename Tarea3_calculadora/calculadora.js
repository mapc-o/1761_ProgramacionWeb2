let num1 = document.getElementById("num1");
let op1;
let num2 = document.getElementById("num2");
let op2;
let res = document.getElementById("res");


let sumar = document.getElementById("suma");
sumar.addEventListener("click", ()=>{
 getValues();
 res.value = op1 + op2;
 });


let restar = document.getElementById("resta");
restar.addEventListener("click", ()=>{
 getValues();
 res.value = op1 - op2;
 });


let multiplicar = document.getElementById("multi");
multiplicar.addEventListener("click", ()=>{
 getValues();
 res.value = op1 * op2;
 });

function getValues()
{
 op1 = parseInt(num1.value);
 op2 = parseInt(num2.value);
}


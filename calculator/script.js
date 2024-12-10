let input = document.querySelector("input");

let cancel = document.querySelector(".Cancel");
let back_space = document.querySelector(".back-space");

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");
let d_zero = document.querySelector(".d-zero");



let multiplication = document.querySelector(".multiplication");
let addition = document.querySelector(".addition");
let minus = document.querySelector(".minus");
let division = document.querySelector(".division");
let point = document.querySelector(".point");


cancel.addEventListener("click",()=>{
    input.value = "";
});

back_space.addEventListener("click",()=>{
    let last_index = (input.value).length - 1;
    input.value = (input.value).slice(0,last_index);
});

one.addEventListener("click",()=>{
    if(input.value == "0" || input.value == "00"){
        input.value = "";
        input.value = input.value + one.innerText;

    }
    else{
        input.value = input.value + one.innerText;
    }
});
two.addEventListener("click",()=>{
    if(input.value == "0" || input.value == "00"){
        input.value = "";
        input.value = input.value + two.innerText;
    }
    else{
        input.value = input.value + two.innerText;
    }
});
three.addEventListener("click",()=>{
    if(input.value == "0" || input.value == "00"){
        input.value = "";
        input.value = input.value + three.innerText;
    }
    else{
        input.value = input.value + three.innerText;
    }
});
four.addEventListener("click",()=>{
    if(input.value == "0" || input.value == "00"){
        input.value = "";
        input.value = input.value + four.innerText;
    }
    else{
        input.value = input.value + four.innerText;
    }
});
five.addEventListener("click",()=>{
    if(input.value == "0" || input.value == "00"){
        input.value = "";
        input.value = input.value + five.innerText;
        // parseFloat(input.value);
    }
    else{
        input.value = input.value + five.innerText;
        // parseFloat(input.value);
    }
});
six.addEventListener("click",()=>{
    if(input.value == "0" || input.value == "00"){
        input.value = "";
        input.value = input.value + six.innerText;
    }
    else{
        input.value = input.value + six.innerText;
    }
});
seven.addEventListener("click",()=>{
    if(input.value == "0" || input.value == "00"){
        input.value = "";
        input.value = input.value + seven.innerText;
    }
    else{
        input.value = input.value + seven.innerText;
    }
});
eight.addEventListener("click",()=>{
    if(input.value == "0" || input.value == "00"){
        input.value = "";
        input.value = input.value + eight.innerText;
    }
    else{
        input.value = input.value + eight.innerText;
    }
});
nine.addEventListener("click",()=>{
    if(input.value == "0" || input.value == "00"){
        input.value = "";
        input.value = input.value + nine.innerText;
    }
    else{
        input.value = input.value + nine.innerText;
    }
});
zero.addEventListener("click",()=>{
    if(input.value == "" || input.value == "0" || input.value == "00"){
        input.value = zero.innerText;
    }
    else{
        input.value = input.value + zero.innerText;
    }
});
d_zero.addEventListener("click",()=>{
    if(input.value == "" || input.value == "00" || input.value == "0"){
        input.value = d_zero.innerText;
    }
    else{
        input.value = input.value + d_zero.innerText;
    }
});
point.addEventListener("click",()=>{
    if(input.value == "" || input.value == "00" || input.value == '0'){
        input.value = '0' + '.';
    }
    else{
        input.value = input.value + '.';
    }
})
multiplication.addEventListener("click",()=>{
    if(input.value == "" || input.value == "00" || input.value == "0"){
        input.value = '0';
    }
    else{
        input.value = input.value + "*";
    }
})
addition.addEventListener("click",()=>{
    if(input.value == "" || input.value == "00" || input.value == "0"){
        input.value = '0';
    }
    else{
        input.value = input.value + "+";
    }
})
minus.addEventListener("click",()=>{
    if(input.value == "" || input.value == "00" || input.value == "0"){
        input.value = '0';
    }
    else{
        input.value = input.value + "-";
    }
})
division.addEventListener("click",()=>{
    if(input.value == "" || input.value == "00" || input.value == "0"){
        input.value = '0';
    }
    else{
        input.value = input.value + "/";
    }
})

function calculate(){
    try{
        let result = eval(input.value);
        input.value = result;
        // console.log(result);
    }
    catch(err){
        console.log(err);
        input.value = err;
    }
}

/*var ageG = 22;
var ageJoe = 54;
const nameX = 'Governor';
const nameY = 'Delongelo';
console.log(`Joe is ${ageJoe} years old and Governor is ${ageG} years old`);
 if (nameX.length >= nameY.length){
     console.log(`Not sure how this happened. His name is 1 character longer than yours`);
 } else {
     console.log(`Your name is 1 character longer than his`);
 }

function samplefunction(){
    let sample = prompt(`How are you feeling today?`);
    if (sample != null) {
        alert ('upper case true');
       } else if (nameY== nameY.toLowerCase()){
        alert ('lower case true');
       } else {
           console.log(`Over with`);
       }
    }
    

   
    let mood = prompt("How are you feeling today?");{
        
        if (mood == mood.toUpperCase()) {
        alert ('MADMAN');
       } else if (mood == mood.toLowerCase()){
        alert ('Chilling')
       } else {
        alert(`Cooler than a cooler`);
       } 
  
    } */
function add(x,y){
    console.log(x+y); 
    const result = `Whatever ${x} ${y}`;
    return result;
}

add(3,4);

function subtract (x,y){
    console.log(x-y);
    const result = x + y;
    return result;
}

subtract(3,4);

function multiply (x,y){
    console.log(x*y);
    const result = x*y;
    return result;
} 

multiply(3,4);

function divide (x,y){
    console.log(x/y);
    const result = x/y;
    return result;
}


function calculate2(){
    //gather prompt from user
    let math = prompt(`Add (+) Subtract (-) Multiply(*) or Divide(/) two numbers using this prompt`());
    //determine whether add/sub/etc by checking in prompt contains operator with sequence of if statements
    if (math.contains("+")){
        let equation = math.split("+");
        let num1 = number(equation[0]);
        let num2 = number(equation[1]);
        document.getElementById("demo").innerHTML =
        add(num1, num2);
        
    } else if (math.contains("-")){
        let equation = math.split("-");
        let num1 = number(equation[0]);
        let num2 = number(equation[1]);
        document.getElementById("demo").innerHTML =
        subtract(num1, num2);

    } else if (math.contains("*")){
        let equation = math.split("*");
        let num1 = number(equation[0]);
        let num2 = number(equation[1]);
        document.getElementById("demo").innerHTML =
        multiply(num1, num2);

    } else if (math.contains("/")){
        let equation = math.split("/");
        let num1 = number(equation[0]);
        let num2 = number(equation[1]);
        document.getElementById("demo").innerHTML =
        divide(num1, num2);

        //inside each if statement call correlating math function from hard level problem
    
    }
}

calculate();

console.log(calculate);


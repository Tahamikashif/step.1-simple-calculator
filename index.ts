#! /usr/bin/env node => SHABANG    "bin" => binary

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message:"enter first number",type:"number", name: "FirstNumber"},
    {message:"enter second number",type:"number", name: "SecondNumber"},

    {message:"select one of the operator to perform action",
    type:"list",
    name:"operator",
    choices:["addition","subtraction","multiplication","division"]},

    
]);

console.log(answer);

//conditional statement

 if(answer.operator === "addition") {
console.log( answer.FirstNumber + answer.SecondNumber);


}else if(answer.operator === "subtraction"){
    console.log( answer.FirstNumber - answer.SecondNumber); 

}else if(answer.operator === "multiplication"){

    console.log( answer.FirstNumber * answer.SecondNumber);

}else if(answer.operator === "division"){

    console.log( answer.FirstNumber / answer.SecondNumber);

}else{

console.log("please select valid operator");


} 

console.log('THE END');








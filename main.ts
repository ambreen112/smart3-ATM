#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 12000;
let myPin = 1234;

console.log(chalk.bold.yellow("\n WELCOME TO ATM MACHINE \n"));


 console.log(chalk.green("Enter Your Pin"));


 let pinAnswer = await inquirer.prompt([{

    name: "pin",
    type: "number",
    message:(chalk.bold.yellow( "Enter your pin code"))
 }
 ]);
 
 
 if(pinAnswer.pin === myPin){
    console.log(chalk.blue("Your Pin Is Correct, Login Sucessfully!"));
    
 
    
 
 let operAanswer= await inquirer.prompt([{
    name: "operation",
    type: "list",
    message: (chalk.bold.red("Choose your operation")),
    choices: ["Withdraw Amount", "Fast Cash", "Check Balance"]
 }]
)
if (operAanswer.operation === "Withdraw Amount"){
    let amountAnswer= await inquirer.prompt([{
        name: "amount",
        type: "number",
        message: (chalk.bold.green("Enter Your Amount That You Want To Withdraw:"))
    }])

if (amountAnswer.amount > myBalance ){
   console.log(chalk.red("Insufficient Balance"));
} 

   else {
   myBalance-= amountAnswer.amount
   console.log(` ${amountAnswer.amount} Withdraw Successfully!`);
   console.log(`Your remaining balance is ${myBalance}`);
      }      
}

else if (operAanswer.operation === "Fast Cash"){
   let fastcashAnswer= await inquirer.prompt([{
       name: "amount",
       type: "list",
       message: "Select Your Amount",
       choices: [1000, 2000, 3000, 5000, 13000, 50000],
   }])
   if (fastcashAnswer.amount > myBalance){
      console.log(chalk.yellow("Insufficient Balance"));
      
   }
   else{
      myBalance -= fastcashAnswer.amount
      console.log(`${fastcashAnswer.amount} withdraw successfully`);
      
   }
   
}

else if (operAanswer.operation === "Check Balance"){
   console.log(chalk.red(`Your remaining balance is: ${myBalance}`));
   
}
}
else{
   console.log(chalk.blue("pin is incorrect"));
   
}
 
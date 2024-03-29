#! /usr/bin/env node

import inquirer from "inquirer"
let currentBalance = 50000;
let myPin = 123;
let answerPin = await inquirer.prompt(
    [{
        name:"pin",
        message:"Please enter your pin",
        type:"number"
    }]
);
    if(answerPin.pin === myPin){
        console.log ("Welcome user")
    
    let operation = await inquirer.prompt(
        [{
            name:"operationSelect",
            message:"Please selece one operation",
            type:"list",
            choices:["Transaction" , "Balance check"]
        }]);
        if(operation.operationSelect === "Transaction"){
        let withdrawOptions = await inquirer.prompt(
                [{
                    name:"selectedOption",
                    message:"Please chose Withdraw Option",
                    type:"list",
                    choices:["Fast Cash","Cash Withdrawal"]
                }]);
        if(withdrawOptions.selectedOption === "Fast Cash"){
            let fastTransaction = await inquirer.prompt(
                [{
                    name:"fastTransactionAns",
                    message:"Please select Amount",
                    type:"list",
                    choices:["500","1000","5000","10000"]
                }]);
            if (fastTransaction.fastTransactionAns === "500"){
                let selectedAmount=500
                 currentBalance -= selectedAmount
                console.log(`Amount of ${selectedAmount} has been withdrawn \n \t\tRemaining Balance is ${currentBalance}`)
            }
             if (fastTransaction.fastTransactionAns === "1000"){
                let selectedAmount=1000
                currentBalance -= selectedAmount
                console.log(`Amount of ${selectedAmount} has been withdrawn \n \t\tRemaining Balance is ${currentBalance}`)
        }
         if (fastTransaction.fastTransactionAns === "5000"){
            let selectedAmount=5000
            currentBalance -= selectedAmount
            console.log(`Amount of ${selectedAmount} has been withdrawn \n \t\tRemaining Balance is ${currentBalance}`)
        }
         if (fastTransaction.fastTransactionAns === "10000"){
            let selectedAmount=10000
            currentBalance -= selectedAmount
            console.log(`Amount of ${selectedAmount} has been withdrawn \n \t\tRemaining Balance is ${currentBalance}`)
        }};
        if(withdrawOptions.selectedOption === "Cash Withdrawal"){
            let amountAns = await inquirer.prompt(
                [{
                    name:"amount",
                    message:"Please enter amount",
                    type:"number"
                }]
            )
            if (amountAns.amount > currentBalance){
                console.log("Insufficient Balace")
            }
            else{
            currentBalance -=amountAns.amount
            console.log(`Congratulations amount of: ${amountAns.amount} withdrawn \nNew Balance is :${currentBalance}`)
        }}
    }
        if(operation.operationSelect === "Balance check")
            {console.log(`Your Balance is ${currentBalance}`)}
       }
else {console.log("Warning!! Wrong Pin")};
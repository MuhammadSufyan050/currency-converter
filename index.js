#! /usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    USD: 1,
    DIR: 3.67,
    GBP: 0.81,
    INR: 83.36,
    PKR: 278.13,
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter From Currency",
        type: 'list',
        choices: ['USD', 'DIR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: "Enter To Currency",
        type: 'list',
        choices: ['USD', 'DIR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: ' Enter your Amount',
        type: 'number'
    }
]);
let fromAmount = currency[user_answer.from]; //exchange rate
let toAmount = currency[user_answer.to]; //exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);

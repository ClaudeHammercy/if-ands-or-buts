const prompt = require('prompt-sync')();
const friendOne = Number(prompt('How much did Friend One pay?  '));
const friendTwo = Number(prompt('How much did Friend Two pay?  '));
const friendThree = Number(prompt('How much did Friend Three pay?  '));
const total = Number(friendTwo + friendOne + friendThree);

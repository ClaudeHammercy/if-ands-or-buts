const prompt = require('prompt-sync')();
const friendOne = Number(prompt('How much did Friend One pay?  '));
const friendTwo = Number(prompt('How much did Friend Two pay?  '));
const total = friendOne + friendTwo;

if ((total/2) > friendOne) {
    const difference = Number(friendTwo - friendOne);
    const split = difference / 2;
    console.log('Friend one owes friend two ', split);
}
else if ((total/2) < friendOne) {
    const difference = Number(friendOne - friendTwo);
    const split = difference / 2;
    console.log('Friend two owes friend one ', split);
}
const prompt = require('prompt-sync')();
const friendOne = Number(prompt('How much did Friend One pay?  '));
const friendTwo = Number(prompt('How much did Friend Two pay?  '));
const friendThree = Number(prompt('How much did Friend Three pay?  '));
const total = Number(friendTwo + friendOne + friendThree);
const split = total / 3;

if (split > friendOne) {
    const shareOne = split - friendOne;
    console.log('Friend One owes Friends Two and Three ', shareOne, ' apiece.');
}
if (split > friendTwo) {
    const shareTwo = split - friendTwo;
    console.log('Friend Two owes Friends One and Three ', shareOTwo, ' apiece.');
}
if (split > friendThree) {
    const shareThree = split - friendThree;
    console.log('Friend Three owes Friends One and Two ', shareOTwo, ' apiece.');
}
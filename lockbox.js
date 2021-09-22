const pinCode = 5309;

const prompt = require('prompt-sync')();
const input = Number(prompt('Enter your PIN  '));
if (input === pinCode) {
    console.log('Success');
}else {
    console.log('Failure');
    }

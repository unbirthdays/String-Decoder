/* In this challenge, you’ll write a decoder function. The function should take in a string and return a string.

Start by creating a function called decoder that has a single parameter called code.

Each code will be a sequence of numbers and letters, always starting with a number and ending with a letter(s).

Each number tells you how many characters to skip before finding a good letter. After each good letter should come the next next number.

For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, find the ‘h’, skip 2, find the ‘e’, skip 5, find the ‘y’.

So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.
*/

function decoder (code) {
    let splitString = code.split('');
    let copySplitString = [...splitString]; // creates copy of splitString
    let word = [];
    for (let i = 0; i < splitString.length; i++) {
        copySplitString[i] = parseInt(splitString[i], 10); // changes strings to numbers in the copy array and NaN when characters
    }
    for (let i = 0; i < copySplitString.length; i++) {
        if (typeof copySplitString[i] === 'number') {
            i = i + copySplitString[i] + 1;
            word.push(splitString[i]);
        }
    }
    return word.join('');
}
  

console.log(decoder('0h2xce5ngbrdy')); // hey
console.log(decoder('3vdfn')); // n
console.log(decoder('0r')); // r
console.log(decoder('2bna0p1mp2osl0e')); // apple
console.log(decoder('0y4akjfe0s')); // yes
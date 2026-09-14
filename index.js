let code1;

code1 = 7 + 3;

const code2 = 100 / 2 - 10;

const code3 = 13 % 2 + 38;

const message = "The vault has been secured. The combination is: ";

const codeA = '"' + code1 + '-' + code2 + '-' + code3 + '"';


const codeB = `"${code1}-${code2}-${code3}"`;

console.debug(message);
console.debug(codeA);
console.debug(codeB);
// fs for the filesystem | returns an object to fs variable
const fs = require('fs');

// synchronous file reading 
const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textInput);

// synchronous file writing
const textOutput = `This is what we know about the avocado: ${textInput}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOutput);
console.log('File written!');
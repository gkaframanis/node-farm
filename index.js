const fs = require('fs');

// Asynchronous non-blocking code execution moved to the background.
// Accepts a callback function and moves immediately to the next line of code.
// Callback hell.
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    if (err) return console.log('Error 💣');
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        if (err) return console.log('Error 💣');
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
            if (err) return console.log('Error 💣');
            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                if (err) return console.log('Error 💣');
                console.log('Your file has been written 😎');
            })
        })
    })
});

 console.log('Reading file...');
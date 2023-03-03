const express = require('express')
const app = express()
const port = 3000

//route middleware
app.get('/tin-tuc', (req, res) => {res.send('Hello loo!')})

app.get('/trang-chu', (req, res) => {
    var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
    var check = false;
    if(beasts.indexOf('ca')) {
       check = true;
       console.log(check);   
    }
    else {
        _check = false;
    }
    console.log(beasts.indexOf('b'));    // > 1


    return res.send('Hello loo!');

})

// 127.0.0.1 - localhost

app.listen(port, () => { console.log(`Example app listening on port localhost:${port}`)})
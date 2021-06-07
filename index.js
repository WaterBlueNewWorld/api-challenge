const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.post('/add', (req, res) => {
    let n1 = parseInt(req.body.num1);
    let n2 = parseInt(req.body.num2);
    const result = n1 + n2;
    return res.send(result.toString());
});

app.get('/hello', (req, res) => {
    return res.send("Hello There");
});

app.put('/sus', (req, res) => {
    let n1 = parseInt(req.body.num1);
    let n2 = parseInt(req.body.num2);
    const result = n1 - n2
    return res.send(result.toString());
});

app.post('/times', (req, res) => {
    let n1 = parseInt(req.body.num1);
    let n2 = parseInt(req.body.num2);
    const result = n1 * n2
    return res.send(result.toString());
});

app.get('/html', (req, res) => {
    res.set('Conten-Type', 'text/html');
    return res.send(Buffer.from('<!DOCTYPE html><html lang="en-US"><body><h2>Text input fields</h2><div style="background-color: red;"><h1>HELLOOOO</h1></div></body> </html>'));
});

app.listen('3000', () => {
    console.log("Running on port 3000");
});
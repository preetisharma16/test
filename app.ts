import express, {Application, Request, Response, NextFunction }from 'express';
const app = express();
//const msg: string = "Hello There";

//const numbers: number[] = [1,2,3];

app.get('/',(req, res) =>{
    res.send('Hello Priti!!');
});

app.post('/',(req, res) =>{
    
});

app.listen(5000,() => console.log('server running'));

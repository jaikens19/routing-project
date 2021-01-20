const express = require('express');

const app = express();

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get(/^xyz$/  , (req, res) => {
  res.send("That's all I wrote.");
});

app.all('*', (req, res) => {
   const method = req.method
   const path = req.path
   let random_number = Math.floor(Math.random() * 10)
   res.render('layout', { method, path, random_number })
})

const port = 8081;

app.listen(port, () => console.log(`Listening on Port ${port}...`));
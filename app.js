const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.render('hello.ejs');
});

app.get('/top', (req, res) => {
    res.render('top.ejs');
  });

// Tempelkan code untuk menjalankan server
app.listen(3000);

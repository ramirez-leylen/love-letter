const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views", __dirname+"/views");

const port = 3030;

app.get('/', (req,res) => res.render("index.ejs"));


app.listen(port, () => 
    console.log('Servidor online en el puerto '+port));
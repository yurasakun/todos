let express = require('express');
const mongoose = require('mongoose');
const uri = "mongodb+srv://Grinch:hg5hm3MIaVjP4MjZ@cluster0.kq4mb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log('Connected to DB'))
    .catch((error) => console.log(error));

module.exports = client;
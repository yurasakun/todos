let express = require('express');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Grinch:hg5hm3MIaVjP4MjZ@cluster0.kq4mb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    console.log("Connect to database asasd");
    // perform actions on the collection object
    client.close();
});

module.exports = client;
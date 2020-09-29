require('./config/config');


const express = require('express')
const app = express()

// Using Node.js `require()`
const mongoose = require('mongoose');

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));

//cafeUser
//oduXBFaLns0i4FKQ
//mongodb+srv://cafeUser:oduXBFaLns0i4FKQ@cluster0.cnjz6.mongodb.net/cafe?retryWrites=true&w=majority

mongoose.connect(process.env.urlDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (err, res) => {
        if (err) throw err;

        console.log('Base de datos On Line');
    });

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
})
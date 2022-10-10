const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', '.ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', require('./routes/pokemon.routes'));

app.use((req,res,next)=>{
    next();
})
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'),() =>{
    console.log(`Servidor en el puerto ${app.get('port')}`);
})

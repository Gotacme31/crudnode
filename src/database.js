const mysql = require('mysql2');
const { promisify } = require('util');
const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((error, connection) => {
    if(error){
        console.log(error);
    } 
    if(connection) connection.release();
    console.log("Base de datos conectada");
    return;
})

pool.query = promisify(pool.query);

module.exports = pool;
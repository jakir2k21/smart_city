const mysql = require("mysql2");

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password  :'j@kir_2k22',
    database : 'smartcity'
});

connection.connect((err) => {
    if(err){
        return console.error("Error: ", err.message);
    }
    console.log("Connected to the MySQL server.");
});

module.exports = connection;
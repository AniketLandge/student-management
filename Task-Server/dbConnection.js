const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'student_db',
        multipleStatements:true
    });
    
    mysqlConnection.connect((err) => {
        if(!err)
        console.log("db connection succeded");
        else
        console.log("Db connection failed \n Error :" + JSON.stringify(err, undefined,2));
    });


module.exports = mysqlConnection;
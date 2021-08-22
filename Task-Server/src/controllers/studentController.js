
const mysqlConnection = require('../../dbConnection');


exports.getAllStudents = (req, res) => {
    mysqlConnection.query('SELECT * FROM student', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
}

exports.getStudent = (req, res) => {
    mysqlConnection.query('SELECT * FROM student WHERE StudID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
}

exports.deleteStudent = (req, res) => {
    mysqlConnection.query('DELETE FROM student WHERE StudID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
}

exports.addStudent = (req, res) => {
    let stud = req.body;
    var sql = `INSERT INTO student (StudName, StudMathMark, StudScienceMark, StudEnglishMark) VALUES ('${stud.StudName}', ${stud.StudMathMark}, ${stud.StudScienceMark}, ${stud.StudEnglishMark})`;
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
        res.send('Inserted successfully');
        else
            console.log(err);
    })
}

exports.updateStudent = (req, res) => {
    let stud = req.body;
    var sql = `UPDATE student SET StudName = '${stud.StudName}', StudMathMark= ${stud.StudMathMark}, StudScienceMark = ${stud.StudScienceMark}, StudEnglishMark = ${stud.StudEnglishMark} WHERE StudID = ${req.params.id}`;
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.send('Updated successfully');
        else
            console.log(err);
    })
}


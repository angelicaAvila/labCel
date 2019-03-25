var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "odlm2050",
  database: "BD"
});

function compare(){
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    con.connect(function(err) {
        if (err) throw err;
        con.query(`SELECT admin FROM usuario where nombre like ${user.value} and pass like ${pass.value}" `, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    });
}

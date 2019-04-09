const express = require('express');
var mysql = require('mysql');
const app = express();
// const importer = require('node-mysql-importer')
/* enable CORS for testing */

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "odlm2050",
  database: "BD"
});

con.connect(function(err) {
  if (err) throw err;
  //   console.log("Connected!");
});



app.listen('3000', () =>{
  console.log('ok');
});

app.get('/getData',function(req,res){
  // res.json(points);
  // get from DB
   console.log('si entro');
  //  var user = req.body.name;
    //  var pass = req.body.password;
    con.query(`SELECT * FROM usuario` , function (err, result, fields) {
      // where nombre like ${user} and pass like ${pass}
        if (err) throw err;
        console.log(result);
        res.json(result);
        
    });
 });
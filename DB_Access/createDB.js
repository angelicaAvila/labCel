const express = require('express');
var mysql = require('mysql');
const importer = require('node-mysql-importer')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  //   console.log("Connected!");
});

const app = express();

app.listen('4200', () =>{
  console.log('ok');
});

app.get('/createDB',(req,res) =>{
  importer.config({
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'DB'
  })
  
  importer.importSQL('../../../Base de datos/BD.sql').then( () => {
    console.log('all statements have been executed')
  }).catch( err => {
    console.log(`error: ${err}`)
  })
  console.log(res);
  res.send('BD creada')

});
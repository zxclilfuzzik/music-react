const mysql = require('mysql');

// конфигурация пакета

const connection = mysql.createConnection({
  host: "",
  user: "",
  database: "",
  password: ""
});

connection.connect( err => {
  if (err) {
    console.log("error")
    return err;
  } else {
    console.log("database = Okay!")
  }
} )

const mysql = require('mysql');



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 8889,
    database: 'music',
    password: 'root',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
  });

  connection.connect((error) => {
      if(error) {
          return(console.log('Ошибка подключения к базе данных!'));
      } else {
          return(console.log('Поключение прошло успешно'))
      }
  })

  module.exports = connection
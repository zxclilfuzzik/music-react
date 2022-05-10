const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8803
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());

const routes = require('./settings/routes')
routes(app)

app.use(cors())

app.listen(port, () => {
  console.log('Слушаю ${port}');
});



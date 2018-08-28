const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const db = require('../database/connection.js');
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/package/netflix', (req, res) => {
	db().then(function(data){
		console.log(data)
		res.send(JSON.stringify(data));
	})
})


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
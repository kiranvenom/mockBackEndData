const express = require('express');
const data = require('./data');

const port = 5000;

const app = express();

app.get('/', (req, res) => {
	res.send('hi');
});

app.get('/userData', (req, res) => {
	res.send(data);
});

app.listen(port, () => {
	console.log('runnning on port ' + port);
});

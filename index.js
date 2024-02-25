const express = require('express');
const cors = require('cors');
const data = require('./data');

const port = 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('hi');
});

app.get('/userData', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log('running on port ' + port);
});

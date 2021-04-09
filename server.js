const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/agenda-app'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/agenda-app/index.html')
});

app.listen('Servidor iniciado na porta ' + PORT);


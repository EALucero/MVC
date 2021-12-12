const express = require('express');
const app = express();
const router = require('./routers/main');

/* Middleware */
app.use(express.static('public'));

/* Router */
app.use('/', router);

app.listen(3000, () => console.log('Servidor funcionando'));
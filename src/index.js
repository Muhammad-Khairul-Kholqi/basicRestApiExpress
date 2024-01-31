// export express 
const express = require('express');
const usersRoutes = require('../routes/users');
const middlewareLogRequest = require('../middleware/log')

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/users', usersRoutes);

app.listen(4000, () => {
    console.log('Berhasil berjalan di port 4000')
});
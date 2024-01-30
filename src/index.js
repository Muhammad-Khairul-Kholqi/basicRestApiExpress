// export express 
const express = require('express');
// memanggil code dari file users.js
const usersRoutes = require('../routes/users');

const app = express();

app.use('/users', usersRoutes);

app.get("/", (req, res) => {
    res.json ({
        nama: 'khairul',
        umur: 17
    });
})

app.post("/", (req, res) => {
    res.send('http post');
})

app.listen(4000, () => {
    console.log('Berhasil berjalan di port 4000')
});
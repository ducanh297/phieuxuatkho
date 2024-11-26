const express = require('express');
const path = require('path');

// Tạo ứng dụng đầu tiên
const app1 = express();
const port1 = 3000;

app1.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app1.listen(port1, () => {
    console.log(`App 1 listening at http://localhost:${port1}`);
});

// Tạo ứng dụng thứ hai
const app2 = express();
const port2 = 3001;

app2.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index_baogia.html'));
});

app2.listen(port2, () => {
    console.log(`App 2 listening at http://localhost:${port2}`);
});
const path = require('path');

module.exports = {
    index: (req, res) => res.sendFile(path.join(__dirname, '../views/home.html')),
    info: (req, res) => res.sendFile(path.join(__dirname, '../views/about.html')),
}
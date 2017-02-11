var express = require('express');
var path = require('path');

var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'src', 'views'));

app.use(express.static(path.resolve(__dirname, 'public')));


app.get('/*', function (req, res) {
    res.render('index.ejs');
});

app.listen(port, function () {
    console.log("Server is Running on port : " + port)
});
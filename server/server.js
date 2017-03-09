var express = require('express');
var expressHandlebars = require('express-handlebars');
var seo = require('./seo.json');

var app = express();
app.engine('handlebars', expressHandlebars({ layoutsDir: '', defaultLayout: 'index', extname: '.html' }));
app.set('view engine', 'handlebars');

var path = require('path');

function handleSeo(res, req) {
    res.render('home', {
        helpers: {
            foo: function () { 
                var path = req.path.replace('/', '');
                return seo[path] ? seo[path].title : seo.default.title;
            }
        }
    });
}

app.get('/', function (req, res) {
    handleSeo(res, req);
});
app.use(express.static(__dirname + '/dist'));
app.get('/*', function (req, res) {
    handleSeo(res, req);
});
var port = process.env.PORT || 5200;
app.listen(port, function () {
    console.log('Listening on port ' + port);
});
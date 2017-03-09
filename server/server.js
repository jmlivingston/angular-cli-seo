var express = require('express');
var expressHandlebars = require('express-handlebars');
var seoConfig = require('./seo.json');

var app = express();
app.engine('handlebars', expressHandlebars({
    layoutsDir: '',
    defaultLayout: 'index',
    extname: '.html'
}));
app.set('view engine', 'handlebars');

var path = require('path');

function getSeo(res, req) {
    var seo = {
        author: 'John Doe',
        description: 'Another website about an unknown traveler.',
        fbAppId: '123123123123',
        googleSiteVerification: '123123123123',
        image: '/assets/images/logo.jpg',
        keywords: 'man, website, unknown, traveler',
        msValidate: '1231231231232',
        siteName: 'johndoe.com',
        title: 'john doe - the unknown man',
        type: 'article',
        url: req.protocol + ':// ' + req.headers.host + req.url
    };
    var path = req.headers.referer ? req.headers.referer.split('/')[3] : req.path.replace('/', '');
    seo.title = seoConfig[path] ? seoConfig[path].title : seoConfig.default.title;
    return seo;
}

app.get('/', function (req, res) {
    res.render('index', {
        seo: getSeo(res, req)
    });
});

app.get('/api/seo', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'application/json');
    res.send(getSeo(res, req));
});

app.use(express.static(__dirname + '/dist'));

app.get('/*', function (req, res) {
    res.render('index', {
        seo: getSeo(res, req)
    });
});

var port = process.env.PORT || 5200;
app.listen(port, function () {
    console.log('Listening on port ' + port);
});
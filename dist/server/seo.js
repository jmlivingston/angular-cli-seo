const seoConfig = require('./seo.json');
const url = require('url');

function initialize(app) {
    app.get('/api/seo', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.setHeader('Content-Type', 'application/json');
        res.send(getSeo(req, res));
    });
}

function getPath(req) {
    let path = req.path.indexOf('/api/') !== -1 ? req.headers.referer : req.path;
    return url.parse(path, true,  true).pathname.replace(/^\/|\/$/g, '');
}

function getSeo(req, res) {
    const path = getPath(req);
    const pathSeo = seoConfig[path] || {};
    const urlSeo = { url: req.protocol + ':// ' + req.headers.host + '/' + path };
    return Object.assign({}, seoConfig.default, pathSeo, urlSeo);   
}

function render(req, res) {
    res.render('index', {
        seo: getSeo(req, res)
    });
}

module.exports = {
    initialize: initialize,
    render: render
};

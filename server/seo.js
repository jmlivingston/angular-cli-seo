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
    let path = req.path.indexOf('/api/') !== -1 ? (req.headers.referer || req.path) : req.path;
    return url.parse(path, true,  true).pathname.replace(/^\/|\/$/g, '');
}

function getSeo(req, res) {
    const baseUrl = req.protocol + '://' + req.headers.host;
    const path = getPath(req);
    const pathSeo = seoConfig[path] || {};
    pathSeo.image = baseUrl + (pathSeo.image || seoConfig.default.image);
    const urlSeo = { url:  baseUrl + '/' + path };
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

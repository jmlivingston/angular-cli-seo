const seoConfig = require('./seo.json');
const url = require('url');

function initialize(app) {
    app.get('/api/seo', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.setHeader('Content-Type', 'application/json');
        res.send(getSeo(req, res));
    });
}

function getUrl(req) {
    let currentUrl = req.protocol + '://' + req.get('Host') + req.url;
    if(currentUrl.indexOf('/api' !== -1) && req.headers.referer) {
        currentUrl = req.headers.referer;
    }
    return currentUrl;
}

function getPath(req) {
    const currentUrl = getUrl(req);
    return url.parse(currentUrl, true,  true).pathname.replace(/^\/|\/$/g, '');
}

function getSeo(req, res) {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const currentUrl = getUrl(req);   
    const path = getPath(req);
    let pathSeo = Object.assign({}, seoConfig[path] || {});
    pathSeo.image = baseUrl + (pathSeo.image || seoConfig.default.image);
    const urlSeo = { url:  currentUrl };
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

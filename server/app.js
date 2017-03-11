const express = require('express');
const expressHandlebars = require('express-handlebars');
const seo = require('./seo.js');
const argv = require('yargs').default('prod', false).argv;
const app = express();

function initialize(app) {
    app.engine('handlebars', expressHandlebars({
        layoutsDir: __dirname,
        defaultLayout: __dirname + '/../client/index',
        extname: '.html'
    }));

    app.set('view engine', 'handlebars');
    app.set('views', __dirname + '/views');

    app.get('/', function (req, res) {
        seo.render(req, res);
    });

    app.use(express.static(argv.prod ? __dirname + '/../client' : __dirname + '/../../src'));

    seo.initialize(app);

    app.get('/*', function (req, res, next) {
        if (req.path.indexOf('.js') === -1 && req.path.indexOf('.js.map') === -1 && req.path.indexOf('/api/') === -1) {
            seo.render(req, res);
        } else {
            next();
        }
    });

    if (argv.prod) {
        const port = process.env.PORT || 8080;
        app.listen(port, function () {
            console.log('Listening on port ' + port);
        });
    }
}

if (argv.prod) {
    initialize(app);
}

module.exports = {
    initialize: initialize
}

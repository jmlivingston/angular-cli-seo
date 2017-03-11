const argv = require('yargs').argv;
const rimraf = require('rimraf');

function activate() {
    if(argv.clean) {
        clean();
    }
}

function clean() {
    rimraf(__dirname + '/dist/client', () => {

    });
}

activate();

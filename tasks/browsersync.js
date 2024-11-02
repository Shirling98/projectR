const browserSync = require('browser-sync').create();

module.exports = function browsersync() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}

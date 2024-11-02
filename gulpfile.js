const {parallel, series} = require('gulp');

const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.hello = tasks.hello;
exports.style = tasks.style;
exports.scripts = tasks.scripts;
exports.pages = tasks.pages;
exports.images = tasks.images;
exports.sprite = tasks.sprite;
exports.fonts = tasks.fonts;
exports.browsersync = tasks.browsersync;
exports.watching = tasks.watching;
exports.cleanDist = tasks.cleanDist;
exports.building = tasks.building

exports.build = series(
    exports.cleanDist, 
    exports.building);

exports.default = parallel(
    exports.style, 
    exports.images, 
    exports.fonts,
    exports.scripts, 
    exports.browsersync, 
    exports.pages, 
    exports.watching)
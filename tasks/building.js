const {
	src,
    dest
} = require('gulp');

module.exports = function building() {
    return src([
        'app/css/style.min.css',
        '!app/images/**/*.html',
        'app/images/*.*',
        '!app/images/*.svg',
        'app/images/sprite.svg',
        'app/fonts/*.*',
        'app/js/main.min.js',
        'app/**/*.html'
    ], {base: 'app'})
    .pipe(dest('dist'))
}
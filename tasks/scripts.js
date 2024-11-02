const {
	src,
	dest
} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();


module.exports = function scripts() {
    return src([
        'app/js/main.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(map.write('../sourcemaps'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream());
    }
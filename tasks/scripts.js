const {
	src,
	dest
} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const ts = require('gulp-typescript');
const browserSync = require('browser-sync').create();


module.exports = function scripts() {
    return src([
        'app/scripts/*.js'
    ])
        .pipe(map.write('../sourcemaps'))    
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(dest('app/js'))
        .pipe(browserSync.stream());
    }
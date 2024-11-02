//const plugins = [];

const {
	src,
	dest
} = require('gulp');
const scss   = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const map = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

module.exports = function style() {
    return src('app/scss/style.scss')
        .pipe(map.init())
        .pipe(autoprefixer({ overrideBrowseresList: ['last 10 version']}))
        .pipe(concat('style.min.css'))
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
}
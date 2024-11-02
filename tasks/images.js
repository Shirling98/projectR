const {
	src,
	dest
} = require('gulp');
const avif = require('gulp-avif');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');

module.exports = function images() {
    return src(['app/images/src/*.*', '!app/images/src/*.svg'],  { encoding: false })                                                                                     
        .pipe(newer('app/images'))         
        .pipe(avif({ quality: 50 }))
         
        .pipe(newer('app/images')) 
        .pipe(src(['app/images/src/*.*'], { encoding: false }))
        .pipe(webp())

 
        .pipe(newer('app/images')) 
        .pipe(src(['app/images/src/*.*'], { encoding: false }))
        .pipe(imagemin())

        .pipe(dest('app/images'))
}
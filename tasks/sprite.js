const {
	src,
	dest
} = require('gulp');
const svgSprite = require('gulp-svg-sprite');

module.exports = function sprite() {
    return src('app/images/*.svg')
        .pipe(svgSprite({ 
            mode: {
                stack: {
                    sprite: '../sprite.svg',
                    example: true
                }
            }
        }))
        .pipe(dest('app/images'))
}

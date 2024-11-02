const {watch, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

module.exports = function watching() {
    watch(['app/scss/style.scss'], parallel('style'));
    watch(['app/images/src'], parallel('images'));
    watch(['app/fonts/src'], parallel('fonts'));
    watch(['app/js/main.js'], parallel('scripts'));
    watch(['app/components/*', 'app/pages/*'], parallel('pages'));
    watch(['app/*.html']).on('change', browserSync.reload);
}
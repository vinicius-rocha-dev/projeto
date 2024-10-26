const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilador() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./build/styles'));
};

exports.default = function () {
    gulp.watch('./source/styles/*.scss', gulp.parallel(compilador));
};
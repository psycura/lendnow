let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
    return gulp.src('src/css/main.css')
        .pipe(autoprefixer({
            browsers : ['last 2 versions'],
            cascade: false
        }))
               
        .pipe(gulp.dest('dist/css/'));
});
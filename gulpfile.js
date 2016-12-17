let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');

gulp.task('build', ['pages', 'styles', 'scripts', 'assets', 'fonts']);

gulp.task('styles', function () {
    return gulp.src('src/css/**/*.css')
        .pipe(autoprefixer({
            browsers : ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('scripts', function () {
    return gulp.src('src/js/*.js')
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('assets', function () {
    return gulp.src('src/img/**/*.*')
        .pipe(gulp.dest('dist/img/'));
});

gulp.task('fonts', function () {
    return gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('pages', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'));
});


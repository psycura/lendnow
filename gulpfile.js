let gulp = require('gulp');
let cmq = require('gulp-combine-media-queries');
let autoprefixer = require('gulp-autoprefixer');

let paths = {
    styles : {
        src : 'src/css/*/*.css',
        dist : 'dist/css'
    },
    scripts : {
        src : 'src/js/*.js',
        dist : 'dist/js'
    }
};

gulp.task('styles', function () {
    return gulp.src('src/css/main.css')
        .pipe(cmq({
            log : true
        }))
        .pipe(autoprefixer({
            browsers : ['last 3 versions']
        }))
        
        .pipe(gulp.dest('dist/css'));
});
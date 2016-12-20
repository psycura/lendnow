let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');
let spritesmith = require('gulp.spritesmith');
let csso = require('gulp-csso');

let SRC_DIR = 'src/';
let DIST_DIR = 'dist/';

let path = {
    styles : {
        src : SRC_DIR + 'css/**/*.css',
        dist : DIST_DIR + 'css'
    },
    scripts : {
        src : SRC_DIR + 'js/*.js',
        dist : DIST_DIR + 'js'
    },
    assets : {
        src : SRC_DIR + 'img/**/*.*',
        dist : DIST_DIR + 'img'
    },
    html : {
        src : SRC_DIR + '**/*.html',
        dist : DIST_DIR
    },
    sprites : {
        src : SRC_DIR + 'img/icons/*.png',
        distImg : DIST_DIR + 'img',
        imgLocation : 'img/sprite.png',
        distFile : DIST_DIR + 'css/sprite'
    }
    
};

gulp.task('build', ['pages', 'styles', 'scripts', 'assets', 'fonts']);

gulp.task('styles', function () {
    return gulp.src(path.styles.src)
        .pipe(autoprefixer({
            browsers : ['>5%'],
            cascade : false
        }))
        .pipe(csso())
        .pipe(gulp.dest(path.styles.dist));
    
});

gulp.task('scripts', function () {
    return gulp.src(path.scripts.src)
        .pipe(gulp.dest(path.scripts.dist));
});

gulp.task('assets', function () {
    return gulp.src(path.assets.src)
        .pipe(gulp.dest(path.assets.dist));
});

gulp.task('fonts', function () {
    return gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('pages', function () {
    return gulp.src(path.html.src)
        .pipe(gulp.dest(path.html.dist));
});


/* ---------- sprite generator ----------*/
gulp.task('sprite', function () {
    let spriteData = gulp.src(path.sprites.src)
        .pipe(spritesmith({
            imgName : 'sprite.png',
            cssName : 'sprite.scss',
            cssFormat:'css',
            imgPath:path.sprites.imgLocation,
            padding:70
        }));
    spriteData.img.pipe(gulp.dest(path.sprites.distImg));
    spriteData.css.pipe(gulp.dest(path.sprites.distFile));
    
});


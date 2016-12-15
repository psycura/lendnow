let fs = require('fs');

let gulp = require('gulp');
let jade = require('gulp-jade');
let watch=require('watch');




let paths = {
  jade : {
    src : 'src/markups/pages/*.jade',
    dist : 'dist/pages'
  }
};

gulp.task('jade', function() {
  let YOUR_LOCALS = './content.json';
  
  gulp.src(paths.jade.src)
      
      .pipe(jade({
        locals: JSON.parse(fs.readFileSync(YOUR_LOCALS, 'utf-8')),
        pretty : '\t',
      }))
      
      .pipe(gulp.dest(paths.jade.dist))
});

gulp.task('watch', function () {
  gulp.watch(paths.jade.src, ['jade'])
});

gulp.task('default', ['jade','watch']);
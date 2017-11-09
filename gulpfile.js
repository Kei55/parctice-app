//gulp
const gulp = require('gulp');

// plugins
const uglify = require('gulp-uglify');
const spawn = require('child_process').spawn;

var server;

//task
gulp.task('uglify', function() {
    gulp.src('./public/javascripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/javascripts/min'))
});

gulp.task('clean', () => {
  gulp.src([
  ])
  .pipe(clean())
});

gulp.task('default', () => {
  runSequence('clean')
});

var gulp = require('gulp');
var compass = require('gulp-compass'),
		path = require('path');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('compass', function() {
  gulp.src('./src/*.scss')
  .pipe(compass({
    project: path.join(__dirname, 'assets'),
    css: 'css',
    sass: 'sass'
  }))
  .pipe(gulp.dest('app/assets/temp'));
});


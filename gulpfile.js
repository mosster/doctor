var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    sass        = require('gulp-sass'),
    csso        = require('gulp-csso'),
    uglify      = require('gulp-uglify'),
    jade        = require('gulp-jade'),
    concat      = require('gulp-concat'),
    livereload  = require('gulp-livereload'),
    tinylr      = require('tiny-lr'),
    marked      = require('marked'),
    path        = require('path'),
    server      = tinylr();
    tasks       = ['js','css','templates','watch'];
 
// ---------------------------------------
// Watch Task
// ---------------------------------------
gulp.task('default', tasks);

// ---------------------------------------
// Styling
// ---------------------------------------
gulp.task('css', function() {
  return gulp.src('assets/sass/*.scss')
    .pipe( 
      sass({ 
        includePaths: ['assets/sass'],
        errLogToConsole: true
      } ) )
    .pipe( csso() )
    .pipe( gulp.dest('build/css/') )
    .pipe( livereload( server ));
});

// ---------------------------------------
// Scripts
// ---------------------------------------
gulp.task('js', function() {
  return gulp.src('assets/js/*.js')
    .pipe( uglify() )
    .pipe( concat('all.min.js'))
    .pipe( gulp.dest('build/js/'))
    .pipe( livereload( server ));
});

// ---------------------------------------
// Templates
// ---------------------------------------
gulp.task('templates', function() {
  return gulp.src('app/views/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('build/'))
    .pipe( livereload( server ));
});

// ---------------------------------------
// Watch
// ---------------------------------------
gulp.task('watch', function () {
  server.listen(35729, function (err) {
    if (err) {
      return console.log(err);
    }

    gulp.watch('assets/sass/*.scss',['css']);

    gulp.watch('assets/js/*.js',['js']);

    gulp.watch('app/views/*.jade',['templates']);
    
  });
});


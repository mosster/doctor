var gulp         =  require('gulp'),
    colors       =  require('gulp-util').colors,
    concat       =  require('gulp-concat'),
    csso         =  require('gulp-csso'),
    jade         =  require('gulp-jade'),
    uglify       =  require('gulp-uglify'),
    livereload   =  require('gulp-livereload'),
    postcss      =  require('gulp-postcss'),
    prefix       =  require('autoprefixer'),
    tinylr       =  require('tiny-lr'),
    sass         =  require('gulp-sass'),
    server       =  tinylr();
    tasks        =  ['js','css','templates','watch'];

// ---------------------------------------
// Watch Task
// ---------------------------------------
gulp.task('default', tasks);

console.log(colors.green('======================================================='));
console.log(colors.green('Start tasks'));
console.log(colors.green('======================================================='));

// ---------------------------------------
// Styling
// ---------------------------------------
gulp.task('css', function() {
  return gulp.src('assets/sass/**/*.scss')
    .pipe( 
      sass({ 
        includePaths: ['assets/sass/**/*'],
        errLogToConsole: true
      })
    )
    .pipe(
      postcss([ 
        prefix({ 
          browsers: ['last 2 versions'] 
        }) 
      ])
    )
    .pipe( csso() )
    .pipe( gulp.dest('build/css/') )
    .pipe( livereload( server ));
});

// ---------------------------------------
// Scripts
// ---------------------------------------
gulp.task('js', function() {
  return gulp.src('assets/js/*/*.js')
    .pipe( uglify() )
    .pipe( concat('main.min.js'))
    .pipe( gulp.dest('build/js/'))
    .pipe( livereload( server ));
});

// ---------------------------------------
// Templates
// ---------------------------------------
gulp.task('templates', function() {
  return gulp.src('app/views/*.jade')
    .pipe( 
      jade({
        pretty: true
      })
    )
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
    gulp.watch('assets/sass/**/*.scss',['css']);
    gulp.watch('assets/js/**/*.js',['js']);
    gulp.watch('app/views/*.jade',['templates']);
    
  });
});

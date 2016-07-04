var gulp         =  require('gulp'),
    postcss      =  require('gulp-postcss'),
    sourcemaps   =  require('gulp-sourcemaps'),
    prefix       =  require('autoprefixer'),
    colors       =  require('gulp-util').colors,
    concat       =  require('gulp-concat'),
    csso         =  require('gulp-csso'),
    jade         =  require('gulp-jade'),
    uglify       =  require('gulp-uglify'),
    lost         =  require('lost'),
    livereload   =  require('gulp-livereload'),
    tinylr       =  require('tiny-lr'),
    sass         =  require('gulp-sass'),
    server       =  tinylr();
    tasks        =  ['js','css','templates','watch'];

var paths = {
  cssSource: 'assets/sass/',
  cssDestination: 'build/css/',
  jsSource: 'assets/js/',
  jsDestination: 'build/js/',
  htmlSource: 'app/views/'
};

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
  return gulp.src(paths.cssSource + '**/*.scss')
    .pipe( 
      sass({ 
        includePaths: [paths.cssSource + '**/*'],
        errLogToConsole: true
      })
    )
    .pipe(
      postcss([ 
        prefix({ 
          browsers: ['last 2 versions'] 
        }),
        lost()
      ])
    )
    .pipe( csso() )
    .pipe( gulp.dest(paths.cssDestination) )
    .pipe( livereload( server ));
});


// ---------------------------------------
// Scripts
// ---------------------------------------
gulp.task('js', function() {
  return gulp.src(paths.jsSource + '**/*.js')
    .pipe( uglify() )
    .pipe( concat('main.min.js'))
    .pipe( gulp.dest(paths.jsDestination))
    .pipe( livereload( server ));
});

// ---------------------------------------
// Templates
// ---------------------------------------
gulp.task('templates', function() {
  return gulp.src(paths.htmlSource + '*.jade')
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
    gulp.watch(paths.cssSource + '**/*.scss',['css']);
    gulp.watch(paths.jsSource + '**/*.js',['js']);
    gulp.watch(paths.htmlSource + '*.jade',['templates']);
    
  });
});

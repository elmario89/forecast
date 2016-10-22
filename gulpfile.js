var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect') 

gulp.task('default', function() {
 // place code for your default task here
}); 
gulp.task('scripts', function() {
 return gulp
   .src('src/**/*.js')
   .pipe(concat('app.js'))
   .pipe(gulp.dest('dist'));
});
gulp.task('sass', function () {
  return gulp
    .src('src/assets/**/*.sass')
    .pipe(sass())
    .pipe(concat('sass.style.css'))
    .pipe(gulp.dest('dist/assets'));
});
gulp.task('templates', function() {
 return gulp
   .src('src/**/*.html')
   .pipe(gulp.dest('dist'));
});
gulp.task('connect', function() {
  connect.server({
    root: 'dist'
  });
});



gulp.task('build', ['scripts', 'templates', 'sass', 'connect']);

gulp.task('watch', function() {
 gulp.watch('src/**/*.js', ['scripts']);
 gulp.watch('src/**/*.html', ['templates']);
 gulp.watch('src/**/*.sass', ['sass']);
});

gulp.task('default', ['build', 'watch', 'sass', 'connect']);
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
  
gulp.task('default', function() {
 // place code for your default task here
}); 
gulp.task('scripts', function() {
 return gulp
   .src('src/javascript/**/*.js')
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

gulp.task('build', ['scripts', 'templates', 'sass']);

gulp.task('watch', function() {
 gulp.watch('src/javascript/**/*.js', ['scripts']);
 gulp.watch('src/**/*.html', ['templates']);
 gulp.watch('src/**/*.sass', ['sass']);
});

gulp.task('default', ['build', 'watch']);
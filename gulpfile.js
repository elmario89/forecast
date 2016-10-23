var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    clean = require('gulp-clean');

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
gulp.task('fonts', function() {
  return gulp
    .src('src/assets/fonts/*.ttf')
    .pipe(gulp.dest('dist/assets/fonts'));
});
gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});
gulp.task('connect', function() {
  connect.server({
    root: 'dist'
  });
});



gulp.task('build', ['scripts', 'templates', 'sass', 'fonts', 'connect']);

gulp.task('watch', function() {
 gulp.watch('src/**/*.js', ['scripts']);
 gulp.watch('src/**/*.html', ['templates']);
 gulp.watch('src/**/*.sass', ['sass']);
 gulp.watch('src/**/*.ttf', ['fonts']);
});

gulp.task('default', ['build', 'watch', 'sass', 'fonts', 'connect']);
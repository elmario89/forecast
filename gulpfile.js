var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect') 

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
gulp.task('connect', function() {
  connect.server({
    root: 'dist'
  });
});
gulp.task('fonts', function() {
    return gulp
      .src(['src/assets/**/*.*'])
      .pipe(gulp.dest('dist/assets'));
});
gulp.task('images', function() {
    return gulp
      .src(['src/assets/**/*.*'])
      .pipe(gulp.dest('dist/assets'));
});


gulp.task('build', ['scripts', 'templates', 'sass', 'connect', 'fonts', 'images']);

gulp.task('watch', function() {
 gulp.watch('src/javascript/**/*.js', ['scripts']);
 gulp.watch('src/**/*.html', ['templates']);
 gulp.watch('src/**/*.sass', ['sass']);
 gulp.watch('src/**/*.*', ['fonts']);
 gulp.watch('src/**/*.*', ['images']);
});

gulp.task('default', ['build', 'watch', 'sass', 'connect', 'fonts', 'images']);
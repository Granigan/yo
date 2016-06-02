var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var eslint = require('gulp-eslint');

var files = '*.js';

gulp.task('lint', function() {
  return gulp.src(files)
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', notify.onError('Error: <%= error.message %>'));
});

gulp.task('default', ['lint'], function() {
  return gulp.watch(files, ['lint']);
});

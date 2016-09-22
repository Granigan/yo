const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');
const watch = require('gulp-watch');

gulp.task('lint', () =>
  gulp.src(['src/*.js', 'spec/**/*.js', '*.js'])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', notify.onError('Error: <%= error.message %>'))
);

gulp.task('babel', ['lint'], () =>
  gulp.src('src/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'))
    .on('error', notify.onError('Error: <%= error.message %>'))
);

gulp.task('test', ['babel'], () =>
  gulp
    .src('spec/**/*.js', {read: false})
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec'}))
    .on('error', notify.onError('Error: <%= error.message %>'))
);

gulp.task('default', ['test'], () => {
  // watch('src/*.js', () => gulp.run(['babel']));
  watch('*.js', () => gulp.run(['lint']));
  watch(['src/*.js', 'spec/**/*.js'], () => gulp.run(['test']));
});

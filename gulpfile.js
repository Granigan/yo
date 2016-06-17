const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');

const files = ['src/*.js', '*.js'];

gulp.task('lint', () =>
  gulp.src(files)
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', notify.onError('Error: <%= error.message %>'))
);

gulp.task('babel', () =>
  gulp.src('src/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'))
    .on('error', notify.onError('Error: <%= error.message %>'))
);

gulp.task('default', ['lint', 'babel'], () =>
  gulp.watch(files, ['lint', 'babel'])
);

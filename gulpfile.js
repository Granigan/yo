const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');
const watch = require('gulp-watch');
const todo = require('gulp-todo');

const lint = (files) =>
  gulp.src(files)
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', notify.onError('Error: <%= error.message %>'));


gulp.task('lint-spec', () => lint('spec/**/*.js'));
gulp.task('lint-src', () => lint('src/*.js'));
gulp.task('lint-gulp', () => lint('*.js'));

gulp.task('babel', ['lint-src'], () =>
  gulp.src('src/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'))
    .on('error', notify.onError('Error: <%= error.message %>'))
);

gulp.task('test', ['lint-spec'], () =>
  gulp
    .src('spec/**/*.js', {read: false})
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec'}))
    .on('error', notify.onError('Error: <%= error.message %>'))
);

gulp.task('todo', () =>
  gulp.src(['src/*.js', 'spec/**/*.js'])
    .pipe(todo())
    .pipe(gulp.dest('./'))
);

gulp.task('default', ['lint-gulp', 'lint-src', 'test', 'todo'], () => {
  watch('*.js', () => gulp.run(['lint-gulp']));
  watch(['src/*.js', 'spec/**/*.js'], () => gulp.run(['lint-src', 'test', 'todo']));
});

gulp.task('build', ['babel', 'test']);

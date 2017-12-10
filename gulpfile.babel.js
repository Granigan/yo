const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');
const watch = require('gulp-watch');
const todo = require('gulp-todo');
const browserify = require('gulp-browserify');


const sourceFiles = 'src/**/*.js';
const specFiles = 'spec/**/*.js';

const lint = (files) =>
  gulp.src(files)
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(babel({
      presets: ['es2017']
    }))
    .on('error', notify.onError('Error: <%= error.message %>'));


gulp.task('lint-spec', () => lint(specFiles));
gulp.task('lint-src', () => lint(sourceFiles));
gulp.task('lint-gulp', () => lint('*.js'));

gulp.task('babel', ['lint-src'], () =>
  gulp.src(sourceFiles)
    .pipe(babel({
      presets: ['es2017']
    }))
    .pipe(plumber())
    .pipe(gulp.dest('dist'))
    .on('error', notify.onError('Error: <%= error.message %>'))
);

gulp.task('browserify', ['lint-src', 'babel'], () =>
  gulp.src('./dist/yo.js')
    .pipe(browserify({
      insertGlobals : true,
      transform: ['babelify']
    }))
    .pipe(plumber())
    .pipe(gulp.dest('browserify'))
    .on('error', notify.onError('Error: <%= error.message %>'))
);

gulp.task('test', ['lint-spec'], () =>
  gulp
    .src(specFiles, {read: false})
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec'}))
    .pipe(babel({
      presets: ['es2017']
    }))
    .on('error', notify.onError('Error: <%= error.message %>'))
);

gulp.task('todo', () =>
  gulp.src([sourceFiles, specFiles])
    .pipe(todo())
    .pipe(babel({
      presets: ['es2017']
    }))
    .pipe(gulp.dest('./'))
);

gulp.task('default', ['lint-gulp', 'lint-src', 'test', 'todo'], () => {
  watch('*.js', () => gulp.run(['lint-gulp']));
  watch([sourceFiles, specFiles], () => gulp.run(['lint-src', 'test', 'todo']));
});

gulp.task('build', ['babel', 'test']);

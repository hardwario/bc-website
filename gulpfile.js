const gulp = require('gulp');
const gutil = require('gulp-util');
const autoprefixer = require('gulp-autoprefixer');
const child = require('child_process');

gulp.task('hugo', () => {
  const hugo = child.spawn('hugo', ['serve']);

  const hugoLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Hugo: ' + message))
  };

  hugo.stdout.on('data', hugoLogger);
  hugo.stderr.on('data', hugoLogger);
});

gulp.task("prefix", () => {
  gulp.src('./public/**/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest(function (file) {
      return file.base;
    }))
})

gulp.task('start', ['hugo']);

var gulp = require('gulp');
var gutil = require('gulp-util');
var child = require('child_process');

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

gulp.task('start', ['hugo']);

var gulp = require('gulp');
var gutil = require('gulp-util');
var child = require('child_process');

gulp.task('hugo', () => {
  const jekyll = child.spawn('hugo', ['serve']);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Hugo: ' + message))
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('start', ['hugo']);

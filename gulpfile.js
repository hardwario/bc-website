const gulp = require('gulp');
const gutil = require('gulp-util');
const autoprefixer = require('gulp-autoprefixer');
const child = require('child_process');
const sass = require("gulp-sass");
const hash = require("gulp-hash");
const del = require("del");
var purify = require('gulp-purifycss');
let cleanCSS = require('gulp-clean-css');

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


// Compile SCSS files to CSS
gulp.task("scss", function () {
    //del(["static/_assets/css/www/**/*"])
    gulp.src("src/scss/main.scss")
    //del(["static/_assets/css/*"])
        .pipe(sass({outputStyle : "compressed"}))
        .pipe(autoprefixer({browsers : ["last 20 versions"]}))
        .pipe(purify(['static/_assets/js/**/*.js', 'layouts/**/*.html']))
        .pipe(cleanCSS({debug: true}, (details) => {
          console.log(`${details.name}: ${details.stats.originalSize}`);
          console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }))
        .pipe(hash())
        .pipe(gulp.dest("static/_assets/css"))
        //Create a hash map
        .pipe(hash.manifest("hash.json"))
        //Put the map in the data directory
        .pipe(gulp.dest("data/css"))
});

// Compile SCSS files to CSS for Documentation
gulp.task("scss-doc", function () {
    //del(["static/_assets/css/*"])
    gulp.src("src/scss/main-doc.scss")
        .pipe(sass({outputStyle : "compressed"}))
        .pipe(autoprefixer({browsers : ["last 20 versions"]}))
        .pipe(hash())
        .pipe(gulp.dest("static/_assets/css"))
        //Create a hash map
        .pipe(hash.manifest("hash.json"))
        //Put the map in the data directory
        .pipe(gulp.dest("data/css"))
});

// Hash javascript
gulp.task("js", function () {
    //del(["static/_assets/js/www/**/*"])
    gulp.src(["src/js/**/*", "node_modules/bootstrap/dist/js/bootstrap.min.js"])
        .pipe(hash())
        .pipe(gulp.dest("static/_assets/js"))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("data/js"))
});

// Watch asset folder for changes
gulp.task("watch", ["js","scss", "scss-doc"], function () {
    gulp.watch("src/scss/**/*", ["scss"])
    gulp.watch("src/js/**/*", ["js"])
});


gulp.task("prefix", () => {
  gulp.src('./public/**/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest(function (file) {
      return file.base;
    }))
});

gulp.task('start', ['hugo', 'watch']);

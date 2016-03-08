require('babel-core/register');
require('coffee-script/register');

var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  mocha = require('gulp-mocha');

gulp.task('get-jokes', require('./gulp/tasks/get_jokes'));

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'bin/www',
    ext: 'js nunjucks coffee',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('test', function() {
  return gulp.src('test/index.js', { read: false })
      .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('default', [
  'develop'
]);

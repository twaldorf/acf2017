var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var deploy      = require('gulp-gh-pages');

gulp.task('css', function() {
  gulp.src('css/less/[^_]*.less')
    .pipe(less())
    .pipe(gulp.dest('css/'))
    console.log('piping!')
})

gulp.task('watch', function() {
    gulp.watch('css/less/*.less', ['css']);  // Watch all the .less files, then run the less task
    console.log('watching!');
});

gulp.task('default', ['css','watch'])

gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});

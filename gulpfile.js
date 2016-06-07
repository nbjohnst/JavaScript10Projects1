var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('scripts', function () {
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});


// gulp.task('default', function() {
//   // place code for your default task here
// });
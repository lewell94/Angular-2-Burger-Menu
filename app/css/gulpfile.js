var gulp          = require('gulp'),
    rename        = require('gulp-rename'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps');

gulp.task('css', function() {
	return gulp.src('./src/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed'
		})
		.on('error', sass.logError))
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest('./'));
})
var gulp 			= require('gulp'),
	nano 			= require('gulp-cssnano'),
	csslint 		= require('gulp-csslint'),
	emailBuilder 	= require('gulp-email-builder');

gulp.task('css', function() {
	gulp.src('css/*.css')
		.pipe(csslint())
		.pipe(csslint.reporter());
});

gulp.task('emailBuilder', function() {
	return gulp.src(['*.html'])
		.pipe(emailBuilder())
		.pipe(gulp.dest('production/'));
});

gulp.task('cnano', function() {
    return gulp.src('css/inline.css')
        .pipe(nano(
        	//{discardComments: {removeAll: false}}
        ))
        .pipe(gulp.dest('out/'));
});
var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync'); 

gulp.task('sass', function () {  
    gulp.src('build/main.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest(''));
});

gulp.task('browser-sync', function() {
    browserSync.init(["*.css", "*.js","*.html"], {
        server: {
            baseDir: "./",
            index: "main.html"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("*/*.scss", ['sass']);
});
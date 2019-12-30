const gulp = require('gulp');
const ts= require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');


gulp.task('compile', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'));
});

gulp.task('copy_develop_env', function() {
    return gulp.src('.env').pipe(gulp.dest('dist'))
});

gulp.task('build', gulp.series(['compile', 'copy_develop_env']));

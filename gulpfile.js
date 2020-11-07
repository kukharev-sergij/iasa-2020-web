const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('browserify');
const sourceStream = require('vinyl-source-stream');

gulp.task('clean', () => 
    gulp.src('./trg/*', {read: false})
        .pipe(clean())
);

gulp.task('copy', () => 
    gulp.src('./src/**/*.{html,jpg}')
        .pipe(gulp.dest('./trg'))
        // .pipe(browserSync.stream())
);

gulp.task('scss', () => 
    gulp.src('./src/css/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
        }).on('error', sass.logError))
        .pipe(autoprefixer({
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./trg'))
        // .pipe(browserSync.stream())
);

gulp.task('js', () =>
    browserify('./src/js/scripts.js')
        .bundle()
        .pipe(sourceStream('scripts.bundle.js'))
        .pipe(gulp.dest('./trg'))
);

gulp.task('sync', () => {
    browserSync.init({
        port: 8000,
        files: [
            "./trg/**/*.{html,htm,css,js}"
        ],
        server: {
            baseDir: "./trg",
        },
    });

    gulp.watch('./src/**/*.{html,jpg}', gulp.series('copy'))
        .on('change', browserSync.reload);
    gulp.watch('./src/**/*.scss', gulp.series('scss'))
        .on('change', browserSync.reload);
    gulp.watch('./src/**/*.js', gulp.series('js'))
        .on('change', browserSync.reload);
});

gulp.task('default', gulp.series('clean', gulp.parallel('sync', 'copy', 'scss', 'js')));
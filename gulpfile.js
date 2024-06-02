const gulp = require ('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const map = require('gulp-sourcemaps');
const prefixer = require('gulp-autoprefixer');


const js_nodes = ['./node_modules/jquery/dist/jquery.min.js']

gulp.task('sass', () => {

    
    return gulp.src('src/styles/main.scss')
        .pipe(map.init())
        .pipe(plumber())
        .pipe(sass({ outputStyle: 'compressed' })).on('error', sass.logError)
        .pipe(prefixer({
			overrideBrowserslist: ['last 8 versions'],
			browsers: [
				'Android >= 4',
				'Chrome >= 20',
				'Firefox >= 24',
				'Explorer >= 11',
				'iOS >= 6',
				'Opera >= 12',
				'Safari >= 6',
			],
		}))
        .pipe(map.write('../sourcemaps/'))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('js', () => {
    return gulp.src('src/scripts/*.js')
        .pipe(map.init())
        .pipe(plumber())
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(map.write('../sourcemaps/'))
        .pipe(gulp.dest('dist/scripts'));
});

const nodeList = [
    "node_modules/jquery/dist/jquery.min.js",]
gulp.task('jsNodes', () => {
    return gulp.src(nodeList)
        .pipe(plumber())
        .pipe(concat('nodeScripts.js'))
        .pipe(gulp.dest('dist/scripts'))
});

gulp.task('watch', () => {
    gulp.watch('src/styles/*', gulp.series('sass'));
    gulp.watch('src/scripts/*', gulp.series('js'));
});

gulp.task('default', gulp.series('watch'));
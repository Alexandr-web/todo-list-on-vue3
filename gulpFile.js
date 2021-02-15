const { dest, src, parallel, watch } = require('gulp');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

function styles() {
  return src('./src/assets/scss/*.scss')
    .pipe(scss({ outputStyle: 'expanded' }))
    .pipe(autoprefixer({
      cascade: true,
      overrideBrowserslist: ['last 5 versions']
    }))
    .pipe(concat('main.css'))
    .pipe(dest('./public/css/'));
}

function watching() {
  watch('./src/assets/scss/*.scss', parallel(styles));
}

exports.build = parallel(styles);
exports.default = parallel(exports.build, watching);
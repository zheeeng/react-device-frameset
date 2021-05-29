const { src, dest } = require('gulp');

const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps');

const config = {
   srcCss : 'src/scss/**/*.scss',
   buildCss: 'lib/css'
}

function buildCss () {
   return src(config.srcCss)
      .pipe(sourcemaps.init())
      .pipe(sass({
         outputStyle : 'expanded'
      }).on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(dest(config.buildCss))
      .pipe(sass({
         outputStyle : 'compressed'
      }))
      .pipe(rename({ extname: '.min.css' }))
      .pipe(sourcemaps.write('.'))
      .pipe(dest(config.buildCss))
}

exports.buildCss = buildCss
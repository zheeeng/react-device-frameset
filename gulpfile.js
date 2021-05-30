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

function genSignature () {
   const DeviceOptions = require('./lib/DeviceOptions').DeviceOptions
   const signature = Object.keys(DeviceOptions).map((key) => {
      const [device, info] = [key, DeviceOptions[key]]
      const deviceSignature = `device: ${device}`
      const colorSignature = (info.colors && info.colors.length) ? `, color: '${info.colors.join('\' | \'')}'` : ''
      const landscapeSignature = info.hasLandscape ? `, landscape: boolean` : ''

      return `| { ${deviceSignature}${colorSignature}${landscapeSignature} }`
   })
   .join('\n')

   console.log({ signature })
}

exports.buildCss = buildCss
exports.genSignature = genSignature
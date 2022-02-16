const { src, dest, watch } = require('gulp');

const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps');
const replace = require('gulp-replace');

const config = {
   srcCss : 'scss/**/*.scss',
   buildCss: 'dist/styles'
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

function watchBuildCss () {
   function build () {
      return src(config.srcCss)
         .pipe(sourcemaps.init())
         .pipe(sass({
            outputStyle : 'expanded'
         }).on('error', sass.logError))
         .pipe(dest(config.buildCss))
         .pipe(sourcemaps.write('.'))
         .pipe(dest(config.buildCss))
   }

   watch(config.srcCss, { ignoreInitial: false }, build)
}

function genSignature () {   
   const DeviceOptions = require('./dist/index').DeviceOptions
   const signature = Object.keys(DeviceOptions).map((key) => {
      const [device, info] = [key, DeviceOptions[key]]
      const deviceSignature = `device: '${device}'`
      const colorSignature = (info.colors && info.colors.length) ? `, color: '${info.colors.join('\' | \'')}'` : ''
      const landscapeSignature = info.hasLandscape ? `, landscape?: boolean` : ''
      const widthSignature = `, width?: number`
      const heightSignature = `, height?: number`
      const zoomSignature = `, zoom?: number`

      return `| { ${deviceSignature}${colorSignature}${landscapeSignature}${widthSignature}${heightSignature}${zoomSignature} }`
   })
   .join('\n')

   console.log({ signature })

   return src('../../README.md', {base: './'})
      .pipe(replace(/```ts\s\(signature\)(.|[\r\n])*?```/, `\`\`\`ts (signature)\n${signature}\n\`\`\``))
      .pipe(dest('./'));
}

function moveReadme () {
   return src('../../README.md', {base: './'})
      .pipe(dest('./'));
}

exports.buildCss = buildCss
exports.watchBuildCss = watchBuildCss
exports.genSignature = genSignature
exports.moveReadme = moveReadme
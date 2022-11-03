const { src, dest, series, watch } = require('gulp')
const sass = require('gulp-sass') (require('sass'))
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')
const concat = require('gulp-concat')
sass.compiler = require('dart-sass')

//Función que compila SASS
function compilarSASS() {
    return src("src/scss/app.scss")
        .pipe( sass())
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(dest("./build/css"));
}

function imagenes () {
    return src('src/img/**/*')
    .pipe(imagemin())
    .pipe( dest('./build/img'));
}

function versionwebp() {
    return src('src/img/**/*')
    .pipe(webp())
    .pipe(dest('./build/img'));
}

function javascript() {
    return src('src/js/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(dest('./build/js'))
}

function watchArchivos() {
    watch("src/scss/**/*.scss", compilarSASS);
    watch('src/js/*.js', javascript);
}

exports.compilarSASS = compilarSASS;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;
exports.versionwebp = versionwebp;
exports.javascript = javascript;
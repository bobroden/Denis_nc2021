
let project_folder = "dist";
let sourse_folder = "src";

let path = {
  build: {
    html: project_folder + '/',
    css: project_folder + '/',
    img: project_folder + '/img/',
    svg: project_folder + '/img/svg/',
    normalize: project_folder + '/',
  },
  src: {
    html: sourse_folder + '/*.html',
    css: sourse_folder + '/style/index.less',
    img: sourse_folder + '/img/**/*.+(png|jpg|jpeg|gif|ico|webp)',
    svg: sourse_folder + '/img/svg/*.svg',
    normalize: sourse_folder + '/normalize.css',
  },
  watch: {
    html: sourse_folder + '/**/*.html',
    css: sourse_folder + '/style/**/*.less',
    img: sourse_folder + '/img/**/*.+(png|jpg|jpeg|gif|ico|webp)',
    svg: sourse_folder + '/img/svg/*.svg',
    normalize: sourse_folder + '/normalize.css',
  },
  clean: "./" + project_folder + "/",
}

let {src, dest} = require("gulp");
let gulp = require("gulp");
let browsersync = require("browser-sync").create();
let del = require("del");
let less = require("gulp-less");
let svgstore = require("gulp-svgstore");
let inject = require("gulp-inject");

function browserSync(params) {
  browsersync.init({
    server: {
      baseDir: "./" + project_folder + "/"
    },
    port: 3000,
  })
}

function html() {
  return src(path.src.html)
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function css() {
  return src(path.src.css)
  .pipe(less({
    outputStyle: "expanded"
  }))
  .pipe(dest(path.build.css))
  .pipe(browsersync.stream())
}

function normalize() {
  return src(path.src.normalize)
  .pipe(dest(path.build.normalize))
  .pipe(browsersync.stream())
}

function images() {
  return src(path.src.img)
  .pipe(dest(path.build.img))
  .pipe(browsersync.stream())
}

function svg() {
  let svgs = src(path.src.svg)
  .pipe(svgstore({inlineSvg: true}))

  function fileContents(filePath, file) {
    return file.contents.toString();
  }

  return src(path.src.html)
  .pipe(inject(svgs, {transform: fileContents}))
  .pipe(dest(path.build.html))
  //.pipe(browsersync.stream())
}

function watchFiles(params) {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.html], svg);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.img], images);
  gulp.watch([path.watch.svg], svg);
  gulp.watch([path.watch.normalize], normalize);
}

function clean(params) {
  return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(normalize, css, html, images, svg));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.normalize = normalize;
exports.svg = svg;
exports.images = images;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");
const babel = require('gulp-babel');
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const merge = require("merge-stream");
const htmlreplace = require("gulp-html-replace");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

// Clean task
gulp.task("clean", () => del(["dist", "assets/css/app.css"]));



// Copy Bootstrap SCSS(SASS) from node_modules to /assets/scss/bootstrap


// Compile SCSS(SASS) files
gulp.task(
  "scss",
  gulp.series(function compileScss() {
    return gulp
      .src(["./assets/scss/*.scss"])
      .pipe(
        sass
          .sync({
            outputStyle: "expanded"
          })
          .on("error", sass.logError)
      )
      .pipe(autoprefixer())
      .pipe(gulp.dest("./assets/css"));
  })
);

// Minify CSS
gulp.task(
  "css:minify",
  gulp.series("scss", function cssMinify() {
    return gulp
      .src("./assets/css/app.css")
      .pipe(cleanCSS())
      .pipe(
        rename({
          suffix: ".min"
        })
      )
      .pipe(gulp.dest("./dist/assets/css"))
      .pipe(browserSync.stream());
  })
);



// Replace HTML block for Js and Css file upon build and copy to /dist
gulp.task("replaceHtmlBlock", () => gulp
  .src(["*.html"])
  .pipe(
    htmlreplace({
  
      css: "assets/css/app.min.css"
    })
  )
  .pipe(gulp.dest("dist/")));

// Configure the browserSync task and watch file path for change
gulp.task("watch", function browserDev(done) {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch(
    [
      "assets/scss/*.scss",
      "assets/scss/**/*.scss",
      "!assets/scss/bootstrap/**"
    ],
    gulp.series("css:minify", function cssBrowserReload(done) {
      browserSync.reload();
      done(); //Async callback for completion.
    })
  );
  
  gulp.watch(["*.html"]).on("change", browserSync.reload);
  done();
});

// Build task
gulp.task(
  "build",
  gulp.series(
    gulp.parallel("css:minify"),
   
    function copyAssets() {
      return gulp
        .src(["*.html", "favicon.ico", "assets/img/**"], { base: "./" })
        .pipe(gulp.dest("dist"));
    }
  )
);

// Default task
gulp.task("default", gulp.series("clean", "build", "replaceHtmlBlock"));

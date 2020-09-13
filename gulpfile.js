const { gulp, task, dest, series, watch, src } = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");

const paths = {
  input: "src/",
  output: "dist/",
  scripts: {
    input: "src/js/*",
    output: "dist/js/",
  },
  styles: {
    input: "src/sass/**/*.{scss,sass}",
    output: "dist/css/",
  },
  copy: {
    input: "src/copy/**/*",
    output: "dist/",
  },
  reload: "./dist/",
};

task("styles", () => {
  return src(paths.styles.input)
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("main.css"))
    .pipe(dest(paths.styles.output));
});

task("scripts", () => {
  return src(paths.scripts.input)
    .pipe(concat("main.js"))
    .pipe(dest(paths.scripts.output));
});

task("copy", () => {
  return src(paths.copy.input)
    .pipe(dest(paths.copy.output));
});

task(
  "default",
  series(["scripts", "styles", "copy"], function (cb) {
    watch(paths.scripts.input, series("scripts"));
    watch(paths.styles.input, series("styles"));
    watch(paths.copy.input, series("copy"));


    cb();
  })
);

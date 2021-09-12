const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const buildStyles = () => {
  // vision/**/*.scss: `/**` means any subfolder and `/*.scss` all files with .scss extension
  return src("vision/**/*.scss").pipe(sass()).pipe(dest("css"));
};

const watchTask = () => {
  watch(["vision/**/*.scss"], buildStyles);
};

exports.default = series(buildStyles, watchTask);

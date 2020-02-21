const gulp = require("gulp")
const webpack = require("webpack")
const webpack_config = require("./webpack.config")
const sass = require("gulp-sass")
sass.compiler = require('node-sass')
const browser_sync = require("browser-sync").create()
browser_sync.init({ proxy: "localhost:3000" })

function build_js() {
    return new Promise((resolve, reject) => {
        webpack(webpack_config, (err, stats) => {
            if (err) {
                return reject(err)
            }
            if (stats.hasErrors()) {
                return reject(new Error(stats.compilation.errors.join('\n')))
            }
            resolve()
        })
    })
}

function build_the_rest() {
    return gulp.src("src/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.src(["src/*.html"]))
        .pipe(gulp.dest("dist"))
}

function refresh_browser(cb) {
    browser_sync.reload()
    cb()
}

exports.default = () => {
    gulp.watch(
        "src/**",
        { ignoreInitial: false },
        gulp.series(build_js, build_the_rest, refresh_browser)
    )
}
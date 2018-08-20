var gulp = require('gulp'),
    pug = require('gulp-pug'),
    less = require('gulp-less'),
    prettify = require('gulp-prettify'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    concat = require('gulp-concat'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix= new LessPluginAutoPrefix({browsers: ["last 2 versions", '> 5%', 'ie >= 10']});;

'use strict';

var path = {
    dest: {
        js:         'build/js/',
        css:        'build/css/',
        html:       'build/'
    },
    src: {
        js:         'src/js/**/*.js',
        less:       'src/***/**/*.less',
        pug:        'src/pug/pages/**/*.pug'
    },
    watch: {
        js:         'src/js/**/*.js',
        less:       ['src/less/**/*.less', 'src/blocks/**/*.less'],
        pug:        ['src/pug/**/*.pug', 'src/blocks/**/*.pug']
    }
};

gulp.task('pug', function() {
    return gulp.src(path.src.pug)
        .pipe(pug())
        .pipe(prettify({
            indent_size: 2
        }))
        .pipe(gulp.dest(path.dest.html))
});

gulp.task('less', function () {
    return gulp.src(path.src.less)
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(concat('style.min.css'))
        .pipe(uglifycss({
            "maxLineLen": 500,
            "uglyComments": true
        }))
        .pipe(gulp.dest(path.dest.css))
});

gulp.task('js', function() {
    return gulp.src(path.src.js)
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.dest.js))
});

gulp.task('watch', function() {
    gulp.watch(path.watch.less, ['less']);
    gulp.watch(path.watch.js, ['js']);
    gulp.watch(path.watch.pug, ['pug']);
});

gulp.task('default', ['watch']);
'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');

// mocha test runner
gulp.task('mochaTest', function (cb) {
    gulp.src(['routes/*.js'])
        // Covering files
        .pipe(istanbul({"includeUntested": true}))
        // Force `require` to return covered files
        .pipe(istanbul.hookRequire())
        .on('finish', function () {
            var app = require('./bin/www');
            app.start(function (err, serverInstance) {
                if (err) {
                    console.log(err);
                    return cb();
                }
                gulp.src(['test/**/*-test.js'])
                    .pipe(mocha({timeout: 10000}))
                    // Creating the reports after tests runned
                    .pipe(istanbul.writeReports({dir: 'reports/coverage'}))
                    .on('end', function () {
                        console.log("closing server instance..");
                        serverInstance.close();
                        cb();
                    });
            });  

        });
});
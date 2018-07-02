/*
 * @FileName: gulpfile.js
 * @Author: Konark Uppal
 * @Description: task runner to run mocha tests and generate reports through istanbul.
*/

'use strict';

let gulp = require('gulp');
let mocha = require('gulp-mocha');
let istanbul = require('gulp-istanbul');

// mocha test runner
gulp.task('mochaTest',(cb) => {
    gulp.src(['routes/*.js'])
        // Covering files
        .pipe(istanbul({"includeUntested": true}))
        // Force `require` to return covered files
        .pipe(istanbul.hookRequire())
        .on('finish', () => {
            let app = require('./bin/www');
            app.start((err, serverInstance) => {
                if (err) {
                    console.log(err);
                    return cb();
                }
                gulp.src(['test/**/*-test.js'])
                    .pipe(mocha({timeout: 10000}))
                    // Creating the reports after tests runned
                    .pipe(istanbul.writeReports({dir: 'reports/coverage'}))
                    .on('end',() => {
                        console.log("closing server instance..");
                        serverInstance.close();
                        cb();
                    });
            });  

        });
});
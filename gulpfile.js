var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var inject = require('gulp-inject');

gulp.task('inject', function () {

    var wiredep = require('wiredep').stream;
    var options = {
        directory: 'public/lib',
        bowerJson: require('./bower.json'),
        ignorePath: '../../public/'
    }

    var sources = gulp.src(['./public/js/**', './public/css/*.css'], {
        read: false
    });
    var optionsInject = {
        ignorePath: '/public/'
    }


    gulp.src('./src/views/*.ejs')
        .pipe(wiredep(options))
        .pipe(inject(sources, optionsInject))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('default', ['inject'], function () {
    nodemon({
            script: 'server.js',
            ext: 'js',
            env: {
                port: '8095',
            },
            ignore: ['./node_modules/**', './public/lib/**']
        })
        .on('restart', function () {
            console.log('server restarted..');
        });
});
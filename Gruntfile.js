/**
 * Created by Eric on 3/8/2015.
 */
module.exports = function (grunt) {
    //config
    grunt.initConfig({
        watch: {
            stylus: {
                files: ['src/**/*.styl'],
                tasks: ['stylus'],
                options: {
                    spawn: false
                }
            },
            script: {
                files: ['src/js/**/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['node_modules/angular/angular.js', 'src/js/**/*.js'],
                dest: 'bin/candy.js'
            }
        },
        stylus: {
            compile: {
                options: {},
                files: {
                    'bin/site.css': ['src/css/**/*.styl']
                }
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                browser: true
            },
            all: ['Gruntfile.js', 'bin/js/**/*.js']
        }
    });


    //load packages
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // tasks
    grunt.registerTask('default',
        ['stylus', 'concat', 'watch']);

};
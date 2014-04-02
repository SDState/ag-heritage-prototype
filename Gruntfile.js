module.exports = function( grunt ) {
	'use strict';

	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),

		config: {
			src: 'app',
			dist: 'build'
		},

		assemble: {
			options: {
				assets: 'app/bower_components',
				layout: 'app/layouts/default.hbs',
				partials: ['app/partials/*.hbs']
			},
			pages: {
				expand: true,
				cwd: 'app/pages',
				src: ['*.hbs'],
				dest: 'build/'
			}
		},

		buildcontrol: {
			options: {
				dir: 'build',
				commit: true,
				push: true,
			},
			pages: {
				options: {
					remote: 'git@github.com:SDState/ag-heritage-prototype.git',
					branch: 'gh-pages'
				}
			}
		},

		connect: {
			all: {
				options: {
					port: 9000,
	        livereload: 35729,
					base: 'build',
					hostname: '0.0.0.0',
					keepalive: false
				}
			},
		},

    sass: {
      options: {
        includePaths: ['app/bower_components/foundation/scss']
      },
      compile: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'build/stylesheets/app.css': 'app/scss/app.scss'
        }
      }
    },

		concat: {
			assets: {
				src: [
					'app/bower_components/jquery/dist/jquery.min.js',
					'app/bower_components/foundation/js/foundation.min.js',
					'app/js/app.js'
				],
				dest: 'build/js/main.js'
			}
		},

		copy: {
			img: {
				expand: true,
				cwd: 'app',
				src: 'img/*',
				dest: 'build/'
			},
			// js: {
			// 	expand: true,
			// 	cwd: 'app',
			// 	src: 'js/*',
			// 	dest: 'build/'
			// },
			assets: {
				expand: true,
				cwd: 'app/bower_components/modernizr',
				src: [
					'modernizr.js'
			// 		'jquery/dist/jquery.min.js',
			// 		'foundation/js/foundation.min.js'
				],
				dest: 'build/js/'
			}
		},

		open: {
			all: {
				url: 'http://localhost:<%= connect.all.options.port %>/index.html'
			}
		},

		watch: {
			options: {
				livereload: true
			},
			stylesheets: {
				files: ['app/scss/*'],
				tasks: ['sass']
			},
			handlebars: {
				files: ['app/pages/*', 'app/layouts/*', 'app/partials/*'],
				tasks: ['assemble']
			}
		}
	});

  // Load npm plugins to provide necessary tasks.
	require( 'load-grunt-tasks' )(grunt);
	grunt.loadNpmTasks( 'assemble' );
	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-build-control' );

  // Default task to be run.
  grunt.registerTask( 'default', ['copy', 'concat', 'sass', 'assemble'] );
	// grunt.registerTask( 'preview', ['connect:client', 'watch:client']);
	grunt.registerTask( 'server', ['default', 'connect', 'open', 'watch'] );
	grunt.registerTask( 'serve', ['server'] );
	grunt.registerTask( 'publish' ['buildcontrol'] );
};

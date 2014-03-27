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

		connect: {
			all: {
				options: {
					port: 9000,
	        livereload: 35729,
					// base: 'build',
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
		
		// copy: {
		// 	img: {
		// 		src: 'img',
		// 		dest: 'build/img'
		// 	},4
		// 	js: {
		// 		src: 'js',
		// 		dest: 'build/js'
		// 	}
			// assets: {
				// src: 'stylesheets/app.css',
				// dest: 'build/assets/stylesheets/app.css'
			// }
		// },

		open: {
			all: {
				url: 'http://localhost:<%= connect.all.options.port %>/build/index.html'
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

  // Default task to be run.
  grunt.registerTask( 'default', ['sass', 'assemble'] );
	// grunt.registerTask( 'preview', ['connect:client', 'watch:client']);
	grunt.registerTask( 'server', ['default', 'connect', 'open', 'watch'] );
	grunt.registerTask( 'serve', ['server'] );
};

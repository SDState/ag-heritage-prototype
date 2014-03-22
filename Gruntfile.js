module.exports = function( grunt ) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),

		assemble: {
			// pages: {
			// 	assets: 'bower_components',
			// 	layout: 'layouts/default.hbs',
			// 	partials: ['layouts/partials/*.hbs'],
			// 	expand: true,
			// 	cwd: 'pages',
			// 	src: ['*.hbs'],
			// 	dest: 'build/'
			// }
			options: {
				assets: 'bower_components',
				layout: 'layouts/default.hbs',
				partials: ['layouts/partials/*.hbs'] // footer, navigations, etc.
			},
			pages: {
				expand: true,
				cwd: 'pages',
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
					keepalive: true
				}
			},
		},

		compass: {
			options: {
				cssDir: 'build/stylesheets',
				imagesDir: 'images',
				importPath: 'bower_components/foundation/scss',
				javascriptsDir: 'javascripts',
				sassDir: 'scss'
			},
			compile: {
				src: 'scss/',
				dest: 'build/stylesheets/'
			}
		},

		copy: {
			assets: {
				// src: 'stylesheets/app.css',
				// dest: 'build/assets/stylesheets/app.css'
			}
		},

		open: {
			all: {
				url: 'http://localhost:<%= connect.all.options.port %>'
			}
		},

		watch: {
			stylesheets: {
				files: ['scss/*'],
				tasks: ['compass']
			},
			handlebars: {
				files: ['pages/*', 'layouts/**'],
				tasks: ['assemble']
			}
		}
	});

  // Load npm plugins to provide necessary tasks.
	require('load-grunt-tasks')(grunt);
	grunt.loadNpmTasks( 'assemble' );
	// grunt.loadNpmTasks( 'grunt-contrib-connect' );
	// grunt.loadNpmTasks( 'grunt-open' );
	// grunt.loadNpmTasks( 'grunt-contrib-compass' );
	// grunt.loadNpmTasks( 'grunt-contrib-copy' );
	// grunt.loadNpmTasks( 'grunt-contrib-watch' );

  // Default task to be run.
  grunt.registerTask( 'default', ['compass', 'assemble'] );
	// grunt.registerTask( 'preview', ['connect:client', 'watch:client']);
	grunt.registerTask( 'server', ['open', 'connect', 'watch'] );
};

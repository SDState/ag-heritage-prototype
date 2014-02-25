module.exports = function( grunt ) {
	'use strict';
	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),
		assemble: {
			options: {
				assets: 'bower_components',
				layout: 'layouts/default.hbs',
				partials: ['layouts/partials/*.hbs'] // footer, ...
			},
			pages: {
				expand: true,
				cwd: 'pages',
				src: ['*.hbs'],
				dest: 'build/'
			}
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
		watch: {
			options: {
				livereload: true
			},
			stylesheets: {
				files: ['scss/'], 
				tasks: ['compass']
			}, 
			handlebars: {
				files: ['pages/*', 'layouts/**'],
				tasks: ['assemble']
			}
		}
	});
	
  // Load npm plugins to provide necessary tasks.
	grunt.loadNpmTasks( 'assemble' );
	grunt.loadNpmTasks( 'grunt-contrib-compass' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

  // Default task to be run.
  grunt.registerTask( 'default', ['compass', 'assemble'] );
};
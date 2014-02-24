module.exports = function( grunt ) {
	'use strict';
	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),
		assemble: {
			options: {
				assets: 'build/assets',
				layout: 'layouts/default.hbs'
				// partials: ['includes/*.hbs'] // footer, ...
			},
			pages: {
				// files: {
				// 	'build/': ['pages/*.hbs']
				// }
				// 	{src: 'pages/homepage.hbs', dest: 'build/homepage.html'},
				// 	{src: 'pages/secondaryPage_1-column.hbs', dest: 'build/secondaryPage_1-column.html'},
				// 	{src: 'pages/secondaryPage_2-column.hbs', dest: 'build/secondaryPage_2-column.html'}
				// ]
				// cwd: 'pages/',
				// src: '*.hbs',
				src: ['pages/*.hbs'],
				dest: 'build/',
				// flatten: true
			}
		},
		copy: {
			main: {
				src: 'stylesheets/app.css',
				dest: 'build/assets/stylesheets/app.css'
			},
		},
	});
	
  // Load npm plugins to provide necessary tasks.
	grunt.loadNpmTasks( 'assemble' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	// grunt.loadNpmTasks( 'grunt-contrib-connect' );

  // Default task to be run.
  grunt.registerTask( 'default', ['assemble', 'copy'] );
	// grunt.registerTask( 'serve', ['connect'] );
};
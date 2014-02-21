'use strict';
module.exports = function( grunt ) {

	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),
		
		// grunt-contrib-connect will serve the files of the project
    // on specified port and hostname
    connect: {
      all: {
        options:{
          // port: 9000,
          // hostname: "0.0.0.0",
          // Prevents Grunt to close just after the task (starting the server) completes
          // This will be removed later as `watch` will take care of that
          keepalive: true
        }
      }
    }
	});
	
  // Load npm plugins to provide necessary tasks.
	grunt.loadNpmTasks( 'grunt-contrib-connect' );

  // Default task to be run.
  grunt.registerTask( 'default', ['connect'] );
	grunt.registerTask( 'serve', ['connect'] );
};
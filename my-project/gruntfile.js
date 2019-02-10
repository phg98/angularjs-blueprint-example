module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      jshint: {
          all: ['script.js']
        },
      concat: {
          dist: {
              src: ['script.js', 'scripts1.js', 'scripts2.js'],
              dest: 'merged.js'
          }
      },

      uglify: {
          dist: {
              src: 'merged.js',
              dest: 'build/merged.min.js'
          }
      },

      shell: {
          multiple: {
              command: [
                  'del merged.js',
                  //'mkdir deploy'
                  'move build\\merged.min.js deploy'
              ].join('&&')
          }
      }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-shell');
  
    // Default task(s).
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'shell']);
  
  };
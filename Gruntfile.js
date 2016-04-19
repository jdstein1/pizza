module.exports = function(grunt) {
  // Do grunt-related things in here...

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    wiredep: {
      target: {
        src: 'src/index.html' // point to your HTML file.
      }
    },
    concat: {
    },
    uglify: {
      //static_mappings: {},
      //dynamic_mappings: {},
      //option: {
        //banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      //},
      //build: {
        //src: 'src/common/js/<%= pkg.name %>.js',
        //dest: 'build/common/js/<%= pkg.name %>.min.js'
      //}
    },
    bower_concat: {},
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'app/css/*.css',
            'app/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './app'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');

  // Default task(s).
  grunt.registerTask('default', ['wiredep']);
};

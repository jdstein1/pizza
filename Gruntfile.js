module.exports = function(grunt) {
  // Do grunt-related things in here...

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    appinfo: {
      src: {
        dir:'./src/',
        html:'./src/index.html',
        common: {
          js:'./src/common/js/*.js',
          css:'./src/common/css/*.css',
          less:'./src/common/css/*.less',
          html:'./src/common/*.html',
        },
        modules: {
          js:'./src/modules/**/js/*.js',
          css:'./src/modules/**/css/*.css',
          less:'./src/modules/**/css/*.less',
          html:'./src/modules/**/*.html',
        }
      },
      dist: {
        dir:'./dist/',
        html:'./dist/index.html',
        common: {
          js:'./dist/common/js/*.js',
          css:'./dist/common/css/*.css',
          less:'./dist/common/css/*.less',
          html:'./dist/common/*.html',
        },
        modules: {
          js:'./dist/modules/**/js/*.js',
          css:'./dist/modules/**/css/*.css',
          less:'./dist/modules/**/css/*.less',
          html:'./dist/modules/**/*.html',
        }
      }
    },
    bower_concat: {},
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            './src/*.html',
            './src/comon/js/*.js',
            './src/comon/css/*.css',
            './src/comon/*.html',
            './src/modules/**/js/*.js',
            './src/modules/**/css/*.css',
            './src/modules/**/*.html',
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: ['<%= appinfo.src.dir %>'],
            index: 'index.html'
          }
        }
      }
    },
    concat: {},
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
    watch: {
      html: {
        files: ['<%= appinfo.src.html %>'],
        tasks: ['copy:html']
      },
      js: {
        files: ['<%= appinfo.src.js %>'],
        tasks: ['copy:js','uglify']
      },
      css: {
        files: ['<%= appinfo.src.css %>'],
        tasks: ['copy:css','cssmin']
      },
      libs: {
        files: ['./bower_components/**/*'],
        tasks: ['wiredep']
      }
    },
    wiredep: {
      dev: {
        src: './src/index.html'
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
  grunt.registerTask('default', [
    'wiredep'
  ]);

  grunt.registerTask('dev', [
    'clean',
    'copy',
    'wiredep',
    'watch',
    'browserSync'
  ]);

};

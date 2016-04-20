module.exports = function(grunt) {
  // Do grunt-related things in here...

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    appinfo: {
      grep: {
          js:'*.js',
          css:'*.css',
          less:'*.less',
          html:'*.html'
      },
      html:'index.html',
      src: {
        dir:'./src/',
        common: {
          dir:'./src/common/',
        },
        modules: {
          dir:'./src/modules/',
        }
      },
      dist: {
        dir:'./dist/',
        common: {
          dir:'./dist/common/',
        },
        modules: {
          dir:'./dist/modules/',
        }
      }
    },
    bower_concat: {
      options: { separator : ';' },
      all: {
        dest: './dist/lib/_vendor-bower_concat.js',
        cssDest: './dist/lib/_vendor-bower_concat.css'
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            //'<%= appinfo.index %>',
            './src/*.html',
            //'<%= appinfo.src.common.js %>*.js',
            './src/common/js/*.js',
            //'<%= appinfo.src.common.css %>*.css',
            './src/common/css/*.css',
            //'<%= appinfo.src.common.dir %>*.html',
            './src/common/*.html',
            './src/modules/**/js/*.js',
            './src/modules/**/css/*.css',
            './src/modules/**/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: 'src',
            index: 'index.html'
          }
        }
      },
      dist: {
        bsFiles: {
          src : [
            //'<%= appinfo.index %>',
            './src/*.html',
            //'<%= appinfo.src.common.js %>*.js',
            './src/common/js/*.js',
            //'<%= appinfo.src.common.css %>*.css',
            './src/common/css/*.css',
            //'<%= appinfo.src.common.dir %>*.html',
            './src/common/*.html',
            './src/modules/**/js/*.js',
            './src/modules/**/css/*.css',
            './src/modules/**/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: 'dist',
            index: 'index.html'
          }
        }
      }
    },
    clean: {
      dist: './dist'
    },
    concat: {
      options: { separator : ';' },
      dist: {
        src: [
          './bower_components/angular/angular.min.js',
          './bower_components/angular-resource/angular-resource.min.js',
          './bower_components/angular-route/angular-route.min.js'
        ],
        dest: './dist/lib/_vendor-concat.js'
      }
    },
    copy: {
      html: {
        expand: true,
        cwd: './src',
        src: ['*.html'],
        dest: './dist/',
        filter: 'isFile',
        options: {}
      },
      css: {
        expand: true,
        cwd: './src/common/css',
        src: ['*.css'],
        dest: './dist/common/css/',
        filter: 'isFile',
        options: {}
      },
      common: {
        expand: true,
        cwd: './src/common',
        src: ['**'],
        dest: './dist/common/',
        filter: 'isFile',
        options: {}
      },
      modulesjs: {
        expand: true,
        cwd: './src/modules/',
        src: ['**/*.js'],
        dest: './dist/modules/',
        filter: 'isFile',
        options: {}
      },
      moduleshtml: {
        expand: true,
        cwd: './src/modules/',
        src: ['**/*.html'],
        dest: './dist/modules/',
        filter: 'isFile',
        options: {}
      //},
      //lib: {
        //expand: true,
        //cwd: './bower_components',
        //src: ['**/*.min.js'],
        //dest: './dist/lib/',
        //filter: 'isFile',
        //options: {}
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
      },
      all: ['Gruntfile.js','<%= appinfo.src.dir %>**/<%= appinfo.grep.js %>'],
      dist: ['<%= app.dist.js %>','<%= app.dist.min.js %>']
    },
    less: {
      dev: {
        options: {
          paths: ['<%= appinfo.src.css %>']
        },
        files: {'./dist/common/css/layout.css':'./src/common/css/layout.less'}
      },
      dist: {}
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
    watch: {
      html: {
        files: ['<%= appinfo.index %>'],
        tasks: ['copy:html']
      },
      js: {
        files: ['<%= appinfo.src.common.dir %>','<%= appinfo.src.modules.dir %>'],
        tasks: ['copy:js','uglify']
      },
      css: {
        files: ['<%= appinfo.src.common.dir %>*.css','<%= appinfo.src.modules.dir %>*.css'],
        tasks: ['copy:css','cssmin']
      },
      less: {
        files: ['<%= appinfo.src.common.dir %>*.less','<%= appinfo.src.modules.dir %>*.less'],
        tasks: ['less']
      },
      lib: {
        files: ['./bower_components/**/*'],
        tasks: ['wiredep']
      }
    },
    wiredep: {
      dev: {
        src: './src/index.html',
        overrides: {
          "jquery": {
            "main": "dist/jquery.js"
          }
        },
        exclude: ['less']
      },
      dist: {
        options: {
          ignorePath: '../bower_components/'
        },
        src: './dist/index.html',
        overrides: {
          "jquery": {
            "main": "dist/jquery.js"
          }
        },
        exclude: ['less']
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
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');

  // Default tasks...
  grunt.registerTask('default', [
    'wiredep'
  ]);

  // Dev tasks...
  grunt.registerTask('dev', [
    'clean',
    //'bower_concat:dev',
    //'concat:dev',
    //'copy',
    'wiredep:dev',
    //'less',
    //'watch',
    'browserSync:dev'
  ]);

  // Dev tasks...
  grunt.registerTask('dist', [
    'clean',
    //'bower_concat:dist',
    'concat:dist',
    'less',
    'copy',
    'wiredep:dist',
    //'watch',
    'browserSync:dist'
  ]);

};

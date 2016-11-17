module.exports = function(grunt){
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 3000,
          base: 'public',
          open: true,
        }
      }
    },
    less: {
      dev: {
        options: {
          paths: ['css'],
          compress: false,
          modifyVars: {
            version: '<%= pkg.version %>'
          }
        },
        files: {
          'public/css/main.css': 'less/main.less'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      less: {
        files: ['less/**/*.less'],
        tasks: ['less:dev']
      },
      html: {
        files: ['public/{,*/}*.html']
      }
    }
  });

  grunt.registerTask('default', [
    'less:dev',
    'connect',
    'watch'
  ]);

};module.exports = function(grunt){
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 3000,
          base: 'public',
          open: true,
        }
      }
    },
    less: {
      dev: {
        options: {
          paths: ['css'],
          compress: false,
          modifyVars: {
            version: '<%= pkg.version %>'
          }
        },
        files: {
          'public/css/main.css': 'less/main.less'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      less: {
        files: ['less/**/*.less'],
        tasks: ['less:dev']
      },
      html: {
        files: ['public/{,*/}*.html']
      },
      img: {
        files: ['public/img/{,*/}*']
      }
    }
  });

  grunt.registerTask('default', [
    'less:dev',
    'connect',
    'watch'
  ]);

};

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 800,
            suffix: '_large_1x',
            quality: 30
          }, {
            width: 1600,
            suffix: '_large_2x',
            quality: 30
          }, {
            width: 400,
            suffix: '_medium_1x',
            quality: 30
          }, {
            width: 200,
            suffix: '_small_1x',
            quality: 30
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'src/images/',
          dest: 'dist/images/'
        }]
      }
    },

    copy: {
      dev: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: 'css/**/*',
          dest: 'dist/',
        }, {
          expand: true,
          cwd: 'src/',
          src: '*.html',
          dest: 'dist/',
        }, {
          expand: true,
          cwd: 'src/',
          src: 'fonts/**/*',
          dest: 'dist/',
        }]
      },
    },
  });

  grunt.registerTask('default', ['responsive_images', 'copy']);

};

module.exports = function(grunt) {

	grunt.initConfig({
      less: {
        development: {
          options: {
            compress: true,
            yuicompress: true,
            optimization: 2
          },
          files: {
            "app/styles.css": "app/styles.less" // destination file and source file
          }
        }
      },
      ts: {
				default: {
        	src: ['**/*.ts', '!node_modules/**/*.ts', '!bower_components/**/*.ts', '!typings/**/*.ts'],
					options: {
						module: 'commonjs'
					}
				}
      },
	    wiredep: {
	        task: {
	            src: ['app/index.html']
	        }
	    },
	    injector: {
	        options: {
            addRootSlash: false,
            relative: true
	        },
	        local_dependencies: {
	            files: {
	                'app/index.html': ['app/index.js', 'app/**/*.js', 'app/*.css'],
	            }
	        }
	    }
	});

  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-contrib-less');

grunt.registerTask('default', ['ts']);
grunt.registerTask('wire', ['less', 'injector', 'wiredep']);
grunt.registerTask('tswire', ['default', 'less', 'injector', 'wiredep']);
grunt.registerTask('tswire', ['ts','less', 'injector', 'wiredep']);

}

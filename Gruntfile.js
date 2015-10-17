module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-typescript');

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
	    },
	    typescript: {
	        base: {
	            src: ['app/**/*.ts'],
	            options: {
	                module: 'commonjs',
	                target: 'es5',
	                sourceMap: true,
	                declaration: false,
                  removeComments: true
	            }
	        }
	    }
	});

grunt.registerTask('ts', ['typescript']);
grunt.registerTask('wire', ['less','injector', 'wiredep']);
grunt.registerTask('tswire', ['typescript','less', 'injector', 'wiredep']);

}

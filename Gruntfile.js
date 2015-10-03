module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-typescript');

	grunt.initConfig({
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
	                'app/index.html': ['app/index.js', 'app/**/*.js', 'app/**/*.css'],
	            }
	        }
	    },
	    typescript: {
	        base: {
	            src: ['app/**/*.ts'],
	            options: {
	                module: 'amd',
	                target: 'es5',
	                sourceMap: true,
	                declaration: false
	            }
	        }
	    }
	});

grunt.registerTask('ts', ['typescript']);
grunt.registerTask('wire', ['injector', 'wiredep']);
grunt.registerTask('tswire', ['typescript', 'injector', 'wiredep']);

}

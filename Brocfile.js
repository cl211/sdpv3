var pickFiles = require('broccoli-funnel')
var mergeTrees = require('broccoli-merge-trees')
var uglifyJavaScript = require('broccoli-uglify-js');
var concat = require('broccoli-concat');

function rand() {
    return Math.round(100000 * Math.random());
}

var app = 'app';

var noJsCss = pickFiles(app, {
    include: ['**/*.html', '**/*.ico']
});

var allJs = concat(app, {
    inputFiles: [
      '**/*.js'
    ],
    outputFile: '/app' + rand() + '.js'
});

var allCss = concat(app, {
    inputFiles: [
      '**/*.css'
    ],
    outputFile: '/app' + rand() + '.css'
});

var trees = [uglifyJavaScript(allJs), allCss, noJsCss];

tree = mergeTrees(trees, { 'overwrite': true });

module.exports = tree;

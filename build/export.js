// this file provides a list of unbundled files that
// need to be included when exporting the application
// for production.
module.exports = {
  'list': [
    'index.html',
    'config.js',
    'favicon.ico',
    'LICENSE',
    "jspm_packages/npm/bluebird@3.4.1/js/browser/bluebird.min.js", 
    'jspm_packages/system.js',
    'jspm_packages/system-polyfills.js',
    'jspm_packages/system-csp-production.js',
    'jspm_packages/github/systemjs/plugin-text@0.0.8.js',
    'jspm_packages/github/systemjs/plugin-text@0.0.8/text.js',
    'styles/styles.css',
    'jspm_packages/npm/aurelia-infinite-scroll@0.2.1/*',
    'jspm_packages/npm/aurelia-back-to-top@0.1.1/*'
  ],
  // this section lists any jspm packages that have
  // unbundled resources that need to be exported.
  // these files are in versioned folders and thus
  // must be 'normalized' by jspm to get the proper
  // path.
  'normalize': [
    [
      // include font-awesome.css and its fonts files
      'font-awesome', [
        '/css/font-awesome.min.css',
        '/fonts/*'
      ]
    ], [
      // include bootstrap's font files
      'bootstrap', [
        '/fonts/*'
      ]
    ], [
      'bluebird', [
        '/js/browser/bluebird.min.js'
      ]
    ]
  ]
};

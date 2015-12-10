/*({
  baseUrl: './www/',
  dir: "./dist/",
  paths: {
    zepto: 'lib/sui/js/zepto.min',
    sm: 'lib/sui/js/sm.min',
    'smExtend': 'lib/sui/js/sm-extend.min',
    'view': "js/view"
  },
  shim: {
    'zepto': {
      exports: '$'
    },
    'sm': {
      deps: ['zepto'],
      exports: 'sm'
    },
    'smExtend': {
      deps: ['zepto', 'sm'],
      exports: 'smExtend'
    }
  },
  modules: [{
    name: 'js/sui-requirejs'
  }]
})*/

({
  baseUrl: './www/',
  dir: "./dist/",
  paths: {
    zepto: 'lib/sui/js/zepto.min',
    sm: 'lib/sui/js/sm.min',
    'smExtend': 'lib/sui/js/sm-extend.min',
    'view': "js/view"
  },
  shim: {
    'zepto': {
      exports: '$'
    },
    'sm': {
      deps: ['zepto'],
      exports: 'sm'
    },
    'smExtend': {
      deps: ['zepto', 'sm'],
      exports: 'smExtend'
    },
    'view': {
      deps: ['zepto', 'sm'],
      exports: 'view'
    }
  },
  optimize: "uglify",
  modules: [{
    name: 'js/sui-requirejs'
  }, {
    name: 'js/demos'
  }, {
    name: 'js/login'
  }, {
    name: 'js/contactsIndex'
  }, {
    name: 'js/cordovaIndex'
  }, {
    name: 'js/registe'
  },{
    name: 'js/shakeIndex'
  },{
    name: 'js/takePicture'
  }]
})
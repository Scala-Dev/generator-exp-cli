'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var util = require('util');
var ngUtil = require('../util');
var ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.askFor = function askFor() {
  var done = this.async();
  var name = this.name;

  var base = this.config.get('uiRouteBase') || '/';
  if(base.charAt(base.length-1) !== '/') {
    base = base + '/';
  }

  var prompts = [
    {
      name: 'route',
      message: 'What will the url of your route be?',
      default: base + name
    }
  ];

  this.prompt(prompts, function (props) {
    if(props.route.charAt(0) !== '/') {
      props.route = '/' + props.route;
    }

    this.route = props.route;
    done();
  }.bind(this));
};

Generator.prototype.createFiles = function createFiles() {
  var dest = 'client/src/app/' + this.name;
  this.sourceRoot(path.join(__dirname, './templates'));
  ngUtil.processDirectory(this, '.', dest);

  var routeRewriteConfig = {
    file: 'client/src/app/routes.json',
    needle: '  }',
    splicable: [
      ',{\n' +
      '    "stateName": "' + this.name + '",\n' +
      '    "urlPrefix": "/' + this.name + '",\n' +
      '    "type": "load",\n' +
      '    "src": "app/' + this.name + '/' + this.name + '"\n' +
      '  }\n'
    ]
  };
  ngUtil.rewriteFile(routeRewriteConfig);


};

'use strict';

import angular from 'angular';
import 'angular-material';
import mainwrap from 'common/directives/mainwrap/mainwrap';
import './<%= name %>.controller';
import './<%= name %>.tpl';
import './<%= name %>.css!';

const <%= name %>Module = angular.module('<%= name %>', [
  mainwrap.name,
  'app/<%= name %>/<%= name %>.tpl.html',
  '<%= name %>.controller.js'
]);

<%= name %>Module.config(function($stateProvider){
  $stateProvider.state('<%= name %>', {
    url: '/<%= name %>',
    templateUrl: 'app/<%= name %>/<%= name %>.tpl.html',
    controller: '<%= classedName %>Ctrl',
    controllerAs: '<%= name %>Ctrl'
  });
});

export default <%= name %>Module;

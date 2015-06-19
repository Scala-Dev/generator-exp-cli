'use strict';

import angular from 'angular';
import 'angular-material';

import mainwrap from 'common/directives/mainwrap/mainwrap';
import <%= name %>CtrlModule from './<%= name %>.controller';

import './<%= name %>.tpl';
import './<%= name %>.css!';

const <%= name %>Module = angular.module('<%= name %>', [
  mainwrap.name,
  <%= name %>CtrlModule.name,
  'app/<%= name %>/<%= name %>.tpl.html',
]);

<%= name %>Module.config(($stateProvider) => {
  $stateProvider.state('<%= name %>', {
    url: '/<%= name %>',
    templateUrl: 'app/<%= name %>/<%= name %>.tpl.html',
    controller: '<%= classedName %>Ctrl',
    controllerAs: '<%= name %>Ctrl'
  });
});

export default <%= name %>Module;

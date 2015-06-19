'use strict';

import angular from 'angular';

const <%= name %>CtrlModule = angular.module('<%= name %>.controller.js', []);

class <%= classedName %>Ctrl {

  constructor ($scope) {
    this.$scope = $scope;
  }

}

<%= name %>CtrlModule.controller('<%= classedName %>Ctrl', <%= classedName %>Ctrl);

export default <%= name %>CtrlModule;

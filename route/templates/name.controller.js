'use strict';

import angular from 'angular';
import urlService from 'common/services/url.service';

const <%= name %>CtrlModule = angular.module('<%= name %>.controller.js', [
  urlService.name
]);

class <%= classedName %>Ctrl {

  // called once when the class is instantiated
  constructor ($scope, URL) {
    this.$scope = $scope;
    this.URL = URL;
  }

  // public class methods
  deleteThisFunction () {
    // does nothing
  }
}

<%= name %>CtrlModule.controller('<%= classedName %>Ctrl', ['$scope', 'URL', <%= classedName %>Ctrl]);

export default <%= name %>CtrlModule;

import angular from 'angular';
import 'angular-mocks';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import <%= name %>CtrlModule from './<%= name %>.controller';

chai.use(sinonChai);
const expect = chai.expect;

describe('controller: <%= classedName %>Ctrl', () => {
  let $scope;
  let <%= classedName %>Ctrl;
  
  beforeEach(angular.mock.module(<%= name %>CtrlModule.name));

  beforeEach(inject(($controller, $rootScope) => {
    $scope = $rootScope.$new();
    <%= classedName %>Ctrl = $controller('<%= classedName %>Ctrl', {
      $scope
    });
  }));

  it('exists', () => {
    expect(<%= classedName %>Ctrl).to.exist;
  });
});

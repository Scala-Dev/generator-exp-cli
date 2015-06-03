import angular from 'angular';
import 'angular-mocks';
import chai from 'chai';
import <%= name %> from 'app/<%= name %>/<%= name %>';

const assert = chai.assert;

describe('<%= name %>', function() {
  it('exists', function() {
    assert.isDefined(<%= name %>);
  });

  // @TODO - work this out with tristan

  // beforeEach(inject((_$rootScope_, _$controller) => {
  //   $rootScope = _$rootScope_;
  //   $controller = _$controller_;
  // }));


  // beforeEach(inject(($rootScope, $controller) => {
  //   scope = $rootScope.$new();
  //   ctrl = $controller('<%= classedName %>Ctrl', {$scope: scope});
  // }));

  // describe('the <%= name %> route', () => {
  //   it('has a controller called <%= classedName %>Ctrl', () => {
  //     console.log(ctrl);
  //     expect(ctrl).not.to.be.empty;
  //   });
  // });

  // uncomment for a sanity check
  //it('can fail', function() {
    //assert.fail();
  //});
});

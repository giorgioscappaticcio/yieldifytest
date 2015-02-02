'use strict';

describe('Directive: playcard', function () {

  // load the directive's module
  beforeEach(module('yieldifyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<playcard></playcard>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the playcard directive');
  }));
});

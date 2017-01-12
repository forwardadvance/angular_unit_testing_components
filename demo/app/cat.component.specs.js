describe('Component: cat', function () {
  beforeEach(module('app'));

  var element, scope;
  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();
    element = angular.element('<cat miows="11"></cat>');
    element = $compile(element)(scope);
    scope.$apply();
  }));

  it('should render the text', function() {
    var h1 = element.find('h1');
    expect(h1.text()).toBe('Cat miows 11 times');
  });

});

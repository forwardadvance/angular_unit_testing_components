describe('Component: dog', function () {
  beforeEach(module('app'));

  var element, scope;
  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();
    element = angular.element('<dog poos="11"></dog>');
    element = $compile(element)(scope);
    scope.$apply();
  }));

  it('should render the text', function() {
    console.log(element)
    var h1 = element.find('h1');
    expect(h1.text()).toEqual('Dog Poos 11 times');
  });

});

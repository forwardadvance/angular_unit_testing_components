# Part 10 - Testing Components and Directives

Components and directives are slightly more difficult to test than services and controllers because by their nature they modify the DOM.

The easiest way to unit test a component or directive, is to create an orphaned DOM fragment, and compile it against the app. We can then check to see if the fragment has the stuff in it that we expected to see.

Here's a simple cat component:

```
angular.module('app')
  .component('cat', {
    bindings: {
      miows: '@'
    },
    controllerAs: 'vm',
    template: `
      <h1>Cat miows {{ vm.miows }} times</h1>
    `
  });

```

In order to test this, we need a DOM fragment that matches it:

```html
<cat miows="11"></cat>
```

Let's put that in context:


```
describe('Component: cat', function () {
  beforeEach(module('app'));

  var element;
  var scope;
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
```

We compile the fragment, then use jqlite or DOM scripting to pull it apart and check it has worked properly.

## Exercise 1

Create a pirateStats component that renders information about the current pirate status. Unit test it to make sure it works.

*Extension:* Create a pirateIsle component that renders a map of the pirate island. Unit test it to make sure it works.

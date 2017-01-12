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

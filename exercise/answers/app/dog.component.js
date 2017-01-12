angular.module('app')
  .component('dog', {
    bindings: {
      poos: '@'
    },
    template: `
      <h1>Dog Poos {{ $ctrl.poos }} times</h1>
    `
  });


// angular.module('app')
//   .directive('catDirective', function() {
//     return {
//       scope: {
//         miows: '@'
//       },
//       bindToController: true,
//       controller: function() {
//         // this.miows = 15
//         // this.rats = 'rats';
//       },
//       controllerAs: 'vm',
//       template: `
//         <h1>Cat miows {{ vm.miows }} {{rats}} times</h1>
//       `
//     }
//   });

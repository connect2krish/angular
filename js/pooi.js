(function() {
    var myApp = angular.module('pooiModule',[])
    .component('pooistyle',{
        template:'<div>hello world aklshaksljfhskljf askfh Aksjfhbslkjfb akjfb askfjc {{vm.getNumber();}}</div>',
        controller: expMeController,
        bindings: {
            add:'<',
            subtract:'<',
            num1:'<',
            num2:'<'
        }
        controllerAs: 'vm'
    });

    expMeController.$inject = ['$scope'];

    function expMeController($scope) {

      vm = this;

      console.log('hello world');

      vm.getNumber = function() {
    	  return 30 + 40;
      }

      $scope.names = [{
          'firstname' : 'Divya',
          'rollnum' : 2,
          'tel':248
      },
      {
          'firstname' : 'Krish',
          'rollnum' : 4,
          'tel':617
      }];
    }

})();

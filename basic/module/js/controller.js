var WebApp =  angular.module('WebApp',[]);

WebApp.controller('func_meal',
  function func_meal($scope){
    $scope.meal = {
      'breakfast' : 'Bread',
      'lunch'     : 'Pho',
      'dinner'    : 'Noodle'
    }
  }
)
app.controller('StepController',function($scope){
	$scope.books = [
		{ name: 'AngularJs Book', type: 'IT book'},
		{ name: 'Cooking Style', type: 'cooking book'},
		{ name: 'Travel to Vietnam', type: 'travel guide'}
	];
	
	$scope.animal = 'World';
	
	$scope.sayGreeting = function(){
		$scope.greeting = 'Xin chào ' + $scope.animal + ' thần thánh nhé!';
	};
});
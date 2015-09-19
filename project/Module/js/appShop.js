var app = angular.module('shopApp',['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl: 'home.html'
		})
		.when('/directives',{
			templateUrl: 'directives.html'
		})
		.when('/general',{
			templateUrl: 'general.html'
		});
});

app.controller('menuController',function($scope){
	//**Xử lý sự kiện khi thực thi controller này - như cái này là move qua page mới **/
});

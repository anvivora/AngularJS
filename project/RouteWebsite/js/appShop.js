var app = angular.module('shopApp',['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl: 'home.html'
		})
		.when('/about',{
			templateUrl: 'about.html'
		})
		.when('/price',{
			templateUrl: 'price.html'
		});
});

app.controller('menuController',function($scope){
	//**Xử lý sự kiện khi thực thi controller này - như cái này là move qua page mới **/
});

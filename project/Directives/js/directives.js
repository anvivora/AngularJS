//@head js: appShop.js declare ng-app
app.controller('messageController',function($scope){
	//$scope.name = "Chào mừng các bạn đã tìm hiểu Directives";
	$scope.name = "";
});

//@ng-init
app.controller('initController', ['$scope', function($scope) {}]);

//@custom directive
app.controller('cusDirectController',function($scope){
	//defaul 	
}).directive('ownDirective',function(){
		return {
				template: '<h1>Chào mừng các bạn đến với phuotky.com</h1>'
			};
	});


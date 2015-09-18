/***************************** @head js: appShop.js declare ng-app ****************************/
app.controller('messageController',function($scope){
	//$scope.name = "Chào mừng các bạn đã tìm hiểu Directives";
	$scope.name = "";
});

/***************************** @ng-init ****************************/
app.controller('initController', ['$scope', function($scope) {}]);
app.controller('calController', ['$scope', function($scope) {}]);

/***************************** @custom directive ****************************/
app.controller('cusDirectController',function($scope){

}).directive('ownDirective',function(){
	return {
		template: 'Chào mừng các bạn đến với phuotky.com'
	};
}).directive('formLogin',function(){

	 var html = '<table>';
        html += '<tr>';
            html += '<td>Username:</td>';
            html += '<td><input type="text"/></td>';
        html += '</tr>';
        html += '<tr>';
            html += '<td>Password:</td>';
            html += '<td><input type="password"/></td>';
        html += '</tr>';
        html += '<tr>';
            html += '<td></td>';
            html += '<td><input type="Button" value="Login"/></td>';
        html += '</tr>';
    html += '</table>';

	return {
		template: html
	}
});


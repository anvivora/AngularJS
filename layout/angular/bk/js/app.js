// create the module and name it phpro
// also include ngRoute for all our routing needs
var SimpleTmp = angular.module('SimpleTmp', ['ngRoute']);

// configure our routes
SimpleTmp.config(function($routeProvider) {

$routeProvider
        // route for the index page
        .when('/', {
                templateUrl : 'templates/index.html',
                controller  : 'mainCtrl'
        })

        // route for the FAQ page
        .when('/faq', {
        templateUrl : 'templates/faq.html',
        controller  : 'faqCtrl'
        })

        // route for the contact page
        .when('/contact', {
                templateUrl : 'templates/contact.html',
                controller  : 'contactCtrl'
        });
});

// create the controller and inject Angular's $scope
SimpleTmp.controller('mainCtrl', function($scope) {
        // create a message to display in our view
        $scope.heading = 'Homepage';
        $scope.message = 'Welcome to homepage';
});

SimpleTmp.controller('faqCtrl', function($scope) {
        $scope.heading = 'FAQ page information';
        $scope.message = 'Introduction about FAQ pages';
});

SimpleTmp.controller('contactCtrl', function($scope) {
        $scope.heading = 'Contact information';
        $scope.message = 'Skype: nvminhtu';
});
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'myController'
		})

		.when('/crud', {
			templateUrl: 'views/crud.html',
			controller: 'CRUDController'
		})

		.when('/signout', {
			templateUrl: 'views/signout.html',
			controller: 'SignoutController'	
		});

	$locationProvider.html5Mode(true);

}]);
'use strict';

var projet = angular.module('projet', ['candidature']);

var candidature = angular.module('candidature', ['ngRoute']);


candidature.config(function($routeProvider){
   	$routeProvider
		.when('/candidature.html', {templateUrl: 'candidature.html'})
		.when('/testRoute', {templateUrl: 'testRoute.html'})
		//.otherwise({redirectTo: '/404.html'});
});

/*
candidature.config(function($routeProvider){
   	$routeProvider
	.when('/candidature.html', {
   		templateUrl: 'candidature.html',
   		controller: 'candidatureController'
   	})
   	.when('/testRoute', {
   		templateUrl: 'testRoute.html',
   		controller: 'candidatureController'
   	})
	//.otherwise({redirectTo: '/404.html'});
});
*/

candidature.controller('candidatureController', ['$scope', function($scope) {
	
	$scope.voeux = [
		{
            nom: "Castel",
            iut: "Lens",
			section: "SARI"
        },
		{
			nom: "Marchand",
            iut: "Lens",
			section: "SARI"
		},
        {
            nom: "Lefebvre",
            iut: "Lens",
			section: "SARI"
        }
	];
}]);
var controllers = angular.module('OpticaControllers', []);

controllers.controller('HomeCtrl', function($scope){
	console.log('HomeCtrl');
	$scope.pageClass = 'page-home';
});

controllers.controller('PromoCtrl', function($scope){
	console.log('PromoCtrl');
	$scope.pageClass = 'page-about';
});

controllers.controller('ContactoCtrl', function($scope){
	console.log('ContactoCtrl');
	$scope.pageClass = 'page-contact';
});

controllers.controller('QuienesCtrl', function($scope){
	console.log('QuienesCtrl');
	$scope.pageClass = 'page-about';
});

controllers.controller('TrabajaCtrl', function($scope){
	console.log('TrabajaCtrl');
	$scope.pageClass = 'page-contact';
});
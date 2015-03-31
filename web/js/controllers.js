var controllers = angular.module('OpticaControllers', []);

controllers.controller('HomeCtrl', function($scope,$location){
	console.log('HomeCtrl');
	$scope.pageClass = 'scroll-down-leave scroll-up-enter';
	$scope.toSection=function ($event, section) {
		$event.preventDefault();
		if(section==2){
			$location.url('promo');
		}
		else if(section==3){
			$location.url('contacto');
		}
	}
});

controllers.controller('PromoCtrl', function($scope,$location){
	console.log('PromoCtrl');
	$scope.pageClass = 'scroll-down-enter';
	$scope.toSection=function ($event, section) {
		$event.preventDefault();
		if(section==1){
			$scope.pageClass = 'scroll-up-leave';
			$location.url('');
		}
		else if(section==3){
			$scope.pageClass = 'scroll-down-leave';
			$location.url('contacto');
		}
	}
});

controllers.controller('ContactoCtrl', function($scope,$location){
	console.log('ContactoCtrl');
	$scope.pageClass = 'scroll-down-enter';
	$scope.toSection=function ($event, section) {
		$event.preventDefault();
		if(section==1){
			$scope.pageClass = 'scroll-up-leave';
			$location.url('');
		}
		else if(section==2){
			$scope.pageClass = 'scroll-up-leave';
			$location.url('promo');
		}
	}
});

controllers.controller('QuienesCtrl', function($scope,$location){
	console.log('QuienesCtrl');
	$scope.pageClass = 'scroll-down';
});

controllers.controller('TrabajaCtrl', function($scope,$location){
	console.log('TrabajaCtrl');
	$scope.pageClass = 'scroll-down';
});
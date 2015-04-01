var controllers = angular.module('OpticaControllers', []);

controllers.controller('HomeCtrl', function($scope, $location, $rootScope) {
    console.log('HomeCtrl');
    $rootScope.page = 1;
    $scope.pageClass = 'scroll-down-leave scroll-up-enter';
    $scope.toSection = function($event, section) {
        $event.preventDefault();
        if (section == 2) {
            $location.url('promo');
        } else if (section == 3) {
            $location.url('contacto');
        }
    }
});

controllers.controller('PromoCtrl', function($scope, $location, $rootScope) {
    console.log('PromoCtrl');
    if ($rootScope.page > 2) {
        $scope.pageClass = 'scroll-up-enter';
    } else {
        $scope.pageClass = 'scroll-down-enter';
    }
    $rootScope.page = 2;
    $scope.toSection = function($event, section) {
        $event.preventDefault();
        if (section == 1) {
            $scope.pageClass = 'scroll-up-leave';
            $location.url('');
        } else if (section == 3) {
            $scope.pageClass = 'scroll-down-leave';
            $location.url('contacto');
        }
    }
});

controllers.controller('ContactoCtrl', function($scope, $location, $rootScope) {
    console.log('ContactoCtrl');
    $rootScope.page = 3;
    $scope.pageClass = 'scroll-down-enter';
    $scope.toSection = function($event, section) {
        $event.preventDefault();
        if (section == 1) {
            $scope.pageClass = 'scroll-up-leave';
            $location.url('');
        } else if (section == 2) {
            $scope.pageClass = 'scroll-up-leave';
            $location.url('promo');
        }
    }
});

controllers.controller('QuienesCtrl', function($scope, $location, $rootScope) {
    console.log('QuienesCtrl');
    $rootScope.page = 4;
    $scope.pageClass = 'scroll-down';
});

controllers.controller('TrabajaCtrl', function($scope, $location, $rootScope) {
    console.log('TrabajaCtrl');
    $rootScope.page = 5;
    $scope.pageClass = 'scroll-down';
});

controllers.controller('LocalesCtrl', function($scope, $location, $rootScope) {
    console.log('LocalesCtrl');
    $rootScope.page = 6;
    $scope.pageClass = 'scroll-down';
});

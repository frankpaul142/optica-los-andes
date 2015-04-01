var controllers = angular.module('OpticaControllers', []);

controllers.controller('MainCtrl', function($scope, $location, $rootScope) {
	console.log('MainCtrl');
	$scope.toSection = function($event, section) {
		$event.preventDefault();
		$rootScope.$emit('sectionMenu', section);
		if (section == 1) {
			$location.url('');
		} else if (section == 4) {
			$location.url('quienes_somos');
		} else if (section == 6) {
			$location.url('locales');
		} else if (section == 5) {
			$location.url('trabaja_con_nosotros');
		} else if (section == 3) {
			$location.url('contacto');
		}
	}
});

controllers.controller('HomeCtrl', function($scope, $location, $rootScope) {
	console.log('HomeCtrl');
	if ($rootScope.page > 3) {
		$scope.pageClass = 'scroll-left-enter';
	} else {
		$scope.pageClass = 'scroll-up-enter';
	}
	$rootScope.page = 1;
	$rootScope.$on('sectionMenu', function(event, args) {
		if (args > 3) {
			$scope.pageClass = 'scroll-right-leave';
		} else {
			$scope.pageClass = 'scroll-down-leave';
		}
	});
	$scope.toSection = function($event, section) {
		$event.preventDefault();
		$scope.pageClass = 'scroll-down-leave';
		if (section == 2) {
			$location.url('promo');
		} else if (section == 3) {
			$location.url('contacto');
		}
	};
	$scope.scrollUrl = '';
	$scope.$watch('scrollUrl', function() {
		$location.url($scope.scrollUrl).replace();
		// scrolling = false;
	});
	$(document).bind('wheel', function(e) {
		// if (!scrolling) {
			if (e.originalEvent.deltaY>0) {
				// scrolling = true;
				$scope.pageClass = 'scroll-down-leave';
				$scope.scrollUrl = 'promo';
				$scope.$apply();
			}
		// }
	});
});

controllers.controller('PromoCtrl', function($scope, $location, $rootScope) {
	console.log('PromoCtrl');
	if ($rootScope.page > 2) {
		$scope.pageClass = 'scroll-up-enter';
	} else {
		$scope.pageClass = 'scroll-down-enter';
	}
	$rootScope.page = 2;
	$rootScope.$on('sectionMenu', function(event, args) {
		if (args > 3) {
			$scope.pageClass = 'scroll-right-leave';
		} else {
			$scope.pageClass = 'scroll-up-leave';
		}
	});
	$scope.toSection = function($event, section) {
		$event.preventDefault();
		if (section == 1) {
			$scope.pageClass = 'scroll-up-leave';
			$location.url('');
		} else if (section == 3) {
			$scope.pageClass = 'scroll-down-leave';
			$location.url('contacto');
		}
	};
	$scope.scrollUrl = 'promo';
	$scope.$watch('scrollUrl', function() {
		$location.url($scope.scrollUrl).replace();
		// scrolling = false;
	});
	$(document).bind('wheel', function(e) {
		// if (!scrolling) {
			if (e.originalEvent.deltaY>0) {
				// scrolling = true;
				$scope.pageClass = 'scroll-down-leave';
				$scope.scrollUrl = 'contacto';
				$scope.$apply();
			} else {
				$scope.pageClass = 'scroll-up-leave';
				$scope.scrollUrl = '';
				$scope.$apply();
			}
		// }
	});
});

controllers.controller('ContactoCtrl', function($scope, $location, $rootScope) {
	console.log('ContactoCtrl');
	if ($rootScope.page < 3) {
		$scope.pageClass = 'scroll-down-enter';
	} else {
		$scope.pageClass = 'scroll-left-enter';
	}
	$rootScope.page = 3;
	$rootScope.$on('sectionMenu', function(event, args) {
		if (args > 3) {
			$scope.pageClass = 'scroll-right-leave';
		} else {
			$scope.pageClass = 'scroll-up-leave';
		}
	});
	$scope.toSection = function($event, section) {
		$event.preventDefault();
		if (section == 1) {
			$scope.pageClass = 'scroll-up-leave';
			$location.url('');
		} else if (section == 2) {
			$scope.pageClass = 'scroll-up-leave';
			$location.url('promo');
		}
	};
	$scope.scrollUrl = 'contacto';
	$scope.$watch('scrollUrl', function() {
		$location.url($scope.scrollUrl).replace();
		// scrolling = false;
	});
	$(document).bind('wheel', function(e) {
		// if (!scrolling) {
			if (e.originalEvent.deltaY < 0) {
				$scope.pageClass = 'scroll-up-leave';
				$scope.scrollUrl = 'promo';
				$scope.$apply();
			}
		// }
	});
});

controllers.controller('QuienesCtrl', function($scope, $location, $rootScope) {
	console.log('QuienesCtrl');
	if ($rootScope.page <= 3) {
		$scope.pageClass = 'scroll-right-enter';
	} else if ($rootScope.page < 6) {
		$scope.pageClass = 'scroll-up-enter';
	} else {
		$scope.pageClass = 'scroll-left-enter';
	}
	$rootScope.page = 4;
	$rootScope.$on('sectionMenu', function(event, args) {
		if (args <= 3) {
			$scope.pageClass = 'scroll-left-leave';
		} else if (args == 6) {
			$scope.pageClass = 'scroll-right-leave';
		} else {
			$scope.pageClass = 'scroll-down-leave';
		}
	});
	$scope.toSection = function($event, section) {
		$event.preventDefault();
		if (section == 5) {
			$scope.pageClass = 'scroll-down-leave';
			$location.url('trabaja_con_nosotros');
		}
	};
	$scope.scrollUrl = 'quienes_somos';
	$scope.$watch('scrollUrl', function() {
		$location.url($scope.scrollUrl).replace();
		// scrolling = false;
	});
	$(document).bind('wheel', function(e) {
		// if (!scrolling) {
			if (e.originalEvent.deltaY > 0) {
				scrolling = true;
				$scope.pageClass = 'scroll-down-leave';
				$scope.scrollUrl = 'trabaja_con_nosotros';
				$scope.$apply();
			}
		// }
	});
});

controllers.controller('TrabajaCtrl', function($scope, $location, $rootScope) {
	console.log('TrabajaCtrl');
	if ($rootScope.page <= 3) {
		$scope.pageClass = 'scroll-right-enter';
	} else if ($rootScope.page < 6) {
		$scope.pageClass = 'scroll-down-enter';
	} else {
		$scope.pageClass = 'scroll-left-enter';
	}
	$rootScope.page = 5;
	$rootScope.$on('sectionMenu', function(event, args) {
		if (args <= 3) {
			$scope.pageClass = 'scroll-left-leave';
		} else if (args == 6) {
			$scope.pageClass = 'scroll-right-leave';
		} else {
			$scope.pageClass = 'scroll-up-leave';
		}
	});
	$scope.toSection = function($event, section) {
		$event.preventDefault();
		if (section == 4) {
			$scope.pageClass = 'scroll-up-leave';
			$location.url('quienes_somos');
		}
	};
	$scope.scrollUrl = 'trabaja_con_nosotros';
	$scope.$watch('scrollUrl', function() {
		$location.url($scope.scrollUrl).replace();
		// scrolling = false;
	});
	$(document).bind('wheel', function(e) {
		// if (!scrolling) {
			if (e.originalEvent.deltaY < 0) {
				scrolling = true;
				$scope.pageClass = 'scroll-up-leave';
				$scope.scrollUrl = 'quienes_somos';
				$scope.$apply();
			}
		// }
	});
});

controllers.controller('LocalesCtrl', function($scope, $location, $rootScope,$http) {
	console.log('LocalesCtrl');
	$scope.loading=true;
	$scope.ciudadActiva=0;
	$scope.pageClass = 'scroll-right-enter';
	$rootScope.page = 6;
	$rootScope.$on('sectionMenu', function(event, args) {
		if (args < 6) {
			$scope.pageClass = 'scroll-left-leave';
		}
	});
	$scope.desplegar=function (id) {
		$scope.ciudadActiva=id;
	};
	if(typeof(ciudades)==='undefined'){
		$http.get('site/load-stores').success(function (data) {
			console.log(data);
			if(data!=''){
				$scope.ciudades=ciudades;
			}
			$scope.loading=false;
		}).error(function (data) {
			console.log('error loadStores');
			$scope.loading=false;
		});
	}
	else{
		$scope.ciudades=ciudades;
	}
});

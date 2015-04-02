var controllers = angular.module('OpticaControllers', []);

controllers.controller('MainCtrl', function($scope, $location, $rootScope, $timeout) {
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
	$scope.$on('$routeChangeStart', function() {
		$rootScope.scrolling1 = true;
	});
	$scope.$on('$routeChangeSuccess', function() {
		$timeout(function() {
			$rootScope.scrolling1 = false;
		}, 750);
	});
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
	});
	$(document).bind('wheel', function(e) {
		if (!$rootScope.scrolling1) {
			if (e.originalEvent.deltaY > 0) {
				$scope.pageClass = 'scroll-down-leave';
				$scope.scrollUrl = 'promo';
				$scope.$apply();
			}
		}
	});
});

controllers.controller('PromoCtrl', function($scope, $location, $rootScope, $timeout) {
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
	});
	$(document).bind('wheel', function(e) {
		if (!$rootScope.scrolling1) {
			if (e.originalEvent.deltaY > 0) {
				$scope.pageClass = 'scroll-down-leave';
				$scope.scrollUrl = 'contacto';
				$scope.$apply();
			} else {
				$scope.pageClass = 'scroll-up-leave';
				$scope.scrollUrl = '';
				$scope.$apply();
			}
		}
	});
});

controllers.controller('ContactoCtrl', function($scope, $location, $rootScope, $timeout) {
	console.log('ContactoCtrl');
	var wall_important = new freewall('.img-contacto');
	// wall_important.fitWidth();
	wall_important.reset({
		selector: '.item',
		animate: true,
		cellW: 300,
		cellH: 'auto',
		onResize: function() {
			wall_important.fitWidth();
		}
	});

	var images = wall_important.container.find('.item');
	images.find('img').load(function() {
		wall_important.fitWidth();
	});
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
	});
	$(document).bind('wheel', function(e) {
		if (!$rootScope.scrolling1) {
			if (e.originalEvent.deltaY < 0) {
				$scope.pageClass = 'scroll-up-leave';
				$scope.scrollUrl = 'promo';
				$scope.$apply();
			}
		}
	});
	$('#inputCedula').hide();
	$('#contactoTipo').change(function() {
		if ($(this).val() == 'Reclamo') {
			$('#inputCedula').show();
		} else {
			$('#inputCedula').hide();
		}
	});
	$scope.showAlert=false;
	$scope.textoEnviar='Enviar';
	$scope.enviar = function($event) {
		$event.preventDefault();
		var reEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		var reDigits = /^\d{10}$/;
		if (typeof($scope.inombre) === 'undefined' || $scope.inombre == '') {
			$scope.showAlert=true;
			$scope.alertType="danger";
			$scope.alertMsg="Nombre no puede estar vacío";
		}
		else if (typeof($scope.iapellido) === 'undefined' || $scope.iapellido == '') {
			$scope.showAlert=true;
			$scope.alertType="danger";
			$scope.alertMsg="Apellido no puede estar vacío";
		}
		else if (typeof($scope.iemail) === 'undefined' || $scope.iemail == '') {
			$scope.showAlert=true;
			$scope.alertType="danger";
			$scope.alertMsg="Email no puede estar vacío";
		}
		else if (!reEmail.test($scope.iemail)) {
			$scope.showAlert=true;
			$scope.alertType="danger";
			$scope.alertMsg="Email no es válido";
		}
		else if (typeof($scope.icelular) === 'undefined' || $scope.icelular == '') {
			$scope.showAlert=true;
			$scope.alertType="danger";
			$scope.alertMsg="Celular no puede estar vacío";
		}
		else if (!reDigits.test($scope.icelular)) {
			$scope.showAlert=true;
			$scope.alertType="danger";
			$scope.alertMsg="Celular no es válido";
		}
		else if ($scope.itipo=='Reclamo' && (typeof($scope.icedula) === 'undefined' || $scope.icedula == '')) {
			$scope.showAlert=true;
			$scope.alertType="danger";
			$scope.alertMsg="Cédula no puede estar vacío";
		}
		else if ($scope.itipo=='Reclamo' && !reDigits.test($scope.icedula)) {
			$scope.showAlert=true;
			$scope.alertType="danger";
			$scope.alertMsg="Cédula no es válido";
		}
		else if (typeof($scope.imensaje) === 'undefined' || $scope.imensaje == '') {
			$scope.showAlert=true;
			$scope.alertType="danger";
			$scope.alertMsg="Mensaje no puede estar vacío";
		}
		else{
			$scope.showAlert=false;
			$scope.textoEnviar='Enviando';
			var form=$('#formContacto').serializeArray();
			$.post('site/contact',form).success(function (data) {
				console.log(data);
				if(data=='enviado'){
					$scope.showAlert=true;
					$scope.alertType="success";
					$scope.alertMsg="Su mensaje ha sido enviado. Gracias por contactarnos.";
					$scope.inombre='';
					$scope.iapellido='';
					$scope.iemail='';
					$scope.icelular='';
					$scope.imensaje='';
					$scope.itipo='Consulta';
				}
				else{
					$scope.showAlert=true;
					$scope.alertType="danger";
					$scope.alertMsg="Error al enviar mensaje. Intente de nuevo por favor.";
				}
				$scope.textoEnviar='Enviar';
				$scope.$apply();
			}).error(function (data) {
				console.log(data);
				$scope.showAlert=true;
				$scope.alertType="danger";
				$scope.alertMsg="Error al enviar mensaje. Intente de nuevo por favor.";
				$scope.textoEnviar='Enviar';
				$scope.$apply();
			});
		}
	};
	$scope.keypressed = function(keyEvent) {
        /*if (keyEvent.which === 13) {
            $scope.entrar();
        }*/
        $scope.showAlert = false;
    };
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

controllers.controller('LocalesCtrl', function($scope, $location, $rootScope, $http) {
	console.log('LocalesCtrl');
	$scope.loading = true;
	$scope.store = {};
	$scope.store.picture = 'locales.jpeg';
	$scope.localActivo = 0;
	$scope.ciudadActiva = 0;
	$scope.desplegar = false;
	$scope.pageClass = 'scroll-right-enter';
	$rootScope.page = 6;
	$rootScope.$on('sectionMenu', function(event, args) {
		if (args < 6) {
			$scope.pageClass = 'scroll-left-leave';
		}
	});
	$scope.changeCity = function(id) {
		if ($scope.ciudadActiva == id) {
			$scope.desplegar = !$scope.desplegar;
		} else {
			$scope.desplegar = true;
		}
		$scope.ciudadActiva = id;

	};
	$scope.changeStore = function(id) {
		$scope.store.name = ciudades[$scope.ciudadActiva]['locales'][id]['name'];
		$scope.store.address = ciudades[$scope.ciudadActiva]['locales'][id]['address'];
		$scope.store.phone = ciudades[$scope.ciudadActiva]['locales'][id]['phone'];
		$scope.store.cellphone = ciudades[$scope.ciudadActiva]['locales'][id]['cellphone'];
		$scope.store.schedule = ciudades[$scope.ciudadActiva]['locales'][id]['schedule'];
		$scope.store.map = ciudades[$scope.ciudadActiva]['locales'][id]['maps'];
		$scope.store.picture = ciudades[$scope.ciudadActiva]['locales'][id]['picture'];
		$scope.localActivo = id;
	}
	if (typeof(ciudades) === 'undefined') {
		$http.get('site/load-stores').success(function(data) {
			// console.log(data);
			if (data != '') {
				ciudades = data;
				$scope.ciudades = ciudades;
			}
			$scope.loading = false;
		}).error(function(data) {
			console.log('error loadStores');
			$scope.loading = false;
		});
	} else {
		$scope.ciudades = ciudades;
		$scope.loading = false;
	}
});

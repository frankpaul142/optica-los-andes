var app=angular.module('Optica',['ngRoute','ngAnimate','OpticaControllers']);

// configs

app.config(function($routeProvider /*, $locationProvider*/ ) {
	$routeProvider.
	when('/', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl',
	}).
	when('/promo', {
		templateUrl: 'partials/promo.html',
		controller: 'PromoCtrl'
	}).
	when('/contacto', {
		templateUrl: 'partials/contacto.html',
		controller: 'ContactoCtrl'
	}).
	when('/quienes_somos', {
		templateUrl: 'partials/quienes.html',
		controller: 'QuienesCtrl'
	}).
	when('/trabaja_con_nosotros', {
		templateUrl: 'partials/trabaja.html',
		controller: 'TrabajaCtrl'
	}).
	when('/locales', {
		templateUrl: 'partials/locales.html',
		controller: 'LocalesCtrl'
	}).
	otherwise({
		redirectTo: '/'
	});

	// $locationProvider.html5Mode(true);
	// $locationProvider.hashPrefix('!');
});

// --configs
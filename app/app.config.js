(function() {
    'use strict';
    var app = angular.module('iti-store', ['ngRoute']);


    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'app/partials/home.html',
                controller: 'HomeCtrl'
            })
                .when('/product/:id', {
                    templateUrl: 'app/partials/detail.html',
                    controller: 'ProductCtrl'
                })
                .when('/cart', {
                    templateUrl: 'app/partials/cart.html',
                    controller: 'CartCtrl'
                })
                .when('/checkout', {
                    templateUrl: 'app/partials/checkout.html',
                    controller: 'CheckoutCtrl'
                })
        }
    ]);
})()

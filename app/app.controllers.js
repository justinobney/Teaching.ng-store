(function(){
    'use strict';
    var app = angular.module('iti-store');

    app.controller('MainCtrl', function ($scope, CartService) {
        $scope.cart = CartService.getAllItems();
    });

    app.controller('HomeCtrl', function($scope, ProductService){
        $scope.products = ProductService.all();
    });

    app.controller('ProductCtrl', function($scope, $routeParams, $location, ProductService, CartService){
        var id = $routeParams.id;

        $scope.product = ProductService.findById(id);

        $scope.addToCart = function(){
            CartService.addToCart($scope.product);
            $location.path('/')
        }
    });

    app.controller('CartCtrl', ['$scope', '$location', 'CartService', function ($scope, $location, CartService) {
       $scope.items = CartService.getAllItems();

       $scope.itemTotal = CartService.getTotal();

       if($scope.items.length == 0)
        $location.path('/');
    }])

    app.controller('CheckoutCtrl', function($scope, CartService){
        $scope.total = CartService.getTotal();
    });
})();
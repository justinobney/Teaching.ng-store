(function(){
    'use strict';

    var app = angular.module('iti-store');

    app.factory('ProductService', [function () {
        var service = {}

        var fakeProducts = [
            { id: 1, name: 'My Awesome Product', cost: 15.75},
            { id: 2, name: 'My Awesome Product', cost: 15.85},
            { id: 3, name: 'My Awesome Product', cost: 19.75},
            { id: 4, name: 'My Awesome Product', cost: 14.75},
            { id: 5, name: 'My Awesome Product', cost: 25.75}
        ];

        service.all = function(){
            return fakeProducts;
        }

        service.findById = function(id){
            var found = fakeProducts.filter(function(val){
                return val.id == id;
            });

            if(found.length)
                return found[0];
        };
    
        return service;
    }]);

    app.factory('CartService', [function () {
        var service = {};

        var cart = [];

        service.addToCart = function(product){
            cart.push(product);
            console.log(cart);
        }

        service.getAllItems = function(){
            return cart;
        }

        service.getTotal = function(){
            var sum = 0;

            cart.forEach(function(product){
                sum = sum + product.cost;
            });

            return sum;
        }
    
        return service;
    }])
})();








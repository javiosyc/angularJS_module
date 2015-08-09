var app = angular.module('app', ['ngCookies'])
    //.controller('MainCtrl', MainCtrl);

    .config(function(itemProvider) {

       //itemProvider.change_name("123");

       itemProvider.defaults.name ="John";

       console.log(itemProvider.$get);
    })
    .run(function(version, $rootScope) {
        $rootScope.version = version;
    })
    .provider('item', [function() {

      //  var my_name = "Will";

        var defaults = this.defaults = {};


     //   this.change_name = function(name) {
     //       my_name = name;
     //   };

        this.$get = [function() {
            return {
                "name": defaults.name
            };
        }];
    }])

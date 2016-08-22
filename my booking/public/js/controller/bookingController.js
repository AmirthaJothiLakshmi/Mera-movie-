'use strict';

module.exports = function($scope,$http,$rootScope,$location){
  // $rootScope.bookingDetails=$scope.book;

$(document).ready(function(){
    $(".thumbnail").click(function(){
        $("#myModal").modal();
    });

});
//

//  $scope.go = function () { $location.path('/payment');
// }


//to get random booking ID
$scope.getRandom = function myFunction() {
    document.getElementById('random-number').value=Math.floor(Math.random()*10000);

}


function controller($scope)
{
    $scope.parseFloat = function(value)
    {
        return parseFloat(value);
    }
}

// function TotalAmount() {
//   var x = parseInt(document.getElementById("a").value);
//   var y = parseInt(document.getElementById("b").value)
//   var z= x * y
// z = parseInt(document.getElementById("c").value);
// }




//showtime

(function(){

    var user = function($http){

      var getUsers = function(username){
            return $http.get('/showtime/showtime')
                        .then(function(response){
                           return response.data;
                        });
      };

      return {
          get: getUsers
      };

    };

    var module = angular.module('movieApp');
    module.factory('user', user);

}());



(function(){

    var user1 = function($http){

      var getUsers1 = function(username1){
            return $http.get('/city/city')
                        .then(function(response){
                           return response.data;
                        });
      };

      return {
          get: getUsers1
      };

    };

    var module = angular.module('movieApp');
    module.factory('user1', user1);

}());

(function(){

    var user2 = function($http){

      var getUsers2 = function(username2){
            return $http.get('/theatre/theatre')
                        .then(function(response){
                           return response.data;
                        });
      };

      return {
          get: getUsers2
      };

    };

    var module = angular.module('movieApp');
    module.factory('user2', user2);

}());




(function(){

    var user3 = function($http){

      var getUsers3 = function(username3){
            return $http.get('/movieinfo/movieinfo')
                        .then(function(response){
                           return response.data;
                        });
      };

      return {
          get: getUsers3
      };

    };

    var module = angular.module('movieApp');
    module.factory('user3', user3);

}());








//City Controller

var refresh1 = function () {
        $http.get('/city/city').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.firstlist = response;
            $scope.first = "";
        });
    };

refresh1();

//Theatre Controller


      var refresh2 = function () {
            $http.get('/theatre/theatre').success(function (response) {
                console.log('READ IS SUCCESSFUL');
                $scope.detaillist = response;
                $scope.detail = "";
            });
        };

        refresh2();

        // ShowTime Controller

                var refresh3 = function () {
                        $http.get('/showtime/showtime').success(function (response) {
                            console.log('READ IS SUCCESSFUL');
                            $scope.adminlist = response;
                            $scope.admin = "";
                        });
                    };

                refresh3();

                //OFFER CONTROLLER

                              var refresh4 = function () {
                                      $http.get('/offer/offer').success(function (response) {
                                          console.log('READ IS SUCCESSFUL');
                                          $scope.discountlist = response;
                                          $scope.discount = "";
                                      });
                                  };

                              refresh4();

  var refresh5 = function () {
    $http.get('/movieinfo/movieinfo').success(function (response) {
  console.log('READ IS SUCCESSFUL');
  $scope.lastlist = response;
  $scope.last = "";
    });
  };

refresh5();


var refreshomdb = function () {
    $http.get('/movie/movie').success(function (response) {
        console.log('READ IS SUCCESSFUL');
        $scope.movieObj = response;
        $scope.movies = "";
    });
};


refreshomdb();


var refreshbook = function () {
      $http.get('/booking/booking').success(function (response) {
          console.log('READ IS SUCCESSFUL');
          $scope.booklist = response;
          $scope.book = "";
      });
  };

  refreshbook();


$scope.bookMovieInfo = function () {
console.log($scope.book);
$http.post('/booking/booking',$scope.book).success(function (response) {
console.log(response);
console.log("CREATE IS SUCCESSFUL");
refreshbook();
$rootScope.bookingDetails = $scope.book;
$location.path('/payment');


});
};






};

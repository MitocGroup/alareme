 var myApp = angular.module('myApp', []);  //define module , list of modules is in []

 myApp.controller('RegistrationController', ['$scope', function($scope){

  $scope.register = function() {
    $scope.message = 'Welcome ' + $scope.user.firstname;
  };

     $scope.author = {
       'denumire': 'Academic Roman-Englez, Mircea Eliade',
       'city': 'MD-2012, mun. Chișinău,',
       'adress_phone': 'str. Mitropolit G. Banulescu-Bodoni, 3 tel: +373 22 233 936'
     };

   $scope.images=[
     {item:'img/logo-menu.png'},
     {item:'img/twitter.png'},
     {item:'img/facebook.png'},
     {item:'img/linkedin.png'},
     {item:'img/g.png'}
   ];

 }]);

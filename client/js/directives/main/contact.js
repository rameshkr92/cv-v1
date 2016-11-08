(function(){
  'use strict';
  angular.module('AppPortfolio').controller('ContactController', ['$scope','$http', function($scope, $http){
		  $scope.sendMail = function(){
		  	alert()
		  var data = {
			contactName : this.contactName,
			contactEmail : this.contactEmail,
			contactMsg : this.contactMsg
		  };
		  console.log(data)
		  /*$http.post('/contact/send', data).
		  success(function(data) {
			$location.path('/');
		  });*/
		};
      }]);
})();

(function(){
  'use strict';
  angular.module('AppPortfolio')
    .directive('headerDisplay', [function(){
      return {
        controller: 'HeaderController',
        scope: {},
        restrict: 'E',
        templateUrl: 'partials/main/_header.html'
      };
    }])
    .controller('HeaderController', ['$scope','$location','$http',
        function($scope,$location,$http){
          var duration = 1000;
          var el = '';
          var offset = 60;
          $scope.$on('locationChanged', function(){
            setCurrentPath();
          });
          $scope.getClass = function (path) {
            return ($location.path().substr(0, path.length) === path) ? 'active' : '';
          }
          // alert(x)
        /*$http.get('/download', data).
          success(function(data, status, headers, config) {
             var anchor = angular.element('<a/>');
             anchor.attr({
                 href: 'data:attachment/csv;charset=utf-8,' + encodeURI(data),
                 target: '_blank',
                 download: 'filename.csv'
             })[0].click();

          }).
          error(function(data, status, headers, config) {
            // handle error
          });*/
          // alert($location.url($location.path()))
		  $scope.SITE_TITLE = 'Ramesh';
		  $scope.BASE_PATH = $location.$$absUrl;
		  $scope.available_for_freelance = 'Contact Me';
		  $scope.enter_to_search = 'Just Start Typing Text and Press Enter';
		  $scope.facebook = 'Facebook';
		  $scope.twitter = 'Twitter';
		  $scope.linkedin = 'Linkedin';
		  $scope.google_plus = 'Google+';
          $scope.about = 'About';
          $scope.about_fa = 'info';
          $scope.about_p0 = 'I enjoy solving the puzzle to find solutions ' +
            'for the opportunities that the development process presents. ' +
            'With over ten years of experience in network support and ' +
            'administration, I am expanding my knowledge of the latest ' +
            'web development tools. While covering three full stack MVC ' +
            'frameworks and multiple web technologies at ';
          $scope.about_p1 = 'web development bootcamp, I improved my ability ' +
            'to quickly pickup new technologies.';
          $scope.about_p2 = 'Have a look around to see some of my projects. ' +
            'You can checkout my codebase on ';
          $scope.about_p3 = ', and contact me via ';
          $scope.about_p4 = 'This site is under constant improvements and ' +
            'expansion. Check back in to see new additions and updates.';
          $scope.about_welcome = 'Welcome - Thanks for Stopping In!';
          $scope.app_title = 'Ramesh Kumar';
          $scope.codingdojo = 'Coding Dojo';
          $scope.codingdojo_url = 'http://www.codingdojo.com/';
          $scope.e2e = 'e2e';
          $scope.e2e_fa = 'user';
          $scope.portfolio = 'Portfolio';
          $scope.portfolio_fa = 'briefcase';
          $scope.github = 'GitHub';
          $scope.github_fa = 'github-square';
          $scope.github_url = 'https://github.com/rameshkr92?tab=repositories';
		  $scope.facebook_url = 'https://www.facebook.com/rameshsingh1992';
          $scope.home = 'Home';
          $scope.home_fa = 'home';
          $scope.home_url = '#/';
          $scope.hover_msg = 'Hover to enlarge';
          $scope.linkedin = 'LinkedIn';
          $scope.linkedin_fa = 'linkedin';
          $scope.linkedin_url = 'https://www.linkedin.com/in/rameshkumar1992';
          $scope.my_photo = '/img/main/rory.png';
          $scope.myPhoto = 'myPhoto.html';
          $scope.pc_logo = '/img/favicon/favicon.ico';
          $scope.skills = 'Skillset';
          $scope.skills_fa = 'code';
          $scope.unit = 'Unit';
          $scope.unit_fa = 'terminal';
          $scope.up_fa = 'chevron-circle-up';
        }]);
})();

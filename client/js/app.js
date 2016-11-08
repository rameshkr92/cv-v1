(function(){
'use strict';
/*angular.module('AppPortfolio', ['ngAnimate', 'ngRoute', 'ngSanitize', 'ngTouch',
'duScroll', 'pcCompareToDirective', 'ui.bootstrap'])
  .config(['$httpProvider', '$sceDelegateProvider', '$routeProvider',
  function($httpProvider, $sceDelegateProvider, $routeProvider){*/
      angular.module('AppPortfolio', ['ngAnimate', 'ngRoute', 'ngSanitize', 'ngTouch',
        'duScroll', 'ui.bootstrap'])
      .config(['$httpProvider', '$sceDelegateProvider', '$routeProvider','$locationProvider',
        function($httpProvider, $sceDelegateProvider, $routeProvider,$locationProvider){
            // HTTP interceptor to add token to req. Register interceptor via
            // anonymous factory (don't need $q unless intercepting response
            $httpProvider.interceptors.push(function($window){
                var wls = $window.localStorage;
                return {
                    request: function(config){
                        // console.log('app.js.config intercept:', wls);
                        // console.log('app.js.config intercept config:', config);
                        if(wls.jwtToken){
                            config.headers['x-access-token'] = wls.jwtToken;
                            config.headers['x-auth-client'] = wls.client;
                            // console.log('app.js.config modified:', config);
                        }
                        return config;
                    }
                };
            });
            //$locationProvider.html5Mode(true);
            // Whitelist external URLs
            $sceDelegateProvider.resourceUrlWhitelist([
                // Same origin resource loads
                'self',
                // Plunker
                // PortfolioApp
                'http://embed.plnkr.co/vlCzPCX7Dq50KhlH3u4d/preview',
                // Users DashboardApp
                'http://embed.plnkr.co/FreZ0ReV4iQlSNK0PZfc/preview',
                // YouTube
                'https://www.youtube.com/embed/wcA7HT03mX4**',
                'https://www.youtube.com/embed/BhA6q8JeB0M**',
                'https://www.youtube.com/embed/P6nIq9NrGkc**'
                ]);
            // Use the config method to setup angular routing, inject $routeProvider
            // to allow the update of a partial view
            $routeProvider
            .when('/',
            {
              templateUrl: 'partials/main/home.html',
          })
            .when('/home',
            {
              templateUrl: 'partials/main/home.html'
          })
            .when('/about',
            {
              templateUrl: 'partials/main/about.html'
          })
            .when('/skills',
            {
              templateUrl: 'partials/main/skills.html'
          })
            .when('/experience',
            {
              templateUrl: 'partials/main/experience.html'
          })
            .when('/education',
            {
              templateUrl: 'partials/main/education.html'
          })
            .when('/work',
            {
              templateUrl: 'partials/main/work.html',
              secure: true
          })
            .when('/blog',
            {
              templateUrl: 'partials/main/blog.html'
          })
            .when('/contact',
            {
              templateUrl: 'partials/main/contact.html',
              secure: true
          })
            .otherwise(
            {
              redirectTo: '/'
          });
        }])
    /*.run(['$location', '$rootScope', '$window', 'AuthFactory',
        function($location, $rootScope, $window, AuthFactory){
            var wls = $window.localStorage;
            // console.log('app.js wls', wls);
            // Client-side security. Server-side MUST add it's own security, since
            // client-based security is easily hacked
            $rootScope.$on('$routeChangeStart', function(event, next, current){
                $rootScope.$broadcast('locationChanged');
                // console.log('$location', $location);
                // console.log('$location.$$absUrl', $location.$$absUrl);

                // console.log('$routeChangeStart event:', event);
                // console.log('$routeChangeStart next:', next);
                // console.log('$routeChangeStart current:', current);
                if(next && next.$$route && next.$$route.secure){
                    // console.log('app.js.run secure page requested.');
                    if(!wls.jwtToken || !wls.client){
                        $rootScope.$evalAsync(function(){
                            // console.log('app.js.run $routeChangeStart, NO token redirectToLogin');
                            AuthFactory.redirectToLogin();
                        });
                    } else {
                        // console.log('app.js.run localStorage', wls);
                        $rootScope.$evalAsync(function(){
                            AuthFactory.verifyToken(wls.client, wls.jwtToken)
                                .then(function(result){
                                    // console.log('app.js validateToken result:', result);
                                    if(!result){
                                        AuthFactory.redirectToLogin();
                                    }
                                });
                        });
                    }
                }
            });
        }]);*/
    })();

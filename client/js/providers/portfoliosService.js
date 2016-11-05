(function(){
  'use strict';

  angular.module('AppPortfolio')
    .service('PortfoliosService', [function(){
      var service = {};

      service.portfolios = [
        {
          desc: 'MEAN Stack user managment application.',
          href: 'usersapp#/users/login',
          img:  '/img/main/portfolioUsersApp.png',
          name: 'Users Dashboard',
          tech0: [
            'MongoDB',
            'Express',
            'Angular',
            'Node',
            'Mongoose'
          ],
          tech1: [
            'bcrypt',
            'jsonwebtoken',
            'Bootstrap',
            'UI-Bootstrap',
            'LESS'
          ]
        },
        {
          desc: 'JavaScript Angular Animation',
          href: '#/animate',
          img:  '/img/main/portfolioAnimateApp.png',
          name: 'AngularJS Animation',
          tech0: [
            'Express',
            'Angular',
            'Node'
          ],
          tech1: [
            'jQuery',
            'Bootstrap',
            'LESS'
          ]
        },
        {
          desc: 'Open muliple browsers to observe live updates with data received from socket broadcast events.',
          href: '#/favLang',
          img:  '/img/main/portfolioFavLangApp.png',
          name: 'AngularJS & Socket.io',
          tech0: [
            'Express',
            'Angular',
            'Node',
            'Socket.io'
          ],
          tech1: [
            'HighCharts',
            'Bootstrap',
            'LESS'
          ]
        },
        {
          desc: 'Karma - Protractor - Jasmine.',
          href: '#/testing',
          img:  '/img/main/portfolioKarmaTests.png',
          name: 'End-to-End & Unit Testing',
          tech0: [
            'Express',
            'Angular',
            'Node',
            'Karma',
            'Protractor'
          ],
          tech1: [
            'Angular Scroll',
            'Plunker',
            'YouTube',
            'Bootstrap',
            'LESS'
          ]
        },
        {
          desc: 'Weather Underground',
          href: '#/weather',
          img:  '/img/main/portfolioWeatherApp.png',
          name: 'Weather Underground API',
          tech0: [
            'Express',
            'Angular',
            'Node',
            'Weather Underground API'
          ],
          tech1: [
            'Bootstrap',
            'UI-Bootstrap',
            'LESS'
          ]
        }
      ];

      return service;
    }]);
})();

/**
 * Created by alexei on 5/3/16.
 */

import name from './name';

let deepAsset = DeepFramework.Kernel.get('asset');

let routes = {
  'index': {
    url: '/index',
    controller: 'deepIndexController',
    templateUrl: deepAsset.locate('@deep-alareme:js/app/view/index.html'),
    controllerAs: 'indexCtrl'
  },
};

angular.module(name).config(['$stateProvider', ($stateProvider) => {
  for (let routeName in routes) {
    if (routes.hasOwnProperty(routeName)) {
      $stateProvider.state(routeName, routes[routeName]);
    }
  }
}]);

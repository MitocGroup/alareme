
'use strict';
'format es6';

import name from '../name';

let deepAsset = DeepFramework.Kernel.get('asset');

class HeaderDirective {
  constructor($location, $anchorScroll) {
    this.deepAsset = deepAsset;
    this.$location = $location;
    this.$anchorScroll = $anchorScroll;
  
  }
  
  scrollTo(elementId) {
    this.$location.hash(elementId);
    this.$anchorScroll();
  }
}

angular.module(name).directive('deepHeader', function deepHeaderDirective() {
    return {
      restrict: 'E',
      controller: 'deepHeaderController',
      controllerAs: 'headerCtrl',
      templateUrl: deepAsset.locate('@deep-alareme:js/app/angular/view/header.html'),

    };
  })
  .controller('deepHeaderController', ['$location', '$anchorScroll', function($location, $anchorScroll) {
    return new HeaderDirective($location, $anchorScroll);
  }]);

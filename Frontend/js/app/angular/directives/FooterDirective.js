'use strict';
'format es6';

import name from '../name';

let deepAsset = DeepFramework.Kernel.get('asset');

class FooterDirective {
  constructor() {
    this.deepAsset = deepAsset;

  }
}

angular.module(name).directive('deepFooter', function deepFooterDirective() {
    return {
      restrict: 'E',
      controller: 'deepFooterController',
      controllerAs: 'footerCtrl',
      templateUrl: deepAsset.locate('@deep-alareme:js/app/angular/view/footer.html'),

    };
  })
  .controller('deepFooterController', [() => {
    return new FooterDirective();
  }]);

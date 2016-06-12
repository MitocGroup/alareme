/**
 * Created by alexei on 5/12/16.
 */

'use strict';
'format es6';

import name from '../name';

let deepAsset = DeepFramework.Kernel.get('asset');

class ProiecteDirective {
  constructor($location, $anchorScroll) {
    this.deepAsset = deepAsset;
    this.$location = $location;
    this.$anchorScroll = $anchorScroll;
  }

  showMe(elementId) {
    let old = this.$location.hash();
    this.$location.hash(elementId);
    this.$anchorScroll();
    this.$location.hash(old)
  }

  hideAllBoxes() {
    $(".hidden").slideUp('slow');
  };
  showSecurity() {
    this.hideAllBoxes();
    $( ".vis1" ).slideToggle( "slow" );
  }

  showSala() {
    this.hideAllBoxes();
    $( ".vis2" ).slideToggle( "slow" );
  }

  showSalaSport () {
    this.hideAllBoxes();
    $(".vis3" ).slideToggle("slow");
  }

}

angular.module(name).directive('deepProiecte', function deepProiecterDirective() {
    return {
      restrict: 'E',
      controller: 'deepProiecteController',
      controllerAs: 'proiecteCtrl',
      templateUrl: deepAsset.locate('@deep-alareme:js/app/angular/view/proiecte.html'),

    };
  })
  .controller('deepProiecteController', ['$location', '$anchorScroll', function($location, $anchorScroll) {
    return new ProiecteDirective($location, $anchorScroll);
  }]);

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

  hideAllBoxes() {
    $(".hidden").slideUp('slow');
  };

  showSecurity() {
    this.hideAllBoxes();
    $(".vis1").slideToggle("slow");
  }

  showSala() {
    this.hideAllBoxes();
    $(".vis2").slideToggle("slow");
  }

  showSalaSport() {
    this.hideAllBoxes();
    $(".vis3").slideToggle("slow");
  }
}

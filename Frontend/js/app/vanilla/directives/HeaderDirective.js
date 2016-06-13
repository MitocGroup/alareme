
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
    let old = this.$location.hash();
    this.$location.hash(elementId);
    this.$anchorScroll();
    this.$location.hash(old);
  }
}


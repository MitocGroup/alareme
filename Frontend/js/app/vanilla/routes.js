/**
 * Created by alexei on 5/3/16.
 */

import name from './name';

let deepAsset = DeepFramework.Kernel.get('asset');

var routes = {
  'index': {
    url: '/alareme',
    controller: 'deepIndexController',
    templateUrl: deepAsset.locate('@deep-alareme:js/app/angular/view/index.html'),
    controllerAs: 'indexCtrl'
  },
};
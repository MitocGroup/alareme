/**
 * Created by alexei on 5/4/16.
 */
import name from '../name';

class IndexController {
  constructor() {
    this.deepAsset = DeepFramework.Kernel.get('asset');
this.author = {
  denumire: 'Academic Roman-Englez Mircea Eliade',
  city: 'MD-2012, mun. Chișinău',
  adress_phone: 'str. Mitropolit G. Banulescu-Bodoni, 33 tel: +373 22 233 936'
};
}

}

angular.module(name).controller('deepIndexController', [function() {
  return new IndexController();
}]);

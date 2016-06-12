'use strict';
'format es6';

import name from '../name';

let deepAsset = DeepFramework.Kernel.get('asset');

class ContactsDirective {
  constructor() {
    this.deepAsset = deepAsset;
    this.deepResource = DeepFramework.Kernel.container.get('resource');

    this.user = {
      firstName: '',
      phoneNumber: '',
      email: '',
      message: ''
    };
  };

  sendClick() {
    //Display user name when button is clicked
    $('.slideInRight h4').text('Hello ' + this.user.firstName);
    
  }

}
angular.module(name).directive('deepContacts', function deepContactsDirective() {
    return {

      restrict: 'E',
      controller: 'deepContactsController',
      controllerAs: 'contactsCtrl',
      templateUrl: deepAsset.locate('@deep-alareme:js/app/angular/view/contacts.html'),
    };
  })


  .controller('deepContactsController', [() => {
    return new ContactsDirective();
  }]);

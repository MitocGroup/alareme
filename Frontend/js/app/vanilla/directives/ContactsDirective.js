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
    $('.slideInRight h4').text('Hello ' + this.user.firstName);
    
  }

}

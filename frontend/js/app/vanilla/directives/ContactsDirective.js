'use strict';
'format es6';

function myFunction() {
  var x = document.forms["frm1"];
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
}


// let deepAsset = DeepFramework.Kernel.get('asset');
//
// class ContactsDirective {
//   constructor() {
//     this.deepAsset = deepAsset;
//     this.deepResource = DeepFramework.Kernel.container.get('resource');
//
//     this.user = {
//       firstName: '',
//       phoneNumber: '',
//       email: '',
//       message: ''
//     };
//   };
//
//   var sendClick = function() {
//     $('.slideInRight h4').text('Hello ' + this.user.firstName);
//
//   }
//
// }


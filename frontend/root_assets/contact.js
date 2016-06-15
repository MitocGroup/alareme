'use strict';
'format es5';



var userName = function(el) {
  if(el.value === ''|| el.length <= 3 || el.length > 10){
    document.getElementById("checkName").innerHTML = "Introduceti numele d-stra";
    return false;
  }
};

var userPhone = function(inputtxt) {
  var phoneno = /^\d{8}$/;
  var efield= '';
  if(inputtxt.value.match(phoneno|| efield == true)){
    document.getElementById("checkPhone").innerHTML = "Introduceti telefonul d-stra";
    return false;
  }
};


var userEmail = function(el) {
  var x = document.forms["myForm"]["email"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if(el.value === ''|| atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
    document.getElementById("checkEmail").innerHTML = "Introduceti adresa de email";
    return false;
  }
};



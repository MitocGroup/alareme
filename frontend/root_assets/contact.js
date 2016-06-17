"use strict";


var userNameCheck = function(nameInput) {
  var x = document.forms.myForm.name.value;
  if(!nameInput || !nameInput.value){
    document.getElementById("checkName").innerHTML = "Numele și Prenumele Dumnevoastră";
    return false;
  }
};

var userPhoneCheck = function(phoneInput) {
  var x = document.forms.myForm.phone.value;
  var phoneno = /^\d{8}$/;
  if(phoneInput.value ==='' || phoneInput.value === phoneno){
    document.getElementById("checkPhone").innerHTML = "Telefonul Dumnevoastră";
    return false;
  }
};

var userEmailCheck = function(emailInput) {
  var x = document.forms.myForm.email.value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if(emailInput.value === ''|| atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
    document.getElementById("checkEmail").innerHTML = "Adresa de email";
    return false;
  }
};
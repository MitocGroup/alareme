"use strict";


var userName = function(nameCheck) {
  var x = document.forms["myForm"]["name"].value;
  if(nameCheck.value === ''|| nameCheck == null){
    document.getElementById("checkName").innerHTML = "Numele și Prenumele Dumnevoastră";
    return false;
  }
};

var userPhone = function(phoneCheck) {
  var x = document.forms["myForm"]["phone"].value;
  var phoneno = /^\d{8}$/;
  if(phoneCheck.value ==='' || phoneCheck.value === phoneno){
    document.getElementById("checkPhone").innerHTML = "Telefonul Dumnevoastră";
    return false;
  }
};

var userEmail = function(emailCheck) {
  var x = document.forms["myForm"]["email"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if(emailCheck.value === ''|| atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
    document.getElementById("checkEmail").innerHTML = "Adresa de email";
    return false;
  }
};

window.alert("Test")

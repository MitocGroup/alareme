

var userName = function(nameCheck) {
  var x = document.forms["myForm"]["name"].value;
  if(nameCheck.value === ''|| nameCheck.length <= 3 || nameCheck.length > 10){
    document.getElementById("checkName").innerHTML = "Introduceti numele d-stra";
    return false;
  }
};

var userPhone = function(phoneCheck) {
  var x = document.forms["myForm"]["phone"].value;
  var phoneno = /^\d{8}$/;
  if(phoneCheck.value ==='' || phoneCheck.value === phoneno){
    document.getElementById("checkPhone").innerHTML = "Introduceti telefonul d-stra";
    return false;
  }
};

var userEmail = function(emailCheck) {
  var x = document.forms["myForm"]["email"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if(emailCheck.value === ''|| atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
    document.getElementById("checkEmail").innerHTML = "Introduceti adresa de email";
    return false;
  }
};

window.alert("Test")

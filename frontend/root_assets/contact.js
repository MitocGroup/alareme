

window.alert("Hello")


var userName = function(el) {
  if(el.value === ''){
    document.getElementById("checkName").innerHTML = "Introduceti numele d-stra";
  }
};


var userPhone = function(inputtxt) {
  var phoneno = /^\d{9}$/;
  if(inputtxt.value.match(phoneno)){
    document.getElementById("checkPhone").innerHTML = "Introduceti telefonul d-stra";
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

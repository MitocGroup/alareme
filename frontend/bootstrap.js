/**
 * Created by alexei on 6/13/16.
 */
'use strict';

(function(framework) {

  var security = framework.Kernel.get('security');
  var resource = framework.Kernel.get('resource');
  var asset = framework.Kernel.get('asset');

  function loadAsset(assetPath, callback) {
    var xhttp = new XMLHttpRequest();
    var realPath = asset.locate(assetPath);

    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        callback(xhttp.responseText);
      }
    };

    xhttp.open('GET', realPath, true);
    xhttp.send();
  }

  loadAsset('@deep-alareme:index.html', function(plainHtml) {
    var body = document.body;
    body.innerHTML = plainHtml;

  });
})(DeepFramework);

// el.className += ' disabled';
// if (el.className.indexOf(disabled) > -1)
// el.className += el.className.replace(' disabled', '');
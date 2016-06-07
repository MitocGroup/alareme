'use strict';
'format es6';


export function configLoad() {
  return System.import('/deep-alareme/js/config.core.js');
}

export default function deepAlareme() {
  let deepAsset = DeepFramework.Kernel.get('asset');

  return new Promise((resolve) => {
    DeepFramework.Kernel.get('security').anonymousLogin(function() {
      System.import('js/app/angular/index.js').then(resolve);
    });
  })

  // console.log(deepAsset.locate('deep-alareme/js/app/angular/index.js'));
}
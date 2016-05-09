(function() {
  'use strict';

  angular
    .module('mobileMarketing')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

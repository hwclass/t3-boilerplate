App.footer.addService('dummyText', function (context) {
  'use strict';
  return {
    getDummyText : function () {
      return 'This is a dummy text as well footer..';
    }
  }
});

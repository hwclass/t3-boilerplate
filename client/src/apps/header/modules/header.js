app.header.addModule('header', function(context) {
	'use strict';
	return {
		behaviors: ['event'],
		init : function () {
			console.log('Header module initialized');
		}
	}
});

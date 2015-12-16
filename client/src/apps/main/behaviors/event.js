app.main.addBehavior('event', function (context) {

	'use strict';

	var randomService;

	return {

		init : function () {
			randomService = context.getService('random');
		},

		onclick : function (element, event, elementType) {
			var randomNumber = randomService.getRandom();
			element.target.innerHTML = randomNumber;
		}

	}

});

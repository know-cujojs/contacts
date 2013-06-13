(function(define) {
define(function() {

	var buster, assert, controller;

	buster = require('buster');
	assert = buster.assert;
	controller = require('../../app/controller');

	buster.testCase('app/controller', {
		'editContact': {
			'should delegate to _updateForm, passing _form and contact': function() {
				var c = Object.create(controller);

				c._updateForm = this.spy();
				c._form = 1;

				c.editContact(2);

				assert.calledOnceWith(c._updateForm, 1, 2);
			},
		}
	});

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));


(function(define) {
define(function() {

	var buster, validateContact;

	buster = require('buster');
	validateContact = require('../../../app/edit/validateContact');

	buster.testCase('app/edit/validateContact', {
		'should return error for a contact with no first name': function() {
			var contact, result;
			contact = { "lastName" : "Smith"};
			result = validateContact(contact);
			assert.isFalse(result.valid);
			assert.equals(result.errors[0].property, "firstName");
			assert.equals(result.errors[0].message, "missing");
		},
		'should return error for a contact with no last name': function() {
			var contact, result;
			contact = { "firstName" : "John"};
			result = validateContact(contact);
			assert.isFalse(result.valid);
			assert.equals(result.errors[0].property, "lastName");
			assert.equals(result.errors[0].message, "missing");		
		},
		'should return confirm a valid contact': function() {
			var contact, result;
			contact = { "lastName" : "Smith", "firstName" : "John"};
			result = validateContact(contact);
			assert.isTrue(result.valid);
			assert.equals(result.errors, [])		
		}
	});

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));


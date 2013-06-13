(function(define) {
define(function() {

	var buster, cleanContact;

	buster = require('buster');
	cleanContact = require('../../../app/contacts/cleanContact');

	buster.testCase('app/contacts/cleanContact', {
		'should trim all trailing whitespace': function() {
			var contact, result;
			contact = {"firstName" : "John  ", "lastName" : "Smith  ", "phone" : "614-555-5555  ", "email" : "jsmith@email.com  " };
			result = cleanContact(contact);
			assert.equals(result.firstName, "John");
			assert.equals(result.lastName, "Smith");
			assert.equals(result.phone, "614-555-5555");
			assert.equals(result.email, "jsmith@email.com")
		}
	});

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));


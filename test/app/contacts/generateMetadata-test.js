(function(define) {
define(function() {

	var buster, generateMetadata;

	buster = require('buster');
	generateMetadata = require('../../../app/contacts/generateMetadata');

	buster.testCase('app/contacts/generateMetadata', {
		'should add valid date-time and guid to item': function() {
			var item = {}
			generateMetadata(item);
			assert.defined(item.id)
			assert.defined(item.dateCreated)
			//assert match for valid GUID
			assert.match(item.id, /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/)
		}
	});

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));


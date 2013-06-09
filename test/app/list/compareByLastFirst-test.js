(function(define) {
define(function() {

	var buster, compareByLastFirst;

	buster = require('buster');
	compareByLastFirst = require('../../../app/list/compareByLastFirst');

	buster.testCase('app/list/compareByLastFirst', {
		'should return -1 if contact1 is alphabetically before contact2': function() {
			var compare, contact1, contact2
			contact1 = {"firstName" : "John", "lastName" : "Smith" }
			contact2 = {"firstName" : "John", "lastName" : "Zoogelder" }
			var compare = compareByLastFirst(contact1, contact2);
			assert.equals(compare, -1)
		},
		'should return 1 if contact1 is alphabetically after contact2': function() {
			var compare, contact1, contact2
			contact1 = {"firstName" : "John", "lastName" : "Smith" }
			contact2 = {"firstName" : "John", "lastName" : "Anderson" }
			var compare = compareByLastFirst(contact1, contact2);
			assert.equals(compare, 1)
		},
		'should return 0 if contact1 and contact2 have the same first and last name': function(){
			var compare, contact1, contact2
			contact1 = {"firstName" : "John", "lastName" : "Smith" }
			contact2 = {"firstName" : "John", "lastName" : "Smith" }
			var compare = compareByLastFirst(contact1, contact2);
			assert.equals(compare, 0)
		}
	});

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));


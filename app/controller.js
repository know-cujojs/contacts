(function(define) {
define(function() {

	return {
		editContact: function(contact) {
			this._updateForm(this._form, contact);
		}
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

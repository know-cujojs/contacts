define({

	root: { $ref: 'dom!contactsApp' },
	
	theme: { module: 'css!theme/basic.css' },

	//
	// DATA MODEL
	//
	contactsCollection: { wire: 'app/collection/spec' },

	//
	// CONTROLLER
	//
	controller: {
		create: 'app/controller',
		properties: {
			_form: { $ref: 'editView' },
			_updateForm: { $ref: 'form.setValues' }
		},
		connect: {
			'contactsCollection.onEdit': 'editContact'
		}
	},

	//
	// VIEWS
	//
	contactsContainer: { $ref: 'dom.first!.contacts-view-container', at: 'root' },

	headerView: {
		render: {
			template: { module: 'text!app/header/template.html' },
			replace: { module: 'i18n!app/header/strings' },
			css: { module: 'css!app/header/style.css' }
		},
		insert: { first: 'root' }
	},

	editView: {
		render: {
			template: { module: 'text!app/edit/template.html' },
			replace: { module: 'i18n!app/edit/strings' },
			css: { module: 'css!app/edit/structure.css' }
		},
		insert: { after: 'listView' },
		on: {
			submit: 'form.getValues | contactsCollection.update'
		},
		connect: {
			'contactsCollection.onChange': 'reset'
		}
	},

	listView: {
		render: {
			template: {module: 'text!app/list/template.html' },
			css: { module: 'css!app/list/structure.css' }
		},
		insert: { first: 'contactsContainer' },
		on: {
			'click:.contact': 'contactsCollection.edit',
			'click:.remove': 'contactsCollection.remove'
		},
		bind: {
			to: { $ref: 'contactsCollection' },
			comparator: { module: 'app/list/compareByLastFirst' },
			bindings: {
				firstName: '.first-name',
				lastName: '.last-name'
			}
		}
	},

	footerView: {
		render: {
			template: { module: 'text!app/footer/template.html' },
			replace: { module: 'i18n!app/footer/strings.js' },
			css: { module: 'css!app/footer/style.css' }
		},
		insert: { last: 'root' }
	},

	//
	// HELPERS
	//
	form: { module: 'cola/dom/form' },

	// Wire.js plugins
	plugins: [
		{ module: 'wire/dom', classes: { init: 'loading' } },
		'wire/dom/render', 'wire/on', 'wire/aop', 'wire/connect', 'cola'
	]
});
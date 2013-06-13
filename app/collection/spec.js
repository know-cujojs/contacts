define({

	$exports: { $ref: 'contacts' },

	contacts: {
		create: {
			module: 'cola/Collection',
			args: {
				strategyOptions: {
					validator: { module: 'app/collection/validateContact' }
				}
			}
		},
		before: {
			add: 'cleanContact | generateMetadata',
			update: 'cleanContact | generateMetadata'
		}
	},

	contactStore: {
		create: {
			module: 'cola/adapter/LocalStorage',
			args: 'contacts-demo'
		},
		bind: { $ref: 'contacts' }
	},

	cleanContact: { module: 'app/collection/cleanContact' },
	generateMetadata: { module: 'app/collection/generateMetadata' },

	$plugins: [
		{ module: 'wire/dom' },
		{ module: 'wire/on' },
		{ module: 'wire/aop' },
		{ module: 'cola' }
	]

});
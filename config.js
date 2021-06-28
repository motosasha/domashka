/* global module */

let config = {
	'notGetBlocks': [],
	'ignoredBlocks': [
		'no-js',
	],
	'alwaysAddBlocks': [],
	'addStyleBefore': [
		'normalize.css/normalize.css',
		'dev/scss/variables.scss',
		'dev/scss/mixins.scss',
		'dev/scss/reboot.scss',
		//'dev/scss/fonts.scss',
		'dev/scss/typography.scss',
		'dev/scss/vendor.scss',
		//'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
	],
	'addStyleBeforeTrash': [],
	'addStyleAfter': [
		//'dev/scss/print.scss',
	],
	'addJsBefore': [
		//'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
	],
	'addJsAfter': [],
	'addAdditions': {
		'dev/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
	},
	'source': {
		'data':   		'dev/data/',
		'dev':          'dev/',
		'blocks':       'dev/blocks/',
		'trash':		'dev/trash/',
		'build':        'build/',
		'svgAsBg':      'dev/symbols/add.add',
		'globalPath':   ''
	},
};

module.exports = config;

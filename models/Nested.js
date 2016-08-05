var keystone = require('keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Nested = new keystone.List('Nested');

Nested.add({
	name: { type: String },
	things: { type: Types.List, fields: {
		name: { type: String },
		number: { type: Number },
	} },
});

transform.toJSON(Nested);
Nested.defaultColumns = 'name, things';
Nested.register();

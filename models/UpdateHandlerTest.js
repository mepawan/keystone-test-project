var keystone = require('keystone');
var Types = keystone.Field.Types;

var UpdateHandlerTest = new keystone.List('UpdateHandlerTest', {
	nocreate: true,
	track: true,
});

UpdateHandlerTest.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email },
	image: { type: Types.CloudinaryImage },
});

UpdateHandlerTest.track = true;
UpdateHandlerTest.defaultSort = '-createdAt';
UpdateHandlerTest.defaultColumns = 'name, email, createdAt';
UpdateHandlerTest.register();

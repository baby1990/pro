import {enumType, objectType, scalarType, inputObjectType, intArg, stringArg} from "nexus";

export const File = objectType({
	name: 'File',
	definition(t) {
		t.model.id();
		t.model.name();
		t.model.alias();
		t.model.contentType();
		t.model.size();
		t.model.url();

		t.model.createdAt();
		t.model.updatedAt();

		t.model.document();
	},
});

export const User = objectType({
	name: 'User',
	definition(t) {
		t.model.id();
		t.model.name();
		t.model.phone();
		t.model.alias();
		// t.model.unionId();

		t.model.sex(undefined as any);
		t.model.desc();
		t.model.createdAt();
		t.model.updatedAt();

		t.model.avatar(undefined as any);
		t.model.documents({ ordering: true, filtering: true });
		t.model.documentsCollected({ ordering: true, filtering: true });
	},
});

export const Document = objectType({
	name: 'Document',
	definition(t) {
		t.model.id();
		t.model.isPublic();
		t.model.subject();
		t.model.content();
		t.model.contentRaw();
		t.model.draft();
		t.model.likeCount();
		t.model.readCount();
		t.model.createdAt();
		t.model.updatedAt();

		t.model.author(undefined as any);
		t.model.files(undefined as any);

		t.boolean('isPublish');

		t.boolean('isDraft', (o) => !!o.draft);

		t.model.collectors({ ordering: true, filtering: true });
	},
});

export const AuthPayload = objectType({
	name: 'AuthPayload',
	definition(t) {
		t.string('token');
		t.field('user', { type: 'User' as any });
	},
});


export const MsgData = objectType({
	name: 'MsgData',
	definition(t) {
		t.string('code');
		t.string('message');
	},
});

export const OSSPolicy = objectType({
	name: 'OSSPolicy',
	definition(t) {
		t.string('accessId');
		t.string('host');
		t.string('policy');
		t.string('signature');
		t.string('expire');
		t.string('dir');
	},
});

export const FileInputType = inputObjectType({
	name: 'FileInputType',
	definition(t) {
		t.string('name', { required: true });
		t.string('contentType', { required: true });
		t.string('eTag', { required: true });
		t.int('size', { required: true });
		t.string('url', { required: true });
	},
});

export default [MsgData, OSSPolicy, File, FileInputType, User, AuthPayload, Document];
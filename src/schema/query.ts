import { objectType, queryType } from "nexus";
import { getUserUnionId } from '../util'

const Query = queryType({
	definition(t) {
		t.crud.file(undefined as any);
		t.crud.files(undefined as any);

		t.crud.user(undefined as any);
		t.crud.users(undefined as any);

		t.crud.document();
		t.crud.documents({ ordering: true, filtering: true });

		t.field('me', {
			type: 'User' as any,
			nullable: true,
			resolve: (parent, args, ctx) => {
				const userUnionId = getUserUnionId(ctx);
				if (!userUnionId) {
					return null;
				}
				return ctx.photon.users.findOne({where: { unionId: userUnionId }});
			},
		});
	},
});

export default Query;
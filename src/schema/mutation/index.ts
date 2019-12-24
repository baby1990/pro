import { mutationType } from "nexus";
import { Auth } from './Auth';
import { Document } from './Document';
import { Cloud } from './Cloud';

const Mutation = mutationType({
	definition(t) {

		Auth(t as any);

		Document(t as any);

		Cloud(t as any);
	},
});

export default Mutation;
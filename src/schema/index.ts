
import {makeSchema} from "nexus";
import { join } from 'path'
import { nexusPrismaPlugin } from 'nexus-prisma'

import Query from './query';
import Mutation from './mutation';
import schemaTypes from './schema';

const appTypes = [Query, Mutation, ...schemaTypes];

const schema = makeSchema({
	types: appTypes,
	plugins: [nexusPrismaPlugin()],
	outputs: {
		typegen: join(__dirname, '../generated/nexus-typegen.ts'),
		schema: join(__dirname, '/schema.graphql'),
	},
	typegenAutoConfig: {
		sources: [
			{
				source: '@prisma/photon',
				alias: 'photon',
			},
			{
				source: join(__dirname, '../context.ts'),
				alias: 'Context',
			},
		],
		contextType: 'Context.Context',
	},
});

export default schema;
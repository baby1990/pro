import { Photon } from '@prisma/photon'
import { ApolloServer, gql } from 'apollo-server'
import { createContext } from './context'
import schema from './schema';

const photon = new Photon();

const server = new ApolloServer({
	schema,
	context: createContext,
});

server.listen({ port: 4000 }, () =>
	console.log(`🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-apollo-server#6-using-the-graphql-api`),
);


import {rootValue} from '@gql/rootValue';
import {schema} from '@gql/schema';
import express from 'express';
import {graphqlHTTP} from 'express-graphql';

const app = express();

app.use('/graphql', graphqlHTTP({
	schema,
	rootValue,
	graphiql: true,
}));

app.listen(3333);

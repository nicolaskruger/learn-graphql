import {buildSchema} from 'graphql';
import express from 'express';
import {graphqlHTTP} from 'express-graphql';

const schema = buildSchema(`
	type Query {
    	hello: String,
		by: String,
		neymar: String
		user: User
  	}
	type User {
		name: String
	}
`);

const rootValue = {
	neymar: (pronome: string) => `neymar eh ${pronome}`,
	hello: () => 'Hello world!',
	by: () => 'by',
	user: () => ({name: 'sexo'}),
};

const app = express();

app.use('/graphql', graphqlHTTP({
	schema,
	rootValue,
	graphiql: true,
}));
app.listen(3333);

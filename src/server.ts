import {buildSchema} from 'graphql';
import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import type {User} from '@dto/user';

const schema = buildSchema(`
    type Query {
    	hello: String,
		by: String,
		byName(name: String): User
		neymar: String
		user: User
		users: [User]
  	}
	type User {
		name: String
	}
	type Mutation {
		createUser: User
		createUserName(name: String): User 
	}
`);

const users: User[] = [];

const rootValue = {
	neymar: (pronome: string) => `neymar eh ${pronome}`,
	hello: () => 'Hello world!',
	by: () => 'by',
	user: () => ({name: 'sexo'}),
	users: () => users,
	byName({name}: User) {
		const user = users.find(user => user.name === name);
		return user;
	},
	createUser() {
		const user: User = {name: 'nicolas'};
		users.push(user);
		return user;
	},
	createUserName({name}: User) {
		const user: User = {name};

		users.push(user);
		return user;
	},
};

const app = express();

app.use('/graphql', graphqlHTTP({
	schema,
	rootValue,
	graphiql: true,
}));
app.listen(3333);

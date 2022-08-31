const QUERY = `
    type Query {
    	posts: [Post]
  	}
	type Post {
        id: String
		text: String
	}
	type Mutation {
        deletePost(id: String): Post
		createPost(text: String): Post
	}
`;

export {
	QUERY,
};

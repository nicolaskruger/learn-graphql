import type {Post} from '@dto/post';
import {v4} from 'uuid';
type MyPost = {
	data: Post[];
};

const posts: MyPost = {
	data: [
	    {id: '1', text: 'oi eu sou goku'},
	    {id: '2', text: 'irineu'},
	],
};

const rootValue = {
	posts: () => posts.data,
	deletePost({id}: {id: string}) {
		const post = posts.data.find(post => post.id === id);
		posts.data = posts.data.filter(post => post.id !== id);

		return post;
	},
	createPost({text}: Post) {
		const id = v4();

		const post: Post = {
			text,
			id,
		};

		const {data} = posts;

		posts.data = [post, ...data];

		return post;
	},
};

export {
	rootValue,
};

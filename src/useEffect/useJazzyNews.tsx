import { useState, useEffect } from "react";

type Post = {
	title: string;
	content: string;
};

export const useJazzyNews = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const addPost = (post: Post) => setPosts([...posts, post]);

	// useEffect(() => {
	// 	newsFeed.subscribe(addPost);
	// 	return () => newsFeed.unsubscribe(addPost);
	// }, []);

	// useEffect(() => {
	// 	welcomeChime.play();
	// 	return () => goodbyeChime.play();
	// }, []);
};

//* react
import { FC, useRef } from 'react';

//* react-query
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

//* redux
import { useSelector } from 'react-redux';

//* store
import { selectUser } from '@/store/user/userSlice';

//* components
import InputOptionItem from '@/components/InputOptionItem/InputOptionItem';
import Post from '@/components/Post/Post';
import type { PostProps } from '@components/Post/Post';

//* libs
import FlipMove from 'react-flip-move';

//* services
import { addPost, fetchPosts } from '@/services/firebaseService';

//* icons
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';

// * styles
import styles from './Feed.module.scss';

// import

interface FeedProps {}

const Feed: FC<FeedProps> = ({}, ref) => {
	const user = useSelector(selectUser);

	const queryClient = useQueryClient();
	// const [posts, setPosts] = useState<[] | PostProps[]>([]);
	const inputMessage = useRef(null);

	const { isLoading, error, data } = useQuery({
		queryKey: ['feedData'],
		queryFn: () => fetchPosts(),
	});
	console.log('data: ', data);

	// data.posts;
	const mutation = useMutation({
		mutationFn: (newPost: PostProps) => addPost(newPost),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: 'feedData' });
		},
	});

	const sendPost = async (e: SubmitEvent) => {
		e.preventDefault();

		console.log('e: ', e);
		const form = e.target as HTMLFormElement;

		if (!form) {
			return;
		}

		const input = form.querySelector('input') as HTMLInputElement;

		if (!input) {
			return;
		}

		/* setPosts((val) => [
			...val,
			{
				message: input.value,
				name: 'John D',
				description: 'zz',
			},
		]); */
		/* await addPost({
			message: input.value,
			username: 'shadow',
			description: 'your shadow',
		}); */
		mutation.mutate({
			message: input.value,
			username: user?.user?.displayName,
			description: user?.user?.email,
			photoUrl: user?.user?.photoURL,
			date: new Date().toLocaleDateString(),
		});

		// console.log('posts: ', posts);

		form.reset();
	};

	if (isLoading) return <p>Loading..</p>;
	if (error) return <p>error - {error.message}</p>;

	return (
		<div className={styles.feed}>
			<div className={styles.feedInputContainer}>
				<div className={styles.feedInput}>
					<CreateIcon />
					<form onSubmit={sendPost}>
						<input type="text" ref={inputMessage} />
						{/* <button type="submit">Send</button> */}
					</form>
				</div>

				<div className={styles.inputOptions}>
					<InputOptionItem title="Photo" Icon={ImageIcon} color="#70B5f9" />
					<InputOptionItem
						title="Video"
						Icon={SubscriptionsIcon}
						color="#e7a33e"
					/>
					<InputOptionItem title="Event" Icon={EventNoteIcon} color="#c0cbcd" />
					<InputOptionItem
						title="Write Article"
						Icon={CalendarViewDayIcon}
						color="#7fc15e"
					/>
				</div>
			</div>
			{/* posts */}
			<FlipMove>
				{data.posts.length > 0 &&
					data.posts.map((post) => (
						<Post
							key={post.postId}
							username={post.username}
							message={post.message}
							description={post.description}
							date={post.date}
						/>
					))}
			</FlipMove>
		</div>
	);
};
export default Feed;

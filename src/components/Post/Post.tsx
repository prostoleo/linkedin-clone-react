import type { FC } from 'react';
import { Avatar } from '@mui/material';

import { Timestamp } from 'firebase/firestore';

import styles from './Post.module.scss';
import InputOptionItem from '../InputOptionItem/InputOptionItem';
import {
	ChatOutlined,
	SendOutlined,
	ShareOutlined,
	ThumbUpAltOutlined,
} from '@mui/icons-material';
import { formatDate } from '@/utils/formatters';

export interface PostProps {
	username: string;
	description: string;
	message: string;
	photoUrl?: string;
	/* date: {
		seconds: number;
		nanoseconds: number;
	}; */
	date: Timestamp;
}

const Post: FC<PostProps> = ({
	username,
	description,
	message,
	photoUrl,
	date,
}: PostProps) => {
	// console.log('date: ', date);
	return (
		<div className={styles.post}>
			<div className={styles.postHeader}>
				<Avatar />
				<div className={styles.postInfo}>
					<h2>{username}</h2>
					<p>{description}</p>
				</div>
				{/* <span>{new Date(date).toLocaleDateString()}</span> */}
				{/* {date?.seconds && ( */}
				{date && (
					<span className={styles.postDate}>
						{formatDate(date.toDate())}
						{/* {Timestamp.fromMillis(date.seconds * 1000)} */}
						{/* {Timestamp.toDate(date)} */}
						{/* {date.toMillis().toString().slice(-8)} */}
					</span>
				)}
			</div>
			<div className={styles.postBody}>
				<p>{message}</p>
			</div>
			<div className={styles.postButtons}>
				<InputOptionItem Icon={ThumbUpAltOutlined} title="Like" color="gray" />
				<InputOptionItem Icon={ChatOutlined} title="Comment" color="gray" />
				<InputOptionItem Icon={ShareOutlined} title="Share" color="gray" />
				<InputOptionItem Icon={SendOutlined} title="Like" color="gray" />
			</div>
		</div>
	);
};
export default Post;

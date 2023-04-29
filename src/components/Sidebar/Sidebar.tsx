import type { FC } from 'react';
import styles from './Sidebar.module.scss';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/user/userSlice';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
	const user = useSelector(selectUser);

	const recentItem = (topic: string) => {
		return (
			<div className={styles.sidebarRecentItem}>
				<span className={styles.sidebarHash}>#</span>
				<p>{topic}</p>
			</div>
		);
	};

	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebarTop}>
				{/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
				<img
					className={styles.sidebarImg}
					src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
					alt=""
				/>
				<Avatar src={user?.photoURL} className={styles.sidebarAvatar}>
					{user?.user.displayName[0]}
				</Avatar>
				<p className={styles.sidebarUsername}>{user?.user?.displayName}</p>
				<p className={styles.sidebarEmail}>
					{user?.user.email}
					{/* test@test.com */}
				</p>
			</div>
			<div className={styles.sidebarStats}>
				<div className={styles.sidebarStatsItem}>
					<p>Who viewed you</p>
					<p className={styles.sidebarStatNumber}>2,568</p>
				</div>
				<div className={styles.sidebarStatsItem}>
					<p>Views on post</p>
					<p className={styles.sidebarStatNumber}>2,444</p>
				</div>
			</div>

			<div className={styles.sidebarBottom}>
				<p>Recent</p>

				{recentItem('reactJs')}
				{recentItem('vuejs')}
				{recentItem('code')}
				{recentItem('design')}
				{recentItem('typecript')}
			</div>
		</div>
	);
};
export default Sidebar;

import type { FC } from 'react';
import styles from './Header.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HomeIcon from '@mui/icons-material/Home';
// import { style } from '@mui/system';
import HeaderOption from '../HeaderOption/HeaderOption';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
	return (
		<header className={styles.header}>
			<div className={styles.headerLeft}>
				<img className={styles.headerLeftIcon} src="/linkedin-new.svg" alt="" />

				<div className={styles.headerSearch}>
					{/* search icon */}
					<SearchIcon />
					<input type="text" />
				</div>
			</div>
			<div className={styles.headerRight}>
				<HeaderOption Icon={HomeIcon} title="Home" />
				<HeaderOption Icon={SupervisorAccountIcon} title="My network" />
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOption Icon={ChatIcon} title="Chatting" />
				<HeaderOption Icon={NotificationsIcon} title="Notifications" />
				<HeaderOption
					avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKrP0QZ1ADDz8kWV0_M6J_wlBlhQ6k_ekVg&usqp=CAU"
					title="Me"
				/>
			</div>
		</header>
	);
};
export default Header;

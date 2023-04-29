import { SvgIconComponent } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import type { FC } from 'react';
import styles from './HeaderOption.module.scss';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/user/userSlice';

interface HeaderOptionProps {
	avatar?: boolean;
	title?: string;
	Icon?: SvgIconComponent;
	onClick?: () => void;
}

const HeaderOption: FC<HeaderOptionProps> = ({
	avatar = false,
	Icon,
	title,
	onClick,
}) => {
	const user = useSelector(selectUser);

	return (
		<div className={styles.headerOption} onClick={onClick}>
			{Icon && <Icon className="icon" />}
			{/* {avatar && <img avatar src={avatar} />} */}
			{avatar && (
				<Avatar
					className={styles.headerOptionAvatar}
					src={user?.user?.photoURL}
				>
					{user?.user?.displayName[0]}
				</Avatar>
			)}
			{title && <p className="text">{title}</p>}
		</div>
	);
};
export default HeaderOption;

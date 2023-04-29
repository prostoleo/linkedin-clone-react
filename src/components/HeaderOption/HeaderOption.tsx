import { SvgIconComponent } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import type { FC } from 'react';
import styles from './HeaderOption.module.scss';

interface HeaderOptionProps {
	avatar?: string;
	title?: string;
	Icon?: SvgIconComponent;
	onClick?: () => void;
}

const HeaderOption: FC<HeaderOptionProps> = ({
	avatar,
	Icon,
	title,
	onClick,
}) => {
	return (
		<div className={styles.headerOption} onClick={onClick}>
			{Icon && <Icon className="icon" />}
			{/* {avatar && <img avatar src={avatar} />} */}
			{avatar && <Avatar className={styles.headerOptionAvatar} src={avatar} />}
			{title && <p className="text">{title}</p>}
		</div>
	);
};
export default HeaderOption;

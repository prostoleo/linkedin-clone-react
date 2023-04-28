import { SvgIconComponent } from '@mui/icons-material';
import type { FC } from 'react';

import styles from './InputOptionItem.module.scss';

interface InputOptionItemProps {
	title: string;
	Icon: SvgIconComponent;
	color?: string;
}

const InputOptionItem: FC<InputOptionItemProps> = ({
	title,
	Icon,
	color,
}: InputOptionItemProps) => {
	return (
		<div className={styles.inputOption}>
			<Icon style={{ color: color }} />
			<span>{title}</span>
		</div>
	);
};
export default InputOptionItem;

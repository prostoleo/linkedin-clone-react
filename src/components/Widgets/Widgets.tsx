import type { FC } from 'react';

import {
	FiberManualRecord as FiberManualRecordIcon,
	Info as InfoIcon,
} from '@mui/icons-material';

import styles from './Widgets.module.scss';

interface WidgetsProps {}

const Widgets: FC<WidgetsProps> = ({}) => {
	const newsArticle = (heading: string, subtitle: string) => {
		return (
			<div className={styles.widgets__article}>
				<div className={styles.widgets__articleLeft}>
					<FiberManualRecordIcon />
				</div>
				<div className={styles.widgets__articleRight}>
					<h4>{heading}</h4>
					<p>{subtitle}</p>
				</div>
			</div>
		);
	};

	return (
		<div className={styles.widgets}>
			<div className={styles.widgets__header}>
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newsArticle(
				'Power couple announces separation on social media',
				'Popular news, 5,000 likes and 500 comments'
			)}
			{newsArticle(
				'Heat wave presents safety concerns for workers',
				'Trending news, 15,000 likes and 2,000 shares'
			)}
			{newsArticle(
				'Sustainability-focused startup gains significant investment for expansion',
				'Trending news, 15,000 likes and 2,000 shares '
			)}
			{newsArticle(
				'Data analytics company helps businesses improve customer experience',
				'Trending news, 20,000 likes and 3,000 shares '
			)}
			{newsArticle(
				'Industry expert predicts major changes in marketing trends for 2021',
				'Popular news, 12,000 likes and 1,500 comments.'
			)}
		</div>
	);
};
export default Widgets;

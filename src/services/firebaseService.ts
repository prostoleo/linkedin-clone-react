import { v4 as uuid } from 'uuid';

import {
	getDocs,
	collection,
	onSnapshot,
	addDoc,
	getFirestore,
	doc,
	setDoc,
	Timestamp,
} from 'firebase/firestore';
// import { getDatabase, ref, set } from 'firebase/database';

import { firestore } from '@/libs/firebase';
import { PostProps } from '@/components/Post/Post';

interface PostPropsExt extends PostProps {
	postId: string;
}

export async function fetchPosts() {
	const colRef = collection(firestore, 'posts');

	try {
		let posts = [] as PostPropsExt[] | [];

		const unsubscribe = await getDocs(colRef).then((snapshot) => {
			// const unsubscribe = await (await getDocs(colRef)) ((snapshot) => {
			// let data = [];

			const data = snapshot.docs.forEach((doc) => {
				posts.push({
					...doc.data(),
					postId: doc.id,
				});
			});

			// posts
			// return data;
		});

		const sortedData = posts
			.slice()
			.sort((a, b) => b.date.toMillis() - a.date.toMillis());

		// return res;
		return {
			posts: sortedData,
			unsubscribe,
		};
		/* const d = await colRef.converter?.fromFirestore();
		console.log('d: ', d);

		const res = onSnapshot(colRef, (QuerySnapshot) => {
			const data = [];

			QuerySnapshot.forEach((doc) => {
				data.push({
					id: doc.id,
					data: doc.data(),
				});
			});

			return data;
		});

		return res; */
	} catch (error) {
		console.log('error: ', error);
	}
}

interface addPostProps extends PostProps {}

export async function addPost(postData: addPostProps) {
	try {
		const userId = Math.floor(Math.random() * 1000);

		/* const postDoc = doc(firestore, 'posts/' + userId); */

		/* const docData = {
			message,
			de
		}; */

		/* setDoc(postDoc, {
			postId: uuid(),
			...postData,
			date: Timestamp.fromDate(new Date()),
		}); */
		const colRef = collection(firestore, 'posts');

		addDoc(colRef, {
			postId: uuid(),
			...postData,
			date: Timestamp.fromDate(new Date()),
		});
	} catch (error) {
		console.log('error: ', error);
		throw error;
	}
}

/* export async function setTestData() {
	const aTuringRef = collection(firestore, 'users');

	await aTuringRef.set({
		first: 'Alan',
		middle: 'Mathison',
		last: 'Turing',
		born: 1912,
	});
} */

/* const specialOfTheDay = doc(firestore, 'dailySpecial/2021-09-15');

function writeDailySpecial() {
	const docData = {
		description: 'latte',
		price: 4,
		vegan: false,
	};

	setDoc(specialOfTheDay, docData);
}
 */
// writeDailySpecial();

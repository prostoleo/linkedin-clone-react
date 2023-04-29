import { useEffect } from 'react';
import { RootState } from '@/store';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '@/libs/firebase';
import { logout, login } from '@/store/user/userSlice';
import { iLoginState } from './useLogin';
import {
	UserCredential,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';

export default function useAuth() {
	const user = useSelector((state: RootState) => state.user.user);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (!userAuth) {
				// user is logged out
				dispatch(logout());

				return;
			}

			//user is logged in
			dispatch(
				login({
					email: userAuth.email,
					uid: userAuth.uid,
					displayName: userAuth.displayName,
					photoURL: userAuth.photoURL,
				})
			);
		});
	}, []);

	async function signInUser(state: iLoginState) {
		try {
			const userAuth = await signInWithEmailAndPassword(
				auth,
				state.email,
				state.password
			);

			dispatchLogin(userAuth, state);
		} catch (error) {
			console.log('error: ', error);
		}
	}

	async function createUser(state: iLoginState) {
		try {
			const userAuth = await createUserWithEmailAndPassword(
				auth,
				state.email,
				state.password
			);

			await updateProfile(auth?.currentUser!, {
				displayName: state.fullName,
				photoURL: state.photoURL,
			});

			dispatchLogin(userAuth, state);
		} catch (error) {
			console.log('error: ', error);
		}
	}

	function dispatchLogin(userAuth: UserCredential, state: iLoginState) {
		dispatch(
			login({
				email: userAuth.user.email,
				uid: userAuth.user.uid,
				displayName: state.fullName,
				photoURL: state.photoURL,
			})
		);
	}

	const logoutOfApp = async () => {
		try {
			console.log('logoutOfApp');
			dispatch(logout);
			await auth.signOut();
			console.log('auth signOut');
		} catch (error) {
			console.log('error: ', error);
		}
	};

	return {
		user,
		signInUser,
		createUser,
		logoutOfApp,
	};
}

import { FC, SyntheticEvent, useState, useReducer } from 'react';

import styles from './Login.module.scss';
import { useDispatch } from 'react-redux';
import { login } from '@/store/user/userSlice';
// import { auth } from '@/libs/firebase';
import { auth } from '../../libs/firebase';
import {
	createUserWithEmailAndPassword,
	updateCurrentUser,
	updateProfile,
} from 'firebase/auth';
/* const { auth, admin: firebaseAdmin } = await import('../../libs/firebase');
const { createUserWithEmailAndPassword } = await import('firebase/auth'); */

interface PropsType {}

enum eActionKind {
	fullName = 'fullName',
	email = 'email',
	photoURL = 'photoURL',
	password = 'password',
}

interface iState {
	fullName: string;
	photoURL: string;
	email: string;
	password: string;
}

interface iAction {
	type: eActionKind;
	payload: string;
}

const initialLoginState: iState = {
	fullName: '',
	photoURL: '',
	email: '',
	password: '',
};

const reducer = (state: iState, action: iAction): iState => {
	const { type, payload } = action;

	switch (type) {
		case 'fullName':
			return {
				...state,
				fullName: payload,
			};
			break;
		case 'email':
			return {
				...state,
				email: payload,
			};
			break;
		case 'photoURL':
			return {
				...state,
				photoURL: payload,
			};
			break;
		case 'password':
			return {
				...state,
				password: payload,
			};
			break;

		default:
			return state;
			break;
	}
};

const Login: FC<PropsType> = () => {
	// const [name, setName] = useState('');
	const [state, dispatchReducer] = useReducer(reducer, initialLoginState);

	const dispatch = useDispatch();

	function handleLogin(event: MouseEvent) {
		event.preventDefault();
		// auth
	}

	async function register() {
		try {
			if (!state.fullName) {
				return alert('please enter a full name');
			}

			const userAuth = await createUserWithEmailAndPassword(
				auth,
				state.email,
				state.password
			);

			await updateProfile(auth?.currentUser!, {
				displayName: state.fullName,
				photoURL: state.photoURL,
			});

			dispatch(
				login({
					email: userAuth.user.email,
					uid: userAuth.user.uid,
					displayName: state.fullName,
					photoURL: state.photoURL,
				})
			);
			/* createUserWithEmailAndPassword(
				auth,
				state.email,
				state.password
			).then((userCred) => userCred.user.se) */

			// userAuth.user.displayName = state.fullName;
			// userAuth.user.
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log({
				errorCode,
				errorMessage,
			});
		}
	}

	return (
		<div className={styles.login}>
			<img src="/linkedin-logo.png" alt="" />
			<form>
				{/* <span>{name}</span> */}
				<input
					name="fullName"
					type="text"
					placeholder="Full name (required if registering)"
					value={state.fullName}
					onChange={(e: SyntheticEvent) =>
						dispatchReducer({
							type: eActionKind.fullName,
							payload: (e.target as HTMLInputElement).value,
						})
					}
				/>
				{/* value={name}
					onChange={(e: SyntheticEvent) =>
						setName((e.currentTarget as HTMLInputElement).value)
					} */}
				<input
					name="profile URL"
					type="text"
					placeholder="Profile picture URL (optional)"
					value={state.photoURL}
					onChange={(e: SyntheticEvent) =>
						dispatchReducer({
							type: eActionKind.photoURL,
							payload: (e.target as HTMLInputElement).value,
						})
					}
				/>

				<input
					name="email"
					type="email"
					placeholder="Email"
					value={state.email}
					onChange={(e: SyntheticEvent) =>
						dispatchReducer({
							type: eActionKind.email,
							payload: (e.target as HTMLInputElement).value,
						})
					}
				/>
				<input
					name="password"
					type="password"
					placeholder="Password"
					value={state.password}
					onChange={(e: SyntheticEvent) =>
						dispatchReducer({
							type: eActionKind.password,
							payload: (e.target as HTMLInputElement).value,
						})
					}
				/>
				<button type="submit" onClick={handleLogin}>
					{/* onClick={(e: MouseEvent<HTMLButtonElement>) => handleLogin(e)} */}
					Sign In
				</button>
			</form>

			<p>
				Not a member?{' '}
				<button className={styles.login__register} onClick={register}>
					Register now!
				</button>
			</p>
		</div>
	);
};

export default Login;

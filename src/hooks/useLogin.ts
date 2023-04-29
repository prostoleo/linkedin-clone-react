import { useReducer } from 'react';
// import { useDispatch } from 'react-redux';
import useAuth from './useAuth';

export enum eActionKind {
	fullName = 'fullName',
	email = 'email',
	photoURL = 'photoURL',
	password = 'password',
}

export interface iLoginState {
	fullName: string;
	photoURL: string;
	email: string;
	password: string;
}

export interface iAction {
	type: eActionKind;
	payload: string;
}

const initialLoginState: iLoginState = {
	fullName: '',
	photoURL: '',
	email: '',
	password: '',
};

const reducer = (state: iLoginState, action: iAction): iLoginState => {
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

export default function useLogin() {
	const { signInUser, createUser } = useAuth();
	const [state, dispatchReducer] = useReducer(reducer, initialLoginState);

	// const dispatch = useDispatch();

	async function handleLogin(event: MouseEvent) {
		try {
			event.preventDefault();

			if (!state.fullName) {
				return alert('please enter a full name');
			}

			if (!state.email) {
				return alert('please enter a email');
			}

			if (!state.password) {
				return alert('please enter a password');
			}
			// auth
			await signInUser(state);
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log({
				errorCode,
				errorMessage,
			});
		}
	}

	async function handleRegister() {
		try {
			if (!state.fullName) {
				return alert('please enter a full name');
			}

			if (!state.email) {
				return alert('please enter a email');
			}

			if (!state.password) {
				return alert('please enter a password');
			}

			await createUser(state);
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log({
				errorCode,
				errorMessage,
			});
		}
	}

	return {
		state,
		dispatchReducer,
		handleLogin,
		handleRegister,
	};
}

import { FC, SyntheticEvent } from 'react';

import styles from './Login.module.scss';

import useLogin from '@/hooks/useLogin';
import { eActionKind } from '@/hooks/useLogin';

interface PropsType {}

const Login: FC<PropsType> = () => {
	const { state, dispatchReducer, handleLogin, handleRegister } = useLogin();

	return (
		<div className={styles.login}>
			<img src="/linkedin-logo.png" alt="" />
			<form>
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
					required
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
					required
					value={state.password}
					onChange={(e: SyntheticEvent) =>
						dispatchReducer({
							type: eActionKind.password,
							payload: (e.target as HTMLInputElement).value,
						})
					}
				/>
				<button type="submit" onClick={handleLogin}>
					Sign In
				</button>
			</form>

			<p>
				Not a member?{' '}
				<button className={styles.login__register} onClick={handleRegister}>
					Register now!
				</button>
			</p>
		</div>
	);
};

export default Login;

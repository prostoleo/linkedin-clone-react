import { iLocalUser } from '@/hooks/useAuth';
import {
	createSlice,
	createSelector,
	createDraftSafeSelector,
} from '@reduxjs/toolkit';
// import { UserCredential } from 'firebase/auth';

interface iUserState {
	user: null | iLocalUser;
}

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null,
	} satisfies iUserState,
	reducers: {
		/* increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		}, */
		login: (state, action) => {
			state.user = { ...action.payload };
		},

		logout: (state) => {
			state.user = null;
		},
	},
});

export const { login, logout } = userSlice.actions;

/* export const incrementAsync =
	(amount: number) => (dispatch: (T: void) => T) => {
		setTimeout(() => {
			dispatch(incrementByAmount(amount));
		}, 1000);
	}; */

// export const selectUser = (state) => state.user.value;
export const selectSelf = (state: iUserState) => state;

export const selectUser = createDraftSafeSelector(
	selectSelf,
	(state) => state.user
);

export default userSlice.reducer;

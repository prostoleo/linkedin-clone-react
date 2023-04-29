import { createSlice, createSelector } from '@reduxjs/toolkit';

interface iUserState {
	user: null | unknown;
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

export const selectUser = createSelector(
	selectSelf,
	(state) => state.user?.value
);

export default userSlice.reducer;

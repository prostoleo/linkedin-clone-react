import './app.scss';

import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import Feed from '@/components/Feed/Feed';
import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from './store/user/userSlice';
import Login from '@/screens/login/Login';
import { RootState } from './store';
import { useEffect } from 'react';
import { auth } from '@/libs/firebase';
import { login, logout } from './store/user/userSlice';
import useAuth from '@/hooks/useAuth';

function App() {
	// const user = useSelector(selectUser);
	// console.log('user: ', user);
	const { user } = useAuth();

	return (
		<div className="app">
			{/* header */}
			<Header />

			{!user ? (
				<Login />
			) : (
				<div className="app__body">
					{/* sidebar */}
					<Sidebar />
					{/* feed */}
					<Feed />
					{/* widgets */}
					<div>widgets</div>
				</div>
			)}
		</div>
	);
}

export default App;

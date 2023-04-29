import './app.scss';

import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import Feed from '@/components/Feed/Feed';
import { useSelector } from 'react-redux';
// import { selectUser } from './store/user/userSlice';
import Login from '@/screens/login/Login';
import { RootState } from './store';

function App() {
	// const user = useSelector(selectUser);
	// console.log('user: ', user);
	const user = useSelector((state: RootState) => state.user.user);

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

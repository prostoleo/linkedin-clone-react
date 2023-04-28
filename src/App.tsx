import './app.scss';

import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import Feed from '@/components/Feed/Feed';

function App() {
	return (
		<div className="app">
			{/* header */}
			<Header />

			{/* app body */}
			<div className="app__body">
				{/* sidebar */}
				<Sidebar />
				{/* feed */}
				<Feed />
				{/* widgets */}
				<div>widgets</div>
			</div>
		</div>
	);
}

export default App;

import './app.scss';

import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';

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
				<div>feed</div>
				{/* widgets */}
				<div>widgets</div>
			</div>
		</div>
	);
}

export default App;

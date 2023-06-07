// // // IMPORTS
import './App.css';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Navigation from './component/Navigation';
import Home from './page/Home';
import Contacts from './page/Contacts';
import Companies from './page/Companies';
import Tasks from './page/Tasks';

// provider
import AppProvider from './component/AppProvider';

// react
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<AppProvider>
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/tasks' element={<Tasks />} />
					<Route path='/companies' element={<Companies />} />
				</Routes>
			</BrowserRouter>
		</AppProvider>
	);
}

export default App;

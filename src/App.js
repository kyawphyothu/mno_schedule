import {
	Routes,
	Route,
} from 'react-router-dom';

import ResponsiveAppBar from './components/AppBar';
import RadioCheck from './components/RadioCheck';

import Home from './Pages/Home';
import PublicHoliday from './Pages/PublicHoliday';
import { Box } from '@mui/material';

function App() {
	return (
		<Box>
			<ResponsiveAppBar />
			<RadioCheck />


			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>

				<Route
					path='/public_holiday'
					element={<PublicHoliday />}
				/>
			</Routes>
		</Box>
	);
}

export default App;

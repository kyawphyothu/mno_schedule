import {
	Routes,
	Route,
} from 'react-router-dom';

import ResponsiveAppBar from './components/AppBar';
import RadioCheck from './components/RadioCheck';

import Home from './Pages/Home';
import PublicHoliday from './Pages/PublicHoliday';
import { Box } from '@mui/material';

const URL = "/mno_schedule_react";

function App() {
	return (
		<Box>
			<ResponsiveAppBar URL={URL}/>
			<RadioCheck />


			<Routes>
				<Route
					path={URL}
					element={<Home />}
				/>

				<Route
					path={`${URL}/public_holiday`}
					element={<PublicHoliday />}
				/>
			</Routes>
		</Box>
	);
}

export default App;

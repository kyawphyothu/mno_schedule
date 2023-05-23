import {
	Routes,
	Route,
	Navigate
} from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';

import ResponsiveAppBar from './components/AppBar';
import RadioCheck from './components/RadioCheck';

import PublicHoliday from './Pages/PublicHoliday';
import Home from './Pages/Home';

import { getCookie } from './assets/CookieManage';
import { handleShiftEvents } from './assets/ShiftEvent';

// const URL = process.env.REACT_APP_URL;
const URL = "/";


export default function App() {
	const [groups, setGroups] = useState('1');
	const [shiftEvents, setShiftEvents] = useState([]);

	const calRef = useRef();

	useMemo(() => {
		getCookie('groups') && setGroups(getCookie('groups'))
	}, [])

	useEffect(() => {
		setShiftEvents(handleShiftEvents(groups));
	}, [groups])

	// useEffect(() => {
	// 	// setShiftEvents(['name', 'age']);
	// 	// console.log(shiftEvents)
	// 	calRef.current.getApi().refresh();
	// }, [shiftEvents])

	return (
		<Box>
			<ResponsiveAppBar URL={URL}/>
			<RadioCheck
				groups={groups}
				setGroups={setGroups}
			/>

			<Routes>
				{/* <Route
					path='/'
					element={ <Navigate to={URL} /> }
				/> */}

				<Route
					path={URL}
					element={<Home shiftEvents={shiftEvents} calRef={calRef} />}
				/>

				<Route
					path={`${URL}public_holiday`}
					element={<PublicHoliday shiftEvents={shiftEvents} />}
				/>
			</Routes>
			<Typography sx={{ color: 'red' }}>Mobileတွင် စာများပြူး၍ သေချာမမြင်ရပါက Browser၏ အထက်မှအစက်သုံးစက်ကိုနှိပ်ပါ။ ထိုထဲတွင် Desktop Site ကိုအမှန်ချစ်ပေးပါ။</Typography>
		</Box>
	);
}

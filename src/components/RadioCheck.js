import {
	RadioGroup,
	FormControlLabel,
	Radio,
	Box,
} from '@mui/material';

import { setCookie } from '../assets/CookieManage';

export default function RadioCheck({ groups, setGroups }) {
	const handleRadioChange = e => {
		setGroups(e.target.value)
		setCookie('groups', e.target.value)
	};

	return (
		<Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					width: { xs: '100%', sm: '90%', md: '60%' },
					margin: 'auto',
				}}
			>
				<RadioGroup
					row
					aria-labelledby='demo-radio-buttons-group-label'
					defaultValue='female'
					name='radio-buttons-group'
					style={style.Box}
					onChange={handleRadioChange}
				>
					<FormControlLabel
						style={style.FormControlLabel}
						value='1'
						control={<Radio />}
						label='Nyo'
						checked={groups === '1'}
					/>
					<FormControlLabel
						style={style.FormControlLabel}
						value='2'
						control={<Radio />}
						label='Khin'
						checked={groups === '2'}
					/>
					<FormControlLabel
						style={style.FormControlLabel}
						value='3'
						control={<Radio />}
						label='May'
						checked={groups === '3'}
					/>
					<FormControlLabel
						style={style.FormControlLabel}
						value='4'
						control={<Radio />}
						label='Aung'
						checked={groups === '4'}
					/>
				</RadioGroup>
			</Box>
			{/* <FormControl> */}
			{/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}

			{/* </FormControl> */}
		</Box>
	);
}

const style = {
	Box: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		margin: '20px',
	},
	FormControl: {
		// display: 'flex',
		// justifyContent: 'space-between'
	},
	// RadioGroup: {
	// 	display: 'flex',
	// 	justifyContent: 'space-around'
	// },
	FormControlLabel: {
		background: 'rgba(184, 53, 235, 0.445)',
		padding: '5px 10px 5px 7px',
		borderRadius: '10px',
	},
};

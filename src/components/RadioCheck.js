import {
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	Box
} from '@mui/material';

export default function RadioCheck(){
	return <Box >
	<Box sx={{ display: 'flex', justifyContent: 'center', width: { xs: '100%', sm: '90%', md: '60%' }, margin: 'auto' }}>
		<RadioGroup
			row
			aria-labelledby="demo-radio-buttons-group-label"
			defaultValue="female"
			name="radio-buttons-group"
			style={style.Box}
		>
					<FormControlLabel style={style.FormControlLabel} value="Nyo" control={<Radio />} label="Nyo" />
					<FormControlLabel style={style.FormControlLabel} value="Khin" control={<Radio />} label="Khin" />
					<FormControlLabel style={style.FormControlLabel} value="May" control={<Radio />} label="May" />
					<FormControlLabel style={style.FormControlLabel} value="Aung" control={<Radio />} label="Aung" />
		</RadioGroup>
	</Box>
		{/* <FormControl> */}
				{/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}


			{/* </FormControl> */}
	</Box>
}

const style = {
	Box: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		margin: '20px'
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
	}
}
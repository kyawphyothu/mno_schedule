import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
	Box,
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';

import { getPublicHolidayByYear } from '../assets/PublicHolidayFnc';
import { Months } from '../assets/Months';

const years = [2023, 2024, 2025];

export default function PublicHoliday({ shiftEvents }) {
	const [yearForPublicHolidayTable, setyearForPublicHolidayTable] =
		useState(2023);
	const [publicHoliday, setPublicHoliday] = useState([]);
	const [tableData, setTableData] = useState([]);

	const handleChangeYear = e => {
		setyearForPublicHolidayTable(e.target.value);
	};

	const createRow = () => {
		const rows = [];
		publicHoliday.map(h => {
			shiftEvents.map(s => {
				if (
					s.start <= h.start &&
					h.start <= s.end &&
					s.title !== 'OFF'
				) {
					switch (s.title) {
						case 'DayShift':
							if (s.start <= h.start && h.start < s.end) {
								rows.push({
									holidayTitle: h.title,
									shift: s.title,
									color: 'green',
									date: h.start,
									month: new Date(h.start).getMonth(),
									ot: 1,
								});
							}
							break;
						case 'NightShift':
							rows.push({
								holidayTitle: h.title,
								shift: s.title,
								color: 'blue',
								date: h.start,
								month: new Date(h.start).getMonth(),
								ot:
									h.start === s.start || h.start === s.end
										? 0.5
										: s.start < h.start && h.start < s.end
										? 1
										: 0,
								fl:
									h.start === s.start
										? 'last'
										: h.start === s.end
										? 'first'
										: 'all',
							});
							break;
						default:
							break;
					}
				}
			});
		});

		setTableData(rows);
	};

	useEffect(() => {
		setPublicHoliday(getPublicHolidayByYear(yearForPublicHolidayTable));
	}, [yearForPublicHolidayTable]);

	useEffect(() => {
		createRow();
	}, [shiftEvents, publicHoliday]);

	return (
		<Box
			sx={{
				marginTop: '10px',
				padding: '10px',
				maxWidth: '1500px',
				margin: '0 auto',
				marginBottom: '40px'
			}}
		>
			{console.log({ shiftEvents: shiftEvents })}
			{console.log({ publicHoliday: publicHoliday })}
			{console.log({ tableData: tableData })}
			<FormControl sx={{ marginBottom: '30px' }}>
				<InputLabel id='demo-simple-select-label'>Year</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={yearForPublicHolidayTable}
					label='Age'
					onChange={handleChangeYear}
				>
					{years.map(year => (
						<MenuItem key={year} value={year}>
							{year}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>PublicHoliday - (date) </TableCell>
							<TableCell align='right'>Morning 5.5h</TableCell>
							<TableCell align='right'>Evening 5.5h</TableCell>
							<TableCell align='right'>OT</TableCell>
							<TableCell align='right'>Monhly(OT)</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{tableData.map((row, index, tableData) => (
							<>
								{index > 0 && tableData[index - 1]['month'] !== tableData[index]['month'] ? (
									<TableRow key={tableData[index - 1]['month']} >
										<TableCell
											component='th'
											scope='row'
											colSpan={4}
											style={{ fontWeight: 'bold' }}
										>
											Total OT for{' '}
											{
												Months[tableData[index - 1]['month']]
											}
										</TableCell>
										<TableCell component='th' scope='row' align='right'>
											{(() => {
												let result = 0;
												tableData.forEach((td) => {
													if (
														td.month === tableData[index - 1].month
													) {
														result += td.ot;
													}
												});
												return result;
											})()}
										</TableCell>
									</TableRow>
								) : (
									''
								)}
								<TableRow
									key={row.start}
									sx={{
										'&:last-child td, &:last-child th': {
											border: 0,
										},
									}}
								>
									<TableCell component='th' scope='row'>
										{row.holidayTitle} - ({row.date})
									</TableCell>
									{row.shift === 'DayShift' ? (
										<>
											<TableCell align='right'>
												<span
													style={{
														background: row.color,
														color: 'white',
														padding: '3px 5px',
														borderRadius: '10px',
													}}
												>
													{row.shift}
												</span>
											</TableCell>
											<TableCell align='right'>
												<span
													style={{
														background: row.color,
														color: 'white',
														padding: '3px 5px',
														borderRadius: '10px',
													}}
												>
													{row.shift}
												</span>
											</TableCell>
										</>
									) : (
										<>
											<TableCell align='right'>
												{row.fl === 'all' ||
												row.fl === 'first' ? (
													<span
														style={{
															background:
																row.color,
															color: 'white',
															padding: '3px 5px',
															borderRadius:
																'10px',
														}}
													>
														{row.shift}
													</span>
												) : (
													''
												)}
											</TableCell>
											<TableCell align='right'>
												{row.fl === 'all' ||
												row.fl === 'last' ? (
													<span
														style={{
															background:
																row.color,
															color: 'white',
															padding: '3px 5px',
															borderRadius:
																'10px',
														}}
													>
														{row.shift}
													</span>
												) : (
													''
												)}
											</TableCell>
										</>
									)}
									<TableCell align='right'>
										{row.ot}
									</TableCell>
								</TableRow>
								{ index === tableData.length-1 ? (
									<>
										<TableRow key={tableData[index]['month']} >
											<TableCell
												component='th'
												scope='row'
												colSpan={4}
												style={{ fontWeight: 'bold' }}
											>
												Total OT for{' '}
												{
													Months[tableData[index]['month']]
												}
											</TableCell>
											<TableCell component='th' scope='row' align='right' style={{ fontWeight: 'bold' }}>
												{(() => {
													let result = 0;
													tableData.forEach((td) => {
														if (
															td.month === tableData[index].month
														) {
															result += td.ot;
														}
													});
													return result;
												})()}
											</TableCell>
										</TableRow>
										<TableRow key="total" >
											<TableCell
												component='th'
												scope='row'
												colSpan={4}
												style={{ fontWeight: 'bold', fontSize: '1.2em' }}
											>
												Total OverTime
											</TableCell>
											<TableCell component='th' scope='row' align='right' style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
												{(() => {
													let result = 0;
													tableData.forEach((td) => {
														result += td.ot;
													});
													return result+" Days";
												})()}
											</TableCell>
										</TableRow>
									</>
								) : (
									''
								)}
							</>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}

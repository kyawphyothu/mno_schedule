import FullCalendar from '@fullcalendar/react';
import multiMonthPlugin from '@fullcalendar/multimonth'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import { Box } from '@mui/material';

export default function Home() {
	return (
		<Box sx={{ marginTop: '10px', padding: '10px', maxWidth: '1500px', margin: '0 auto' }}>
			<FullCalendar
				plugins={[dayGridPlugin, timeGridPlugin, multiMonthPlugin]}
				headerToolbar={{
					left: 'prev,next today',
					center: 'title',
					right: 'multiMonthYear,dayGridMonth,timeGridWeek',
				}}
				initialView='dayGridMonth'
				initialDate={new Date()}
				editable={false}
				selectable={false}
				selectMirror={true}
				dayMaxEvents={true}
				// weekends={this.state.weekendsVisible}
				// initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
				// select={this.handleDateSelect}
				// eventContent={renderEventContent} // custom render function
				// eventClick={this.handleEventClick}
				// eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
				/* you can update a remote database when these fire:
				eventAdd={function(){}}
				eventChange={function(){}}
				eventRemove={function(){}}
				*/
			/>
		</Box>
	);
}

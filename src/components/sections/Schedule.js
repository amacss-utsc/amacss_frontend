import React from 'react';
import styled from 'styled-components';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendar from '@fullcalendar/google-calendar'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import {Container, Section} from '@components/global';

import '@styles/dog.css';
import '@styles/shit.css';
import '@styles/cat.css';

const exposedApiKey = "AIzaSyCb02sStRI4-i35sG2UMchOrs7pKDBrLq0";
const events = 'j2addbd8s2an3stvbasq1hjitc@group.calendar.google.com';

class Schedule extends React.Component {

    constructor(props) {
        super(props);
        this.isMobile = window.innerWidth < 500;
    }

    render() {
        return (<Section id="schedule">
            <Container>
                <div>
                    <FullCalendar
                        defaultView={this.isMobile ? "timeGridDay" : "timeGridWeek"}
                        header={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'timeGridWeek,timeGridDay,listWeek'
                        }}
                        scrollTime='8:00:00'
                        plugins={[dayGridPlugin, googleCalendar, timeGridPlugin, interactionPlugin]}
                        events={events}
                        googleCalendarApiKey={exposedApiKey}
                        weekends={false}
                        eventRender={function (info) {
                            let location = info.event.extendedProps.location || "area 51";
                            let node = document.createElement("span");
                            node.innerText = location;
                            info.el.appendChild(node)
                        }}
                    />
                </div>
            </Container>
        </Section>)
    }
}

export default Schedule;

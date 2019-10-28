import React from 'react';
import styled from 'styled-components';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendar from '@fullcalendar/google-calendar'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import { Calendar, OptionsInput } from '@fullcalendar/core';

import {Container, Section} from '@components/global';

import '@styles/dog.css';
import '@styles/shit.css';
import '@styles/cat.css';

const location = "https://goo.gl/maps/hL7Vs5zgmBAbn1dp8";
const exposedapikey = "AIzaSyCb02sStRI4-i35sG2UMchOrs7pKDBrLq0";
const events = 'j2addbd8s2an3stvbasq1hjitc@group.calendar.google.com';

class Schedule extends React.Component {

  constructor(props){
    super(props);
    this.isMobile = window.innerWidth < 500;
  }

  render(){
    return(<Section id="schedule">
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
                          googleCalendarApiKey={exposedapikey}
                          weekends={false}
                          eventRender={function(info) {
                            var location = info.event.extendedProps.location || "area 51"
                            var node = document.createElement("span")
                            node.innerText = location
                            info.el.appendChild(node)}}
                />
            </div>
        </Container>
    </Section>)
  }
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
    props.inverse &&
    `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default Schedule;

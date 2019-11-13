import React from 'react';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';

import {Container, Section} from '@components/global';

import Loadable from 'react-loadable'

const exposedApiKey = "AIzaSyCb02sStRI4-i35sG2UMchOrs7pKDBrLq0";
const events = 'j2addbd8s2an3stvbasq1hjitc@group.calendar.google.com';

const Calendar = Loadable({
    loader: () => import('@components/common/Calendar/Fcalendar'),
    loading() {
        return <div>Loading Calendar!</div>
    },
});


class Schedule extends React.Component {

  componentDidMount() {
    this.isMobile = window.innerWidth < 500;
  }

  render(){
    return(<Section id="schedule">
        <Container>
          <FadeIn delay='200'>
            <Calendar isMobile = {this.isMobile}
              api = {exposedapikey}
              events = {events}/>
          </FadeIn>
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

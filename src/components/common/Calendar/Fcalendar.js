import React from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendar from '@fullcalendar/google-calendar'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import { Calendar, OptionsInput } from '@fullcalendar/core';

import '@styles/dog.css';
import '@styles/shit.css';
import '@styles/cat.css';

export default class Fcalendar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <FullCalendar
                  defaultView={this.props.isMobile ? "timeGridDay" : "timeGridWeek"}
                  header={{
                      left: 'prev,next today',
                      center: 'title',
                      right: 'timeGridWeek,timeGridDay,listWeek'
                  }}
                  scrollTime='8:00:00'
                  plugins={[dayGridPlugin, googleCalendar, timeGridPlugin, interactionPlugin]}
                  events={this.props.events}
                  googleCalendarApiKey={this.props.api}
                  weekends={false}
                  eventRender={
                    function(info) {
                      var location = info.event.extendedProps.location || "area 51"
                      var node = document.createElement("span")
                      if(location.includes("404")){
                        info.el.style.backgroundColor = "green";
                        info.el.style.borderColor = "green";
                      }
                      node.innerText = location
                      info.el.appendChild(node)}
                    }
        />
    );
  }
}

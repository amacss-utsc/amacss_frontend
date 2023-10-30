import React from "react";
import styled from "styled-components";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendar from "@fullcalendar/google-calendar";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { Container, Section } from "../../data/global";

import "@styles/dog.css";
import "@styles/shit.css";
import "@styles/cat.css";

const exposedApiKey = "AIzaSyDDf0zzkqS4fWJDHBwFbKxPquyri4yMSU0";
const events =
  "https://calendar.google.com/calendar/u/0?cid=YW1hY3NzLnVvZnRAZ21haWwuY29t";
//const events = 'j2addbd8s2an3stvbasq1hjitc@group.calendar.google.com';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.isMobile = window.innerWidth < 500;
  }

  render() {
    return (
      <Section id="schedule">
        <Container>
          <div>
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FToronto&showNav=1&title=AMACSS%20UTSC%20Calendar&showCalendars=1&src=YW1hY3NzLnVvZnRAZ21haWwuY29t&src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043"
              width="800"
              height="600"
              frameborder="0"
              scrolling="yes"
            ></iframe>
            {
              //   <FullCalendar
              //     defaultView={this.isMobile ? "timeGridDay" : "timeGridWeek"}
              //     header={{
              //       left: "prev,next today",
              //       center: "title",
              //       right: "timeGridWeek,timeGridDay,listWeek",
              //     }}
              //     plugins={[
              //       dayGridPlugin,
              //       googleCalendar,
              //       timeGridPlugin,
              //       interactionPlugin,
              //     ]}
              //     events={events}
              //     googleCalendarApiKey={exposedApiKey}
              //     weekends={false}
              //     eventRender={function (info) {
              //       let location = info.event.extendedProps.location || "area 51";
              //       let node = document.createElement("span");
              //       node.innerText = location;
              //       info.el.appendChild(node);
              //     }}
              //   />
            }
          </div>
        </Container>
      </Section>
    );
  }

  //   render() {
  //     return (
  //       <Section id="schedule">
  //         <Container>
  //           <div>
  //             <FullCalendar
  //               defaultView={this.isMobile ? "timeGridDay" : "timeGridWeek"}
  //               header={{
  //                 left: "prev,next today",
  //                 center: "title",
  //                 right: "timeGridWeek,timeGridDay,listWeek",
  //               }}
  //               scrollTime="8:00:00"
  //               plugins={[
  //                 dayGridPlugin,
  //                 googleCalendar,
  //                 timeGridPlugin,
  //                 interactionPlugin,
  //               ]}
  //               events={events}
  //               googleCalendarApiKey={exposedApiKey}
  //               weekends={false}
  //               eventRender={function (info) {
  //                 let location = info.event.extendedProps.location || "area 51";
  //                 let node = document.createElement("span");
  //                 node.innerText = location;
  //                 info.el.appendChild(node);
  //               }}
  //             />
  //           </div>
  //         </Container>
  //       </Section>
  //     );
  //   }
}

export default Schedule;

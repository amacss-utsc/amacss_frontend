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

  constructor(props) {
    super(props);
    this.isMobile = window.innerWidth < 500;
}

  render(){
    return(<Section id="schedule">
        <Container>
          <FadeIn delay='200'>
            <Calendar isMobile = {this.isMobile}
              api = {exposedApiKey}
              events = {events}/>
          </FadeIn>
        </Container>
    </Section>)
  }
}

export default Schedule;

import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Team from '@sections/Team';
// import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

import {
    ACADEMICS_TEAM,
    EVENTS_TEAM,
    EXECUTIVE_TEAM,
    FIRST_YEAR_TEAM,
    MARKETING_TEAM,
    FINANCE_TEAM,
    TECH_TEAM
} from '../../data/teams_data_2018'

var items = {
    "Executive Team": EXECUTIVE_TEAM,
    "Academics Team": ACADEMICS_TEAM,
    "Events Team": EVENTS_TEAM,
    "Tech Team": TECH_TEAM,
    "Marketing Team": MARKETING_TEAM,
    "Finance Team": FINANCE_TEAM,
    "First Year Representatives": FIRST_YEAR_TEAM
}

const TeamPage = () => (
    <Layout>
        <Navbar/>
        <Team items={items} />
        <Footer/>
    </Layout>
);

export default TeamPage;

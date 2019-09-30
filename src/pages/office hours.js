import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Schedule from '@sections/Schedule';
import Footer from '@sections/Footer';

const OfficeHoursPage = () => (
    <Layout>
        <Navbar/>
        <Schedule/>
        <Footer/>
    </Layout>
);

export default OfficeHoursPage;

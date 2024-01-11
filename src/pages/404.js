import {Container} from '../data/global';


import React from 'react';
import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Footer from '@sections/Footer';

const NotFoundPage = () => (
    <Layout>
        <Navbar/>
                <Container>
                    <div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h1>Not Found</h1>
                        <p>Unfortunately the URL you entered does not exist.</p>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </Container>
        <Footer/>
    </Layout>
);

export default NotFoundPage;

import {Container} from '@components/global';


import React from 'react';
import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Footer from '@sections/Footer';

const NotFoundPage = () => (
    <Layout>
        <Navbar/>
        <Layout>
            <section>
                <Container>
                    <div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h1>Not Found</h1>
                        <p>Unfortunately the URL you entered does not exist.</p>
                    </div>
                </Container>
            </section>
        </Layout>
        <Footer/>
    </Layout>
);

export default NotFoundPage;

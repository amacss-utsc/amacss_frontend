import { Container } from '@components/global';


import React from 'react';
import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Header from '@sections/Header';
import About from '@sections/About';
import Signup from '@sections/Signup';
import Team from '@sections/Team';
import Contact from '@sections/Contact';
import Footer from '@sections/Footer';
import styled from 'styled-components';

const NotFoundPage = () => (
  <Layout>
    <Navbar/>
    <Layout>
      <section>
        <Container>
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>NOT FOUND</h1>
            <p>Unfortunately the URL you entered does not exist.</p>
          </div>
        </Container>
      </section>
    </Layout>
    <Footer/>
  </Layout>
);

export default NotFoundPage;

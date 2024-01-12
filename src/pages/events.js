import React from "react";
import { graphql } from "gatsby";

import Loadable from "react-loadable";

import Layout from "@common/Layout";
import Navbar from "@common/Navbar";
import Footer from "@sections/Footer";

const Calendar = Loadable({
  loader: () => import("../components/sections/Schedule"),
  loading() {
    return <div>Loading Calendar!</div>;
  },
});

const OfficeHoursPage = ({ data }) => (
  <Layout>
    <Navbar />
    <Calendar />
    <Footer />
  </Layout>
);

export default OfficeHoursPage;

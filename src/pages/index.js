import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>frontend.how</h1>
    <small>coming soon</small>
  </Layout>
);

export default IndexPage;

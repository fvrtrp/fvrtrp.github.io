import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import '../styles/index.scss';

export default function IndexPage() {

  return (
    <Layout page="home">
      <SEO title="Home" />
    </Layout>
  );
}
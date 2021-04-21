import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Background from '../components/background';
import '../styles/index.scss';

export default function IndexPage() {

  return (
    <Layout>
      <SEO title="Home" />
      <Background />
    </Layout>
  );
}
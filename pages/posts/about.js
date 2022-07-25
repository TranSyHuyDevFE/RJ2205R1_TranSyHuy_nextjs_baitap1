import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";
export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>
      <h1>About US</h1>
    </Layout>
  );
}

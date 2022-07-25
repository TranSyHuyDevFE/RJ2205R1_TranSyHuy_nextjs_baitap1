import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog" />
      </Head>
      <h1>Blog</h1>
    </Layout>
  );
}

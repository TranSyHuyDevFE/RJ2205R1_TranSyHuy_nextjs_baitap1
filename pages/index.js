import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description" content="homepage" />
      </Head>
      <h1>Home Page</h1>
    </Layout>
  );
}

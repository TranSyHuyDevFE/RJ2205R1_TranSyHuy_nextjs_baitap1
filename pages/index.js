import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getStudents } from "./mock-data/data";
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description" content="homepage" />
      </Head>
      <h1>Home Page</h1>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {getStudents().map((student) => (
            <tr className={styles.tr} key={student.id}>
              <td className={styles.td}>{student.id}</td>
              <td className={styles.td}>{student.name}</td>
              <td className={styles.td}>
                <Link href={`/posts/${encodeURIComponent(student.id)}`}>
                  <a>Show</a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

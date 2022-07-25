import { useRouter } from "next/router";
import Head from "next/head";
const Student = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Head>
        <title>Detail Student</title>
        <meta name="description" content="Detail" />
      </Head>
      <h2>Student Information</h2>
      <p>Student: {id}</p>
    </div>
  );
};

export default Student;

import React from "react";
import Head from "next/head";
import styles from "../../styles/Login.module.css";
import { useRouter } from "next/router";
export default function Login() {
  const router = useRouter();
  const handleClickLogin = () => {
    router.push({
      pathname: "/",
    });
  };
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login" />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.formContent}>
          <h2>Login</h2>
          <form>
            <input
              className={styles.input}
              type="text"
              id="login"
              name="login"
              placeholder="login"
            />
            <input
              className={styles.input}
              type="text"
              id="password"
              name="login"
              placeholder="password"
            />
            <button
              type="button"
              className={styles.button}
              onClick={handleClickLogin}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

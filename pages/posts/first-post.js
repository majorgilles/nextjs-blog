import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

const first_post = "First post";
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>{first_post}</title>
      </Head>
      <h1>{first_post}</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}

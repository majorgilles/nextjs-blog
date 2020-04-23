import Head from "next/head";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export default function Post({
  postData,
}: {
  postData: { title: string; date: string; contentHtml: string };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = params.id as string;
  const postData = await getPostData(postId);
  return {
    props: {
      postData,
    },
  };
};

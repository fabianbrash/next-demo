import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


/*
** REF:https://scotch.io/tutorials/easily-deploy-a-fullstack-nextjs-app-with-vercel
*/


export default function Home({
  title = "My awesome Next Demo App",
  metaContent = "Generic SEO pitch",
  copy = "I'm having writer's block."
}) {

  return (
    <>
    <Head>
      <title>{title}</title>
      <meta content={metaContent} />
    </Head>
    <div>
      <h1>{title}</h1>
      <p>{copy}</p>
      <Link href="/hello-user-agent"><a>UserAgent</a></Link>
    </div>
  </>
  );
}

export const getStaticProps = async () => {

  return {
    props: {
      title: "My Amazing Startup",
      metaContent: "Amazing SEO poetry",
      copy: "I'm in the business of making people smile. That's all I'm here for and to make some mulah!!",
    },
    revalidate: 1, //number of seconds to wait before revalidating
  };
};

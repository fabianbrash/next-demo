import Head from 'next/head'
import Link from 'next/link'

export default function HelloUserAgent({
     userAgent = "Nobody"
}) {

    return (

        <>
         <Head>
             <title>Hello User Agent!</title>
         </Head>
         <p>
             {" "}
             Hi <em>{userAgent}</em> !{" "}
         </p>
         <p>
             <Link href="/"><a>Home</a></Link>
         </p>
        </>
    );
}

export const getServerSideProps = async ({ req }) => {

    return {
        props: {
            userAgent: req.headers["user-agent"],
        },
    };
};

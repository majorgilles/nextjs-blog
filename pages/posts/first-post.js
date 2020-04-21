import Head from 'next/head'
import Link from 'next/link'

const first_post = "First post"
export default function FirstPost() {
    return (
        <>
        <Head>
    <title>{first_post}</title>
        </Head>
        <h1>{first_post}</h1>
        <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </h2>
        </>
    )
}
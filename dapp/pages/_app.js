import Head from "next/head"
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>{Component.title}</title>
        <meta name="description" content="ICO-Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

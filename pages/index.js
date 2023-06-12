import { Inter } from 'next/font/google'
import Home from 'components/home/Home.js'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export default function home() {
  return (
    <>
        <Head>
            <title>Venkata Bhaskar | Developer</title>
            <meta name="description" content="Bleep boop" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <Home />
    </>
  )
}

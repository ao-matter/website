import { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
//STYLES
//FONT
import { Lato } from '@next/font/google'
const lato = Lato({ subsets: ['latin'], weight: '400' })
//NEXT
import Head from 'next/head'
import NavFooterLayout from '@/layouts/NavFooterLayout'

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Bk Law Firm home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={"text-3xl " + lato.className}>ABOUT</h1>
      </main>
    </>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <NavFooterLayout>{page}</NavFooterLayout>
}

export default About

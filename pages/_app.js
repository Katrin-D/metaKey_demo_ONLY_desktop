import '../styles/globals.scss'
import '../styles/swiper.css'
import React from 'react'
import Head from 'next/head'
import ScrollProvider from '../components/providers/ScrollProvider'

function MyApp({ Component, pageProps }) {
  return (
    <ScrollProvider>
      <Head>
        <title>METAKEY</title>
      </Head>
      <Component {...pageProps} />
    </ScrollProvider>
  )
}

export default MyApp

import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import GlobalStyles from 'styles/global'
import { StickyNote } from 'components/StickyNote'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/placeholder.png" />
        <link rel="apple-touch-icon" href="/img/placeholder.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <meta property="og:title" content="Bluis Trips" />
        <meta property="og:url" content="https://bluis-trips.vercel.app/" />
        <meta
          property="og:description"
          content="Um mapa de todos os locais onde fui"
        />
        <meta property="og:image" content="/img/placeholder.png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta name="theme-color" content="#06092B" />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNprogress
        color="#d4023e"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
      <StickyNote>
        <p>
          Powered by <a href="https://github.com/brunolbahiense">Bluis</a>
        </p>
      </StickyNote>
    </>
  )
}

export default App

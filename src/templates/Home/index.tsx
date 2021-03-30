import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Bluis Trips"
        description="A WorldMap presenting the places that I've visited in my life"
        canonical="https://bluis-trips.brunolbahiense.com.br"
        openGraph={{
          url: 'https://bluis-trips.brunolbahiense.com.br',
          title: 'Bluis Trips',
          description:
            "A WorldMap presenting the places that I've visited in my life",
          images: [
            {
              url:
                'https://bluis-trips.brunolbahiense.com.br/img/placeholder.svg',
              width: 1280,
              height: 720,
              alt: 'Bluis Trips'
            }
          ],
          site_name: 'Bluis Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}

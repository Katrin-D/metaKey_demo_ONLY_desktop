import PropTypes from 'prop-types'
import React from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Landing from '../components/Landing'
import TheKey from '../components/TheKey'
import Cta1 from '../components/Cta1'
import WhatCanIDO from '../components/WhatCanIDo'
import Investors from '../components/Investors'
import EditionsSupply from '../components/EditionsSupply'
import { useScroll } from '../components/providers/ScrollProvider'
import WhatIsAMetaKey from '../components/WhatIsAMetakey'
import TutorialsBlock from '../components/TutorialsBlock'
import ComingSoon from '../components/ComingSoon'
import WhereWeAre from '../components/WhereWeAre'
import EcosystemSupport from '../components/EcosystemSupport'
import Cta2 from '../components/Cta2'
import Partners from '../components/Partners'
import BrandCases from '../components/BrandCases'
import Metakrew from '../components/Metakrew'
import Cta3 from '../components/Cta3'
import Metaverse from '../components/Metaverse'
import Statistics from '../components/Statistics'
import Testamonials from '../components/Testamonials'
import Cta4 from '../components/Cta4'
import TheTeam from '../components/TheTeam'
import Footer from '../components/Footer'

/**
 * WorkingRange component
 * @param {Array<number>} r range
 * @param {*} children
 * @returns {null|*}
 */
const WR = ({ r, children }) => {
  const { top } = useScroll()
  const [start, end] = r

  if (top >= start && top < end) {
    return children
  } else {
    return null
  }
}

WR.propTypes = {
  r: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default function Home() {
  const { top } = useScroll()
  const router = useRouter()

  return (
    <div className={styles.rootContainer}>
      <div className={styles.deepSpace} style={{ transform: `translateY(${-top * 0.2}px)` }} />
      <div className='firstPart'>
        <Header />
        <WR r={[0, 1300]}>
          <Landing />
        </WR>
        <WR r={[0, 3200]}>
          <TheKey />
        </WR>
        <WR r={[1300, 3400]}>
          <Cta1 />
        </WR>
        <WR r={[2200, 4600]}>
          <WhatIsAMetaKey />
        </WR>
        <WR r={[2400, 4600]}>
          <TutorialsBlock />
        </WR>
      </div>
      <WR r={[3500, 8300]}>
        <WhatCanIDO />
      </WR>
      <WR r={[7000, 9160]}>
        <Investors />
      </WR>
      <WR r={[7700, 11100]}>
        <EditionsSupply />
      </WR>
      <WR r={[9700, 11900]}>
        <ComingSoon />
      </WR>
      <WR r={[10626, 12700]}>
        <WhereWeAre />
      </WR>
      <WR r={[11400, 13500]}>
        <EcosystemSupport />
      </WR>
      <WR r={[12300, 14700]}>
        <Cta2 />
        <Partners />
      </WR>
      <WR r={[13200, 16700]}>
        <BrandCases />
      </WR>
      <WR r={[15400, 17300]}>
        <Metakrew />
      </WR>
      <WR r={[16069, 18470]}>
        <Cta3 />
        <Metaverse />
      </WR>
      <WR r={[17270, 19770]}>
        <Statistics />
        <Testamonials />
      </WR>
      <WR r={[17270, 20400]}>
        <Cta4 />
      </WR>
      <WR r={[19270, 21370]}>
        <TheTeam />
      </WR>
      <Footer />
    </div>
  )
}

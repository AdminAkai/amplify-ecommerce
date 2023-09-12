import { FC } from 'react'

import Grid from 'src/components/Grid'

import { GridItems } from './lib'
import {
  LandingPageConstruction,
  LandingPageContainer,
  LandingPageLogo,
  LandingPageSubtext,
  LandingPageSubtitle,
  LandingPageTitle,
} from './styledComponents'

const Landing: FC = () => {
  return (
    <LandingPageContainer>
      <LandingPageLogo>
        <LandingPageTitle>Adminis</LandingPageTitle>
        <LandingPageSubtext>
          <LandingPageSubtitle>Administrate you.</LandingPageSubtitle>
          <LandingPageConstruction>
            Under Construction &nbsp;(・-・)7
          </LandingPageConstruction>
        </LandingPageSubtext>
      </LandingPageLogo>
      <Grid gridItems={GridItems} />
    </LandingPageContainer>
  )
}

export default Landing

import React from 'react';
import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
  MjmlStyle,
  MjmlText
} from 'mjml-react';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const EmailTest = () => {
  const name = '{name}'

  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>Last Minute Offer</MjmlTitle>
        <MjmlPreview>Last Minute Offer...</MjmlPreview>
      </MjmlHead>
      <MjmlBody width={600}>
        <Header />
        <MjmlSection>
          <MjmlColumn>
            <MjmlText align='center'><a href="/">{name}</a></MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn>
            <MjmlButton padding="20px" backgroundColor="#346DB7" href="https://www.wix.com/">
              This Yet Another Template
            </MjmlButton>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn>
            <MjmlText align='center'><a href="/">Go Test</a></MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <Footer />
      </MjmlBody>
    </Mjml>
  );
}

import React from 'react';
import { readFileSync } from 'fs';

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

export const Footer = () => {
  return (
    <MjmlSection padding='32px' backgroundColor='#F2F3F5'>
      <MjmlColumn>
        <MjmlText color='#6C727A' fontSize='12px' lineHeight='16px' padding='0' fontFamily='Arial' align='center'>Checkout our <a href='#'>blog</a></MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
};

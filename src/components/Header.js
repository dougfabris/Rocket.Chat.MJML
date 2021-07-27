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

const colors = {
  blue: '#1D74F5'
}

export const Header = () => {
  return (
    <MjmlSection backgroundUrl='' backgroundRepeat='no-repeat' backgroundPosition='top right' padding='40px 32px' backgroundColor={colors.blue}>
      <MjmlColumn>
        <MjmlImage width='137' src='' />
      </MjmlColumn>
    </MjmlSection>
  );
};

exports.header = ({ title }) => `
<mj-section background-url='https://github.com/dougfabris/Rocket.Chat.MJML/blob/main/template/img/pattern-header.png?raw=true' background-repeat='no-repeat' background-position='top right' background-position='center center' padding='40px 32px' background-color='#1D74F5'>
  <mj-column width='80%'>
    <mj-image padding='0' width='136px' align='left' src='https://github.com/dougfabris/Rocket.Chat.MJML/blob/main/template/img/rc-logo-wh.png?raw=true' />
    
    <mj-text padding-top='30px' padding='0' font-family='Arial' font-size='38px' line-height='43.7px' color='white'>
      ${ title }
    </mj-text> 
    
    <mj-text padding-top='30px' padding='0' font-family='Arial' font-size='16px' line-height='18.4px' color='white'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </mj-text>
  </mj-column>
  
  <mj-column width='20%'></mj-column>
</mj-section>
`;

exports.footer = () => `
  <mj-section padding='32px' background-color='#F2F3F5'>
    <mj-column>
      <mj-text color='#6C727A' font-size='12px' line-height='16px' padding='0' font-family='Arial' align='center'>Checkout our <a href='#'>blog</a></mj-text>
    </mj-column>
  </mj-section>
`;
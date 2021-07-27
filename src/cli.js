import path from 'path'
import fs from 'fs';
import { render } from 'mjml-react';

import { EmailTest } from './templates/EmailTest/EmailTest';

const pathToHtmlEmailTemplate = path.join(__dirname, 'templates/EmailTest');

console.log(pathToHtmlEmailTemplate)
const { html } = render(EmailTest(), { validationLevel: 'soft' });

fs.writeFile(`${pathToHtmlEmailTemplate}/index.html`, html, function(err) {
  if (err) throw err;
  console.log('HTML file created');
});

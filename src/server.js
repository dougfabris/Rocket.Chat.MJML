import path from 'path'
import express from 'express';
import { render } from 'mjml-react';
import mjmlUtils from 'mjml-utils'

const port = 3000;
const app = express();

const pathToHtmlEmailTemplate = path.join(__dirname, './templates/EmailTest/index.html');

app.get('*', (req, res) => {
  mjmlUtils.inject(pathToHtmlEmailTemplate, {
    name: '<strong>MAIOR TESTAR</strong>',
    profileURL: 'https://app.com/bob',
  })
  .then(finalTemplate => {
    res.send(finalTemplate);
    // finalTemplate is an HTML string containing the template with all occurrences
    // of `{name}` replaced with "bob", and all occurrences of `{profileURL}`
    // replaced with "https://app.com/bob".
  })
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

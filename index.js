var fs = require('fs');
var mjml2html = require('mjml');
var template = require('./template');

/*
  Compile an mjml string
*/

const mjmlSyntax = `
  <mjml>
    <mj-body width='600px'>
      ${template.header({ title: 'Ut enim ad minim! Nostrud exercitation' })}
      ${template.footer()}
    </mj-body>
  </mjml>
`;

const htmlOutput = mjml2html(mjmlSyntax, { minify: true });

/*
  Print the responsive HTML generated and MJML errors if any
*/

// console.log(htmlOutput)

fs.writeFile('index.mjml', mjmlSyntax, function(err) {
  if (err) throw err;
  console.log('MJML file created');
});

fs.writeFile('index.html', htmlOutput.html, function(err) {
  if (err) throw err;
  console.log('HTML file created');
});

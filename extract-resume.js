const fs = require('fs');
const pdfParse = require('pdf-parse');

const pdfPath = './public/resume.pdf';
const fileBuffer = fs.readFileSync(pdfPath);

pdfParse(fileBuffer).then(data => {
  console.log(data.text);
}).catch(err => {
  console.error('Error parsing PDF:', err);
});

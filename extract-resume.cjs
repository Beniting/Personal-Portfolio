const fs = require('fs');
const pdfjsLib = require('pdfjs-dist');

const pdfPath = './public/resume.pdf';
const fileBuffer = fs.readFileSync(pdfPath);

async function extractText() {
  try {
    const pdf = await pdfjsLib.getDocument(new Uint8Array(fileBuffer)).promise;
    let text = '';
    
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map(item => item.str).join(' ');
      text += pageText + '\n';
    }
    
    console.log(text);
  } catch (err) {
    console.error('Error:', err);
  }
}

extractText();

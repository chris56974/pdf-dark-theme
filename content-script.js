let darkPdfDivStyles = `
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  background-color: #bfbfbf;
  mix-blend-mode: difference;
  z-index: 1; 
`;

let darkPdfDiv = document.createElement('div');
darkPdfDiv.setAttribute("style", darkPdfDivStyles);
document.body.appendChild(darkPdfDiv)
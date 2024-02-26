import React, { useEffect, useState } from "react";
import {latexcgi} from './runlatex.js'
import { useSelector } from "react-redux";


function PdfHighlighter({ showAskVal }) {
  const [pdf, setPdf] = useState(false);
  const latexCode = useSelector((state) => state.latex.latex);
  console.log(latexCode);

  useEffect(() => {
    // window.location.reload();
  
  }, [latexCode])

  return (
    <>
      <div className={showAskVal ? 'chatbot-pdf' : 'pdf-viewer-ask-val-collapse'}>
        <div class="h" style={{color : "black"}}>
          <pre>
            {latexCode}
          </pre>
        </div>
        <button onClick={() => latexcgi("pre0",`${latexCode} \\end{document}`)} style={{color : "black"}}>Click me</button>
      </div>
    </>
  );
}

export default PdfHighlighter;

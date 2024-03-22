import React, { useEffect, useState } from "react";
import {latexcgi} from './runlatex.js'
import { useSelector } from "react-redux";
import { Button } from "antd";


function PdfHighlighter({ showAskVal }) {
  const [pdf, setPdf] = useState(false);
  const latexCode = useSelector((state) => state.latex.latex);

  // useEffect(() => {
  //   if(latexCode !== null){
  //     latexcgi("pre0",`${latexCode} \\end{document}`)
  //   }
  // }, [latexCode])

  return (
    <>
      <div className={showAskVal ? 'chatbot-pdf' : 'pdf-viewer-ask-val-collapse'}>
        <div class="h" style={{color : "black"}}>
          <pre>
            {latexCode}
          </pre>
        </div>
     
        <Button onClick={() => latexcgi("pre0",`${latexCode} \\end{document}`)} size="large" style={{color:"wheat"}}> 
        Generate PDF
        </Button>
        
      </div>
    </>
  );
}

export default PdfHighlighter;

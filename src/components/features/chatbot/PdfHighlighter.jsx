import React, { useEffect, useState } from "react";
import {latexcgi} from './runlatex.js'
import { useSelector } from "react-redux";
import { Button } from "antd";


function PdfHighlighter({ showAskVal }) {
  const [pdf, setPdf] = useState(false);
  const latexCode = useSelector((state) => state.latex);
  const [latex, setLatex] = useState("");
  useEffect(() => {
    
    const latexx = `
      ${latexCode.format}
      ${latexCode.heading}
      ${latexCode.educaation}
      ${latexCode.experience}
      ${latexCode.skills}
      ${latexCode.certifications}
      ${latexCode.projects}
      ${latexCode.achievements}

    `
    setLatex(latexx);
    

    
  
  }, [latexCode]);
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
            {latex}
          </pre>
        </div>
     
        <Button onClick={() => latexcgi("pre0",`${latex} \\end{document}`)} size="large" style={{color:"wheat"}}> 
        Generate PDF
        </Button>
        
      </div>
    </>
  );
}

export default PdfHighlighter;

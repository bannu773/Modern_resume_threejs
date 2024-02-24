import React, { useEffect ,useState} from "react";



function PdfHighlighter({ latexCode,setLatexCode ,showAskVal}) {
  
 useEffect(() => {
  // window.location.reload();
 },[latexCode])
 
  return (
    <>
   
        <div className={showAskVal ? 'chatbot-pdf' : 'pdf-viewer-ask-val-collapse'}>
        <div class="h">
                <pre>
                    {latexCode}
                </pre>
            </div>
        </div>
      
    </>
  );
}

export default PdfHighlighter;

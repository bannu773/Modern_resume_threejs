import { useState, useEffect } from 'react';
import Chats from './Chats';
import { useNavigate } from 'react-router-dom';
import './Chatbot.scss'
import PdfHighlighter from './PdfHighlighter';
import Trail from '../../Trail';


function Chatbot() {
 
    const [latexCode, setLatexCode] = useState(String.raw`
    

    \documentclass[letterpaper,11pt]{article}
  
    \usepackage{latexsym}
    \usepackage[empty]{fullpage}
    \usepackage{titlesec}
    \usepackage{marvosym}
    \usepackage[usenames,dvipsnames]{color}
    \usepackage{verbatim}
    \usepackage{enumitem}
    \usepackage[hidelinks]{hyperref}
    \usepackage{fancyhdr}
    \usepackage[english]{babel}
    \usepackage{tabularx}
    \usepackage{fontawesome5}
    \usepackage{multicol}
    \setlength{\multicolsep}{-3.0pt}
    \setlength{\columnsep}{-1pt}
    \input{glyphtounicode}
    
    
    % % ----------FONT OPTIONS----------
    % % sans-serif
    % \usepackage[sfdefault]{FiraSans}
    % \usepackage[sfdefault]{roboto}
    % \usepackage[sfdefault]{noto-sans}
    % \usepackage[default]{sourcesanspro}
    
    % % serif
    % \usepackage{CormorantGaramond}
    % \usepackage{charter}
    
    
    \pagestyle{fancy}
    \fancyhf{} % clear all header and footer fields
    \fancyfoot{}
    \renewcommand{\headrulewidth}{0pt}
    \renewcommand{\footrulewidth}{0pt}
    
    % Adjust margins
    \addtolength{\oddsidemargin}{-0.6in}
    \addtolength{\evensidemargin}{-0.5in}
    \addtolength{\textwidth}{1.19in}
    \addtolength{\topmargin}{-.7in}
    \addtolength{\textheight}{1.4in}
    
    \urlstyle{same}
    
    \raggedbottom
    \raggedright
    \setlength{\tabcolsep}{0in}
    
    % Sections formatting
    \titleformat{\section}{
      \vspace{-4pt}\scshape\raggedright\large\bfseries
    }{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]
    
    % Ensure that generate pdf is machine readable/ATS parsable
    \pdfgentounicode=1
    
    %-------------------------
    % Custom commands
    \newcommand{\resumeItem}[1]{
      \item\small{
      {#1 \vspace{-2pt}}
      }
    }
    
    \newcommand{\classesList}[4]{
      \item\small{
          {#1 #2 #3 #4 \vspace{-2pt}}
      }
    }
    
    \newcommand{\resumeSubheading}[4]{
      \vspace{-2pt}\item
      \begin{tabular*}{1.0\textwidth}[t]{l@{\extracolsep{\fill}}r}
        \textbf{#1} & \textbf{\small #2} \\
        \textit{\small#3} & \textit{\small #4} \\
      \end{tabular*}\vspace{-7pt}
    }
    
    \newcommand{\resumeSubSubheading}[2]{
      \item
      \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
        \textit{\small#1} & \textit{\small #2} \\
      \end{tabular*}\vspace{-7pt}
    }
    
    \newcommand{\resumeProjectHeading}[1]{
        \item
        \begin{tabular*}{\textwidth}{@{}p{\textwidth}@{}}
          \small#1 \\
        \end{tabular*}\vspace{-7pt}
    }
    
    \newcommand{\resumeSubItem}[1]{\resumeItem{#1}\vspace{-4pt}}
    
    \renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}
    \renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}
    
    \newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.0in, label={}]}
    \newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
    \newcommand{\resumeItemListStart}{\begin{itemize}}
    \newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}
    
    %-------------------------------------------
    %%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%
    
    
    \begin{document}
  
    
      `);
    

    const [showAskVal, setShowAskVal] = useState(true);



    const [path, setFilePath] = useState('');

    return (
        <div>
            {/* <div style={{ textAlign: 'end' }}>
                <Button type='primary'
                    style={{ height: 'inherit', padding: 2 }}
                    >
                        <Popconfirm title="Sure to go back?" onConfirm={goBack}>
                        <LeftSquareOutlined /> Go Back</Popconfirm></Button>
            </div> */}
            <div className="chatbot-container">
                <div className={showAskVal ? 'chatbot-chat' : 'chatbot-pdf-ask-val-collapse'}>
                    <Chats showAskVal={showAskVal} setShowAskVal={setShowAskVal} setLatexCode = {setLatexCode} latexCode={latexCode}/>
                </div>

            
                <PdfHighlighter latexCode={latexCode} setLatexCode = {setLatexCode}/>
                <Trail latexCode={latexCode}/>

            </div>
        </div>
    )
}

export default Chatbot
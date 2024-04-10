import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    messages : [
      {"role": "user", "content": "Assume you're a resume builder and have to generate LaTeX code  along with section heading whenever a user asks for it."},
      {
          "role" : "user",
          "content" : "I would like to provide you with a specific format assume it is the standard format of the resume that you have create.  Then you can start making resume using that standard format"
      },
      
        {"role": "user", "content": String.raw`
        <latex>
        
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
\linespread{1.0}
          </latex>
        `},
        {"role" : "user", "content" : `When generating code, adhere to the following format:

      1. Wrap the generated code within <latex> tags, as shown below:
        <latex>''Insert code in this Tag''</latex>

    `},
    
        {"role" : "user" , "content" : "Assume the generated latex code will follow the standard format, It initially consists of the above standard format code ."},
        {"role": "system", "content": "I will ask the user to enter details for each section. This is the order for the sections:"},
         {"role": "system", "content": "1. Heading - This includes name, city, state, phone number, email, LinkedIn, GitHub, LeetCode account, GeekforGeeks account link, and portfolio link."},
        {"role": "system", "content": "2. Education - This section consists of education details."},
        {"role": "system", "content": "3. Experience - This is the section where you will mention internships and previous job experience."},
        {"role": "system", "content": "4. Projects"},
        {"role": "system", "content": "5. Achievements"},
        {"role": "system", "content": "6. Certificates"},
        {"role": "system", "content": "7. Technical Skills"},
        {"role" : "system", "content" : `I will ask the user like
        For example, let's consider the Heading Section of your resume. I will ask like :

        1. Full Name,
        2. City,
        3. State,
        4. Phone Number,
        5. Email,
        6. Linkedin,
        7. Github,
        ... (Continue listing any additional information needed)
        
        `},
        {"role": "user", "content": "Okay, that sounds great."},
        
        {"role" : "user" , "content" : "I will provide you with a template use that"},
        {"role" : "user" , "content" :String.raw`
        <latex>
    
    \begin{document}
    \linespread{1.0}
    %----------HEADING----------
    
    
    \begin{center}
        {\Huge \scshape Bandi Hemanth} \\ \vspace{1pt}
        Palakollu, Andhra Pradesh \\ \vspace{1pt}
    
        \small \raisebox{-0.1\height}\faPhone\ +91 7731023599 ~ \href{mailto:bandihemanth7731@gmail.com}{\raisebox{-0.2\height}\faEnvelope\  \underline{bandihemanth7731@gmail.com}} ~
        \href{https://www.linkedin.com/in/bandi-hemanth-835280211}{\raisebox{-0.2\height}\faLinkedin\ \underline{linkedin.com/in/bandi-hemanth}}
        \href{https://github.com/bannu773}{\raisebox{-0.2\height}\faGithub\ \underline{github.com/bannu773}} \newline
        \vspace{-3pt}
        \href{https://leetcode.com/bandibannu773/}{\raisebox{-0.2\height}\faCode\ \underline{Leetcode - bandi hemanth}}
        \href{https://auth.geeksforgeeks.org/user/bandibannu773}{\raisebox{-0.2\height}\faCode\ \underline{GeekForGeeks - bandi hemanth}}
        \href{https://hemanth-portfolio-phi.vercel.app/}{\raisebox{-0.2\height}\faCode\ \underline{Portfolio - bandi hemanth}}
        \vspace{-8pt}
        \vspace{0pt}
    \end{center}
    
    
    
    %-----------EDUCATION-----------
    \section{Education}
      \resumeSubHeadingListStart
        \resumeSubheading
        {Aditya Institute of Technology and Mangement}{August 2020 - June 2024}
        {Bachelor of Technology in Computer Science(CGPA of 9.56)}{Srikakulam, India}
      \resumeSubHeadingListEnd
    
    
    %-----------EXPERIENCE-----------
    \section{Experience}
      \resumeSubHeadingListStart
        \resumeSubheading
        {Cyient}{June 2023 - August 2023}
        {Software Development Engineer Intern}{Hyderabad, India}
        \resumeItemListStart
            \resumeItem{
            Collaborative effort in developing a platform for \textbf{Managing employee information}, incorporating essential features like \textbf{OAuth} access and onboarding pages using \textbf{Firebase and React JS} and positively impacting
    employee productivity.}
            \resumeItem{Implemented \textbf{Automatic value} calculations based on employee input, improving \textbf{Data reporting accuracy}.}
        \resumeItemListEnd
         \resumeSubheading
        {Arum Innovations}{April 2023 - May 2023}
        {Android Development Intern}{Hyderabad, India}
        \resumeItemListStart
            \resumeItem{Led the development of a cutting-edge \textbf{Home Automation App }using \textbf{Flutter}. Gathered user feedback and improved the app's usability with the product team.}
                \resumeItem{Designed and implemented the interface, utilizing \textbf{Flutter's Provider} for efficient Data passing between components.}
                \resumeItem{Implemented \textbf{Dark, Light, and Gradient Themes}, with \textbf{Automatic} detection of the \textbf{System Theme}. }
        \resumeItemListEnd
    
      \resumeSubHeadingListEnd
    \vspace{-16pt}
    
    %-----------PROJECTS-----------
    \section{Projects}
    
    \resumeSubHeadingListStart
    \resumeProjectHeading
    {\href{https://whatsapp-clone-rho-nine.vercel.app/}{\textbf{Real-Time Chat Application (WhatsApp Clone)}} $|$ \emph{React JS, Node JS, Express JS, MongoDB, Google OAuth, Socket.io}}
    \resumeItemListStart
      \resumeItem{Developed an \textbf{intuitive interface} facilitating the addition of contacts, fostering seamless \textbf{Real-time interactions.}}
      \resumeItem{Utilized \textbf{Socket.io} to \textbf{dynamically} track user \textbf{Online/Offline status,} enhancing the overall user experience.}
      \resumeItem{Acquired proficiency in creating \textbf{stable APIs} and writing \textbf{structured code}, contributing to increased productivity.}
    \resumeItemListEnd
    \resumeSubHeadingListEnd
    
    
    \resumeSubHeadingListStart
    \resumeProjectHeading
      {\href{google collab}{\textbf{E-Commerce Website (Flipkart Clone)}} $|$ \emph{HTML, CSS, JavaScript, React, Node.js, Express JS, MongoDB}}
      \resumeItemListStart
        \resumeItem{ Implemented user-friendly interfaces for features such as \textbf{product listing}, \textbf{search, and product details}.}
         \resumeItem{Implemented user \textbf{Authentication}, \textbf{shopping cart functionality}, and seamless \textbf{order processing}.}
        \resumeItem{Implemented a \textbf{secure payment gateway} and developed a\textbf{ robust backend }with \textbf{Node.js} and \textbf{MongoDB.}}
      \resumeItemListEnd
    \resumeSubHeadingListEnd
    
    \resumeSubHeadingListStart
    \resumeProjectHeading
      {\href{https://hackaton-final-puce.vercel.app/}{\textbf{AVISHKAAR}} $|$ \emph{HTML, CSS, JavaScript, Parallax, Animation, Gradient Design, React-parallax-scroll}}
      \resumeItemListStart
        \resumeItem{Collaboratively Led a team to create a captivating \textbf{Parallax website} for a college hackathon using \textbf{React-parallax-scroll}.}
        \resumeItem{Crafted an Interactive Timeline and Implemented Captivating \textbf{Gradient Designs }Appeals the Overall Website.}
        \resumeItem{Developed \textbf{Animated Cards} with \textbf{Neon }Effects, Adding a Dynamic Element to Effectively Engage Participants.}
      \resumeItemListEnd
    \resumeSubHeadingListEnd
    
    
    %-----------Achievements-----------
    \section{Achievements}
    \begin{itemize}[label=$\bullet$, left=0.15in, labelsep=0.5em, itemsep=-3pt]
        \item Achieved the \textbf{63rd All India Rank} in \textbf{CodeKaze} (2023), Coding Ninjas with over \textbf{200,000+} participants.
        \item Secured an \textbf{All India Rank of 476} at Coding Ninjas' competition, among more than \textbf{1 lakh} participants.
        \item Attained \textbf{College Rank 1}, demonstrating excellence in the Coding Ninjas' competition within the college.
        \item \textbf{Mentored} and \textbf{guided} aspiring programmers, significantly improving their coding skills and their abilities.
        \item Solved \textbf{900+ DSA} questions on (GFG and Leetcode)
        \item Awarded a \textbf{T-Shirt} from \textbf{GeeksforGeeks} for consistent problem-solving efforts.
        \item Achieved \textbf{College Rank 1} in the Hour Storm coding competition.
    \end{itemize}
    \vspace{-16pt}
    
    
    
    
    %-----------CERTIFICATES-----------
    \section{Certificates}
    \resumeSubHeadingListStart
      \resumeSubheading
        {Web Development - Internshalla }{Oct 2022}
        {Udemy}{Online}
      % \resumeSubheading
      %   {Data Science Specialization - Johns Hopkins University}{December 2022}
      %   {Coursera}{Online}
    \resumeSubHeadingListEnd
    %-----------PROGRAMMING SKILLS-----------
    \section{Technical Skills}
     \begin{itemize}[leftmargin=0.15in, label={}]
        \small{\item{
        \textbf{Languages}{: C++, Python, Java, C , HTML/CSS, JavaScript} \\
        \textbf{Frontend}{: ReactJS, Redux, Node Js, Express Js BOOTSTRAP, TAILWIND CSS, Material UI, Material Table, ReactStrap } \\
            \textbf{Database}{: SQL, MongoDB, Firebase} \\
            \textbf{Android}{: FLUTTER, Bloc} \\
            \textbf{Developing Tools}{: Git, Visual Studio Code, Android Studio} \\
    
    
        }}
     \end{itemize}
     \vspace{-16pt}
    
    \end{document}Name
    </latex>
    
        ` },
        {
          "role" : "user",
          "content" : "I have provided the standard format code starting after \begin{document}. Begin by asking for the heading section. After generating the heading section generate the latex code."
        },
        {
          "role" : "user",
          "content" : "Upon completion of each section, such as the Heading Section, you are required to generate the corresponding LaTeX code. For instance, when the user finishes providing details for the Heading Section, promptly generate the LaTeX code capturing the entered information. Repeat this process for each section the user completes. "
        },
        {
          "role" : "system",
          "content" : "your having Standard Format Code Start generating Code After \begin{document}"
        },
        {
          "role" : "user",
          "content" : "Please follow my Template and ask the user about each thing when user starts interacting."
        },
        {
          "role" : "user",
          "content" : "Remember to generate the LaTeX code for each section as the user completes  it, generate the code without asking the user when he completes giving the instrctions and ensure that you follow the previous instructions.  or when users asks to generate latex code generate the code without asking the user."
        },
        {
          "role" : "user",
          "content" : "This is very important Instruction when you generate the latex code if it consists any special characters or symbols then you have to use the '/' before the special character or symbol to avoid errors. you must ensure it has only 10 dashes in the comments section." 
        }
        
      ],
};

const MsgSlice = createSlice({
    name : "msgs",
    initialState,
    reducers : {
        addmsg :(state,action) => {

            state.messages = [
                ...state.messages,
                {
                    "role" : action.payload.query.role,
                    "content" : action.payload.query.content,
                }
            ];
        }
    },
    
})

export const {addmsg} = MsgSlice.actions;
export default MsgSlice.reducer;
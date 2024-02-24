import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import OpenAI from 'openai';


const initialState = {
  queryResponse: {},
  error: "",
  status: "idle",
};



const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true
   // This is also the default, can be omitted
});

// Define the function that returns a promise
// const fetchData = (msgs) => {
//   return new Promise((resolve, reject) => {
//     const interval = 1000;
//     let intervalId;
//     let query = msgs.msgs[msgs.msgs.length - 1];
//     let value = "Reply is " + query.content;
//     let response = {
//       "role" : "system",
//       "content" : value
//     }
//     intervalId = setInterval(() => {
      
//       clearInterval(intervalId);
//       resolve(response);
//     }, interval);
//   });
// };

export const sendQuerydata = createAsyncThunk(
  "senddata/sendQuerydata",
  async (msgs, _thunkApi) => {
    try {
      // let response = await openai.createChatCompletion({ 
        
      //   model: "gpt-3.5-turbo-1106",
      //   temperature: 0,
      //   // max_tokens: 4000,
      //   messages: msgs,
      // });
      // console.log(response);
      // console.log(msgs)

      // const chatCompletion = await openai.chat.completions.create({
      //   model: "gpt-3.5-turbo-1106",
      //   messages: msgs.msgs,
      // });
      // console.log(chatCompletion.choices[0].message);
      
      // return chatCompletion.choices[0].message;

      return {
        role : "ASSISTANT",
        content : String.raw`
        '''latex
      \begin{center}
	{\Huge \scshape Bandi Hemanth} \\ \vspace{1pt}
	Palakollu, Andhra Pradesh \\ \vspace{1pt}
 
	\small \raisebox{-0.1\height}\faPhone\ +91 7731023599 ~ \href{mailto:bandihemanth7731@gmail.com}{\raisebox{-0.2\height}\faEnvelope\  \underline{bandihemanth7731@gmail.com}} ~
	\href{https://www.linkedin.com/in/bandi-hemanth-835280211}{\raisebox{-0.2\height}\faLinkedin\ \underline{linkedin.com/in/bandi-hemanth}}
 \href{https://github.com/bannu773}
 {\raisebox{-0.2\height}\faGithub\ \underline{github.com/bannu773}} \newline
\vspace{-3pt}
 \href{https://leetcode.com/bandibannu773/}{\raisebox{-0.2\height}\faCode\ \underline{Leetcode - bandi hemanth}}
  \href{https://auth.geeksforgeeks.org/user/bandibannu773}{\raisebox{-0.2\height}\faCode\ \underline{GeekForGeeks - bandi hemanth}}
  \href{https://hemanth-portfolio-phi.vercel.app/}{\raisebox{-0.2\height}\faCode\ \underline{Porfolio - bandi hemanth}}
	\vspace{-8pt}
	\vspace{-8pt}
\end{center}
'''`}
    } catch (error) {
      throw error;
    }
  }
);

export const sendQuerySlice = createSlice({
  name: "sendQuery",
  initialState,
  reducer: {
    clearQuery: (state) => {
      state.status = "idle";
      state.error = null;
      state.queryResponse = {};
    },
  },
  extraReducers(builder) {
    builder
      .addCase(sendQuerydata.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(sendQuerydata.fulfilled, (state, action) => {
        state.status = "success";
        state.queryResponse = action.payload;
      })
      .addCase(sendQuerydata.rejected,(state,action) => {
        state.status = "failed";
        state.error = action.error.message ? action.error.message : null;
      })
  },
});

export const { clearQuery } = sendQuerySlice.actions;

export default sendQuerySlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import OpenAI from 'openai';
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyAsahyXnw17arfV-uIdnzM8AsgnZAC9bF4");

const initialState = {
  queryResponse: {},
  error: "",
  status: "idle",
  isTyping :false
};


const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
  // This is also the default, can be omitted
});


export const sendQuerydata = createAsyncThunk(
  "senddata/sendQuerydata",
  async (msgs, _thunkApi) => {
    const chats = [];
    try {
      ///////////////////////////////////////////////////// Chat GPT ////////////////////////////////////////////////////

      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-1106",
        messages: msgs.msgs,
        temperature: 0,
      });
      console.log(chatCompletion.choices[0].message);

      return chatCompletion.choices[0].message;


      ///////////////////////////////////////////////////// GEMINI PRO ////////////////////////////////////////////////////


      // console.log("Starting chat")
      // const chat = model.startChat({
      //   history: msgs.msgs,
      //   generationConfig: {
      //     // maxOutputTokens: 100,
      //     temperature: 0.9,
      //     topP: 0.1,
      //     topK: 16,
      //   },
      // });

      // console.log("Chat started",chat.history)
      // const msg = "How many paws are in my house?";

      // const result = await chat.sendMessage(msg);
      // const response = await result.response;
      // const text = response.text();
      // console.log(text);
      // return text
      // console.log(msgs.msgs);

      // const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      // const chat = model.startChat({
      //   history: msgs.msgs,
      //   generationConfig: {
      //     // maxOutputTokens: 100,
      //     temperature: 0.9,
      //     topP: 0.1,

      //   },
      // });

      // const prompt = "Write a story about a magic backpack."

      // const result = await model.generateContent(prompt);
      // const response = await result.response;
      // const text = response.text();
      // console.log(text);
      // return {content : text}

      /////////////////// testing ///////////////////////////////////////////////////////

      //       return {
      //         role : "ASSISTANT",
      //         content : String.raw`

      //       \begin{center}
      // 	{\Huge \scshape Bandi Hemanth} \\ \vspace{1pt}
      // 	Palakollu, Andhra Pradesh \\ \vspace{1pt}

      // 	\small \raisebox{-0.1\height}\faPhone\ +91 7731023599 ~ \href{mailto:bandihemanth7731@gmail.com}{\raisebox{-0.2\height}\faEnvelope\  \underline{bandihemanth7731@gmail.com}} ~
      // 	\href{https://www.linkedin.com/in/bandi-hemanth-835280211}{\raisebox{-0.2\height}\faLinkedin\ \underline{linkedin.com/in/bandi-hemanth}}
      //  \href{https://github.com/bannu773}
      //  {\raisebox{-0.2\height}\faGithub\ \underline{github.com/bannu773}} \newline
      // \vspace{-3pt}
      //  \href{https://leetcode.com/bandibannu773/}{\raisebox{-0.2\height}\faCode\ \underline{Leetcode - bandi hemanth}}
      //   \href{https://auth.geeksforgeeks.org/user/bandibannu773}{\raisebox{-0.2\height}\faCode\ \underline{GeekForGeeks - bandi hemanth}}
      //   \href{https://hemanth-portfolio-phi.vercel.app/}{\raisebox{-0.2\height}\faCode\ \underline{Porfolio - bandi hemanth}}
      // 	\vspace{-8pt}
      // 	\vspace{-8pt}
      // \end{center}
      // `}
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
        state.isTyping = true
      })
      .addCase(sendQuerydata.fulfilled, (state, action) => {
        state.status = "success";
        state.queryResponse = action.payload;
        state.isTyping = false
      })
      .addCase(sendQuerydata.rejected, (state, action) => {
        state.isTyping = true;
        state.status = "failed";
        state.error = action.error.message ? action.error.message : null;
        state.isTyping = false
      })
  },
});

export const { clearQuery } = sendQuerySlice.actions;

export default sendQuerySlice.reducer;

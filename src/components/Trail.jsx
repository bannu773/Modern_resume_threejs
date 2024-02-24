import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const Trail = ({latexCode}) => {
    const formData =  new FormData();

  const finish = (values) => {
    formData.append("filecontents[]",latexCode)
    console.log(values);
    formData.append("filename[]","document.tex");
    formData.append("engine","pdflatex");
    formData.append("return","pdfjs");
    axios({
        url: "https://texlive.net/cgi-bin/latexcgi",
        method : "POST",
        data : formData,
        headers : {
            'Content-Type': 'multipart/form-data'
        }
    }).then(response => {
        console.log('Post request successful:', response.data);
        // Handle the response data here
      })
      .catch(error => {
        console.error('Error making post request:', error);
        // Handle any errors here
      });
    console.log(formData);

    // You can handle the form submission here
  };

  return (
    <div>
        <p onClick={()=>finish(latexCode)} style={{color : "black"}}>Clockme</p>
      
    </div>
  );
}

export default Trail;
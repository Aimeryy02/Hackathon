import React,{useState, Component} from 'react'
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import './App.css';


import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

export const App = () => {

  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const chemin = "C:/Users/thoma/Documents/";
  // for onchange event
  const [pdfFile, setPdfFile]=useState(null);
  const [pdfFile2, setPdfFile2]=useState(null);
  const [pdfFileError, setPdfFileError]=useState('');

  // for submit event
  const [viewPdf, setViewPdf]=useState(null);

  // onchange event
  var selectedFile ;
  const fileType=['application/pdf'];
  const handlePdfFileChange=(e)=>{
    let selectedFile=e.target.files[0];
  


    if(selectedFile){
      if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            setPdfFile2(selectedFile.name);
            reader.onloadend = (e) =>{
              setPdfFile(e.target.result);
              setPdfFileError('');
            }
      }
      else{
        setPdfFile(null);
        setPdfFileError('Please select valid pdf file');
      }
    }
    
    else{
      console.log('select your file');
    }
  }
  

  // form submit
  const handlePdfFileSubmit=(e)=>{
    e.preventDefault();
    if(pdfFile!==null){
      setViewPdf(pdfFile);
    }
    else{
      setViewPdf(null);
    }
  }

 
//ocr
  return (
    

    <div className='container'>

    

    <br></br>
    <div className="Selection">
      <h1 className="pdf"> Selection de PDF</h1>
    </div>
    
      <form className='form-group' onSubmit={handlePdfFileSubmit}>
        <input type="file" className='form-control' id="input"
          required onChange={handlePdfFileChange}
        />
        {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}
        <br></br>

        <div className="test">
        <button className="arr" type="submit" >
          <a className="textUpload">Télécharger un fichier PDF </a></button>

        </div>

          
        

      </form>
      <br></br>
      <h4 className="viewPDF">View PDF</h4>
      <div className='pdf-container'>
        {/* show pdf conditionally (if we have one)  */}
        {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={viewPdf}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}

      {/* if we dont have pdf or viewPdf state is null */}
      {!viewPdf&&<>No pdf file selected</>}
      </div>

    <h1 className="Split">Quelle partie souhaitez-vous splitter ? </h1>


     <button type="submit" className="buttonTitre1 ">
        partie 1
      </button>

      <button type="submit" className="buttonTitre2 ">
      partie 2
      </button>

      <button type="submit" className="buttonTitre3 ">
      partie 3
      </button>

      
    </div>
  )
}

export default App

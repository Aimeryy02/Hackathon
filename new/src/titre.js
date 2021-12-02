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

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

export const titre = () => {



//ocr
  return (
    

    <div className='container'>

    <br></br>
    
      <form className='form-group' >
        <input className='form-control' id="input"
          
        />
        
        <br></br>
        <button type="submit" className='btn btn-success btn-lg'>
          UPLOAD
        </button>
      </form>

      <button type="submit" className="buttonTitre ">
        titre 1
      </button>

      <button type="submit" className="buttonTitre ">
        titre 2
      </button>

      <button type="submit" className="buttonTitre ">
        titre 2
      </button>

      
    </div>
  )
}

export default titre

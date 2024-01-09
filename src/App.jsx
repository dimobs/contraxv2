import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Document, Page, View } from '@react-pdf/renderer'
// import Home from './components/Home/home';
import myPDF from './components/pdf/DocPDF';

function App() {
 
  return (
    <>
  {/* <Document> */}
    {/* <Page wrap> */}
      {/* <View wrap={false}> */}
       {/* <Home /> */}
      <myPDF />
      {/* </View> */}
    {/* </Page> */}
  {/* </Document> */}
  </>
  )
}

export default App
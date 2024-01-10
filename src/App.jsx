
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactForm from './components/pdf/DocPDF';
// import { Document, Page, View, PDFViewer, Text } from '@react-pdf/renderer'
// import Home from './components/Home/home';
import { PDFDownloadLink } from '@react-pdf/renderer';
function App() {
 
  return (
    <>
        {/* <PDFViewer width={"100%"} height={"600px"}> */}
  {/* <Document> */}
    {/* <Page size={"A4"} wrap> */}
      {/* <View wrap={false}> */}
       {/* <Home /> */}
       {/* <Text> */}
        {/* <PDFDownloadLink document={<DocPDF/>} fileName="ComNet.pdf">
        {({loading, url, error, blob}) => loading 
        ? (<button>Loading Document ...</button>)
      : (<button>Download now!</button>)
      }  */}
    <ReactForm />
    {/* </PDFDownloadLink> */}
      {/* </Text> */}
      {/* </View> */}
    {/* </Page> */}
  {/* </Document> */}
      {/* </PDFViewer> */}
  </>
  )
}

// return (
//   <printPDF />
// )
// }

export default App
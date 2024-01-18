import './App.css';
// import lake from "./image/lake.JPG";
import Header from './components/HeaderSection/Header';
import GallaryFooter from './components/footersection/GallaryFooter';
import Body from './components/bodysection/body';
import imageData from './components/Data/DataComponent';

function App() {
  return (
    <div>
      
      <Header/>
      <Body data={imageData}/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;

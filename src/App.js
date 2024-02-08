import React from "react"; 
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import LoadingPage from "./components/LoadingPage";
import ImageGalary from "./components/ImageGalary";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="" /> */}
          <Route path="/" element={<LoadingPage />}/>
          {/* {/* <Route path="/" Component={<LoadingPage/>}/> */}
          <Route path="/birthday/gallary" element={<ImageGalary />}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;

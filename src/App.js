
 import NavBar from './component/functionalComp/navBar';
 import About from './component/functionalComp/about';
 import Experience from './component/functionalComp/experience';
 import Login from './component/functionalComp/login';

// import TestpropComp from './component/functionalComp/propComp';
// import TeststateComp from './component/classComp/stateComp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" ></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/experience" element={< Experience/>}></Route>
      <Route path="/login" element={<Login/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

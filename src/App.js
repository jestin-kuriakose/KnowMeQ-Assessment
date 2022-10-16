import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Test2 from "./pages/Test2";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/test2start" element={<Test2/>}/>
          <Route path="/test/:testId" element={<TestPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/test" element={<TestPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import TestPage from "./pages/TestPage";
import TestResultsPage from "./pages/TestResultsPage";
import TestTwoStartPage from "./pages/TestTwoStartPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/test-2" element={<TestTwoStartPage/>}/>
          <Route path="/test/:testId" element={<TestPage/>}/>
          <Route path="/test-results" element={<TestResultsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

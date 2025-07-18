import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Login";
import About from "./About";
import Register from "./Register";
import Detail from "./deatail";
import Result from "./Result";
import InputData from "./components/InputData";
import FormRouter from './FormRouter';
import FormA from "./components/FormA";
import FormB from "./components/FormB";
import TaskList from "./components/TaskList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/detail" element={<Detail />}/>
        <Route path="/result" element={<Result />}/>
        <Route path="/formA" element={<FormA />}/>
        <Route path="/formB" element={<FormB />}/>
        <Route path="/InputData" element={<InputData />}/>
      </Routes>
      <FormRouter userId="demo" />
    </BrowserRouter>
    
  );
}

export default App;

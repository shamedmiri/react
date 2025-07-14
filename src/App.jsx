import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Login";
import About from "./About";
import Register from "./Register";
import Detail from "./deatail"
import Result from "./Result"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/detail" element={<Detail />}/>
        <Route path="/result" element={<Result />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

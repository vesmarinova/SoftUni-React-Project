import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Button } from "./components/ui/button";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

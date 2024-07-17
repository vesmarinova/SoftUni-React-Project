import AllPropertiesSale from "./components/allPropertiesSale/AllPropertiesSale";
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
          <Route path="/all-sale" element={<AllPropertiesSale/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

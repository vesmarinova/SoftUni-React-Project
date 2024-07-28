import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import AllPropertiesSale from "./components/allPropertiesSale/AllPropertiesSale";
import AllPropertiesRent from "./components/allPropertiesSale/allPropertiesRent/AllPropertiesRent";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/all-sale" element={<AllPropertiesSale/>}/>
          <Route path="/all-rent" element={<AllPropertiesRent/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

import React from "react";
import { toast } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<>App</>} />
        </Route>
        <Route path="products" element={<>Products</>}>
          {/* <Route path=":teamId" element={<Team />} /> */}
          <Route path="new" element={<>Products news</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

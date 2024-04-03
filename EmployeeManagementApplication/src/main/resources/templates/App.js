import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployeeComponent from "./component/AddEmployeeComponent";
import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import ListEmployeeComponent from "./component/ListEmployeeComponent";

function App() {
  return (
    <Router>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />} />
          <Route path="/add-employee" element={<AddEmployeeComponent />} />
          <Route path="/add-employee/:id" element={<AddEmployeeComponent />} />
        </Routes>
      </div>
      <FooterComponent />
    </Router>
  );
}

export default App;

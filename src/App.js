import React from "react";
import NavBar from "./components/Navbar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./App.css";

import PeriodTable from "./components/Periodic-Table";

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <NavBar />
        <PeriodTable />
      </div>
    </MuiThemeProvider>
  );
}

export default App;

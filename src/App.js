import React from "react";
import NavBar from "./components/Navbar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <NavBar />
      </div>
    </MuiThemeProvider>
  );
}

export default App;

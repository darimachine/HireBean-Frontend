
import './App.css'
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme";
import Router from "config/routes";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div>
        <Router/>
      </div>

    </ThemeProvider>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme";
import {Router} from "react-router";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div style={{minHeight: "100vh", backgroundColor: theme.palette.background.default}}>
        <Router/>
      </div>

    </ThemeProvider>
  )
}

export default App

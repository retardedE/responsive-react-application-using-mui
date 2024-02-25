import logo from "./logo.svg";
import "./App.css";
import { Stack, Box, ThemeProvider, Grid } from "@mui/material";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import { theme } from "./Components/theme";
import styled from "@emotion/styled";
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Grid container>
        <Grid item sm={2} xs={1.5}>
          <Sidebar/>
        </Grid>
        <Grid item sm={9.7} xs={10}>
          <Feed/>
        </Grid>
      </Grid>
    </ThemeProvider>

  );
}

export default App;

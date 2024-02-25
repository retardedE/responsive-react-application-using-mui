import logo from "./logo.svg";
import "./App.css";
import { Stack, Box, ThemeProvider } from "@mui/material";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";
import { theme } from "./Components/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Stack direction={'column'}>
      <Navbar />
      <Box display={'flex'} flexDirection={'row'}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Box>
    </Stack>      
    </ThemeProvider>

  );
}

export default App;

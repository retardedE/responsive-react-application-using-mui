import logo from "./logo.svg";
import "./App.css";
import { Stack, Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";

function App() {
  return (
    <Stack direction={'column'}>
      <Navbar />
      <Box display={'flex'} flexDirection={'row'}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Box>
    </Stack>
  );
}

export default App;

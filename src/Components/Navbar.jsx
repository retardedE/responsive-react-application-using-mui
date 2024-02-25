import {
  Cancel,
  Explicit,
  Logout,
  Mail,
  Notifications,
  PersonAdd,
  Settings,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import React, { useState } from "react";
import { alpha, theme, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
export default function Navbar() {
  const [anchorEl, setAnchor] = useState(false);    
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setAnchor(true);
  };
  const handleClose = () => {
    setAnchor(false);
  };
  const IconsContainer = styled(Box, open)(({ theme }) => ({
    [theme.breakpoints.down("sm")]:{
      display : open? "none":"flex"
    },
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
  }));
  const PageAppBar = styled(AppBar)(({ theme }) => ({
    position: "sticky",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
  }));
  const PageToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }));
  const PageLogo = styled("div")(({ theme }) => ({
    fontSize: "22px",
    fontWeight: "bold",
    color: "whitesmoke",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }));
  const PageLogoSM = styled("div")(({ theme }) => ({
    fontSize: "22px",
    fontWeight: "bold",
    color: "whitesmoke",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  const SearchIconWrapperSM = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  const Search = styled("div", open)(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    transition:'0.5s',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "30%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      display: open ? 'flex':'none',
      width:"60%"
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const CancelIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    right:'0',    
    cursor:'pointer',
    zIndex:'1000',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    display:'none',
    [theme.breakpoints.down("sm")]:{
      display:'flex'
    }
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "80ch",
      },
      [theme.breakpoints.down(1080)]: {
        width: "50ch",
      },
      [theme.breakpoints.down(800)]: {
        width: "28ch",
      },
      [theme.breakpoints.down(600)]: {
        width: "18ch",
      },
      [theme.breakpoints.down(350)]: {
        width: "8ch",
      },
    },
  }));
  console.log(open)
  return (
    <PageAppBar>
      <PageToolbar>
        <PageLogo>Retarded E</PageLogo>
        <PageLogoSM>RE</PageLogoSM>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <CancelIconWrapper>
            <Cancel onClick={() => setOpen(false)} />
          </CancelIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <IconsContainer>
          <Box display={"flex"} gap={0.5} mt={0.5}>
            <SearchIconWrapperSM>
              <SearchIcon
                onClick={() => {
                  setOpen(true);
                }}
              />
            </SearchIconWrapperSM>
            <Badge color="error" badgeContent={3}>
              <Mail />
            </Badge>
            <Badge color="error" badgeContent={5}>
              <Notifications />
            </Badge>
          </Box>
          <Avatar
            onClick={handleChange}
            sx={{ height: "30px", width: "30px" }}
            src="https://mui.com/static/images/avatar/1.jpg"
          />
        </IconsContainer>

      </PageToolbar>
    </PageAppBar>
  );
}

// sx: {
//               overflow: "visible",
//               filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
//               mt: 6,
//               "& .MuiAvatar-root": {
//                 width: 32,
//                 height: 32,
//                 ml: -0.5,
//                 mr: 1,
//               },
//               "&::before": {
//                 content: '""',
//                 display: "block",
//                 position: "absolute",
//                 top: 0,
//                 right: 14,
//                 width: 10,
//                 height: 10,
//                 bgcolor: "background.paper",
//                 transform: "translateY(-50%) rotate(45deg)",
//                 zIndex: 0,
//               },
//   ""           },

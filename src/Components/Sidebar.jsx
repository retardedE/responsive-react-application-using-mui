import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { styled, theme } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import {
  Camera,
  Collections,
  Drafts,
  Group,
  Home,
  List,
  Logout,
  Phone,
  Settings,
  Store,
  VideoCall,
} from "@mui/icons-material";

export default function Sidebar() {
  const PageSidebarList = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width:'100%',
    [theme.breakpoints.down(840)]: {
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      color: "white",
    },
  }));
  const ListItem = styled(Box)(({ theme }) => ({
    display: "flex",
    height: "70px",
    flexDirection: "row",
    gap: theme.spacing(1),
    justifyContent: "start",
    [theme.breakpoints.down(840)]: {
      justifyContent: "center",
    },
    padding: theme.spacing(0, 4),
    alignItems: "center",
    cursor: "pointer",
    [theme.breakpoints.up(840)]:{
    ":hover": {
      backgroundColor: theme.palette.primary.hoverFx,
    },      
    },
    transition: "0.2s",
    [theme.breakpoints.down(1100)]: {
      padding: theme.spacing(0, 2),
    },

  }));
  const ListIconWrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down(840)]: {
      color:'white',
    },
    color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));
  const ListTextWrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down(840)]: {
      display:'none'
    },
    color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));
  return (
    <Box bgcolor={'whitesmoke'} position={'fixed'}>
        <PageSidebarList>
          <ListItem>
            <ListIconWrapper>
              <Home/>
            </ListIconWrapper>
            <ListTextWrapper>
              <Typography mt={'2.5px'} fontWeight={'bold'}>
                Homepage
              </Typography>
            </ListTextWrapper>
          </ListItem>
          <ListItem>
            <ListIconWrapper>
              <Group/>
            </ListIconWrapper>
            <ListTextWrapper>
              <Typography mt={'2.5px'} fontWeight={'bold'}>
                Friends
              </Typography>
            </ListTextWrapper>
          </ListItem>
          <ListItem>
            <ListIconWrapper>
              <List/>
            </ListIconWrapper>
            <ListTextWrapper>
              <Typography mt={'2.5px'} fontWeight={'bold'}>
                Lists
              </Typography>
            </ListTextWrapper>
          </ListItem>
          <ListItem>
            <ListIconWrapper>
              <Camera/>
            </ListIconWrapper>
            <ListTextWrapper>
              <Typography mt={'2.5px'} fontWeight={'bold'}>
                Camera
              </Typography>
            </ListTextWrapper>
          </ListItem>
          <ListItem>
            <ListIconWrapper>
              <VideoCall/>
            </ListIconWrapper>
            <ListTextWrapper>
              <Typography mt={'2.5px'} fontWeight={'bold'}>
                Videos
              </Typography>
            </ListTextWrapper>
          </ListItem>
          <ListItem>
            <ListIconWrapper>
              <Phone/>
            </ListIconWrapper>
            <ListTextWrapper>
              <Typography mt={'2.5px'} fontWeight={'bold'}>
                Apps
              </Typography>
            </ListTextWrapper>
          </ListItem>
          <ListItem>
            <ListIconWrapper>
              <Collections/>
            </ListIconWrapper>
            <ListTextWrapper>
              <Typography mt={'2.5px'} fontWeight={'bold'}>
                Collections
              </Typography>
            </ListTextWrapper>
          </ListItem>
          <ListItem>
            <ListIconWrapper>
              <Store/>
            </ListIconWrapper>
            <ListTextWrapper>
              <Typography mt={'2.5px'} fontWeight={'bold'}>
                Market
              </Typography>
            </ListTextWrapper>
          </ListItem>
          <ListItem>
            <ListIconWrapper>
              <Settings/>
            </ListIconWrapper>
            <ListTextWrapper>
              <Typography mt={'2.5px'} fontWeight={'bold'}>
                Settings
              </Typography>
            </ListTextWrapper>
          </ListItem>
          <ListItem>
            <ListIconWrapper>
              <Logout/>
            </ListIconWrapper>
            <ListTextWrapper>
              <Typography mt={'2.5px'} fontWeight={'bold'}>
                Logout
              </Typography>
            </ListTextWrapper>
          </ListItem>
        </PageSidebarList>
      </Box>
  );
}

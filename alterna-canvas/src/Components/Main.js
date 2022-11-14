import React, {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import {Home, CalendarMonth, Notifications, EmojiEvents, Description} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Calendar from './Calendar';
import HomePage from './HomePage';
import NotificationsPage from './NotificationsPage';
import Rewards from './Rewards';
import Notes from './Notes';
import {FormControl, InputLabel, NativeSelect, Select, MenuItem} from '@mui/material';
import Course from './Course/Course';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function Main() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [component, setComponent] = useState('Home')

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [student, setStudent] = React.useState("Anna");

  const handleChange = (event) => {
    setStudent(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
          <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Alterna-Canvas
          </Typography>
          </div>
          <Box sx={{ minWidth: 120}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Student</InputLabel>
            <Select
              defaultValue={"Anna"}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={student}
              label="Student"
              onChange={handleChange}
              style={{"background": "white"}}
            >
              <MenuItem value={"Anna"}>Anna</MenuItem>
              <MenuItem value={"Keerthi"}>Keerthi</MenuItem>
              <MenuItem value={"Tom"}>Tom</MenuItem>
            </Select>
          </FormControl>
        </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'Calendar', 'Notifications', 'Rewards', 'Notes'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }} onClick={() => setComponent(text)}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index === 0 ? <Home /> : index === 1 ? <CalendarMonth/> : index === 2 ? <Notifications/> : index === 3 ? <EmojiEvents/> : <Description/>}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
        {
          component === 'Home' ?
          <HomePage student={student}/>
          :
          component === 'Calendar' ?
          <Calendar
          setComponent={setComponent}
           />
          :
          component === 'Notifications' ?
          <NotificationsPage />
          :
          component === 'Rewards' ?
          <Rewards />
          :
          component === 'Course' ?
          <Course />
          :
          component === 'Notes' ?
          <Notes />
          :
          <Home />
        }
    </Box>
  );
}

export default Main;
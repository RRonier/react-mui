import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

//------------------ICONS-------------------------------------------
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
//------------------ICONS-------------------------------------------
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TableRowsIcon from '@mui/icons-material/TableRows';
import TableChartIcon from '@mui/icons-material/TableChart';

import { ListSubheader } from '@mui/material';
const upperList = [
  { name: 'Transfers', icon: <SwapHorizIcon /> },
  { name: 'Activity', icon: <LocalOfferIcon /> },
  { name: 'Position', icon: <PieChartOutlineIcon /> },
  { name: 'Yield', icon: <ShowChartIcon /> },
  { name: 'Subscriptions', icon: <PendingActionsIcon /> },
  { name: 'Private Equity', icon: <BusinessOutlinedIcon /> }
]
const secondList = [
  { name: 'Personal Information', icon: <PersonOutlineIcon /> },
  { name: 'Economic Information', icon: <TableChartIcon /> },
  { name: 'Household', icon: <TableRowsIcon /> },
  { name: 'Vehicles', icon: <AccountTreeIcon /> },
  { name: 'Banc Accounts', icon: <AccountBalanceIcon /> }
]
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
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


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    backgroundColor: 'blue',
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

export default function MiniDrawer({ open, handleDrawerClose, handleDrawerOpen }) {
  const theme = useTheme();


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography variant="h6" noWrap component="div" sx={{
            width: '100%',
            marginLeft: 2,
            ...(!open && { display: 'none' }),
          }}>
            AQVA
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <KeyboardDoubleArrowRightIcon /> : <KeyboardDoubleArrowLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem key="Home" disablePadding sx={{ display: 'block' }}>
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
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List
          aria-labelledby="nested-list-subheader"
          component="nav"
          subheader={
            <ListSubheader sx={{ display: !open && "none" }} component="div" id="nested-list-subheader">
              YOUR ACCOUNT
            </ListSubheader>
          }
        >
          {upperList.map((element, index) => (
            <ListItem key={element.name} disablePadding sx={{ display: 'block' }}>
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
                  {element.icon}
                </ListItemIcon>
                <ListItemText primary={element.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List
          aria-labelledby="nested-list-subheader"
          component="nav"
          subheader={
            <ListSubheader sx={{ display: !open && "none" }} component="div">
              GENERAL INFORMATION
            </ListSubheader>
          }
        >
          {secondList.map((element, index) => (
            <ListItem key={element.name} disablePadding sx={{ display: 'block' }}>
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
                  {element.icon}
                </ListItemIcon>
                <ListItemText primary={element.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer >

    </Box >
  );
}
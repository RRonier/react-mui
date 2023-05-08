import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, Badge, IconButton, Stack, Typography, styled } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    position: 'relative',
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

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

export const Navbar = ({ open, handleDrawerOpen }) => {

    return (
        <AppBar position="fixed" open={open} color="inherit"
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
            <Toolbar>
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
                <Typography variant="h6" noWrap component="div"
                    sx={{
                        width: '100%',
                        ...(open && { display: 'none' }),
                    }}>
                    AQVA
                </Typography>
            </Toolbar>
            <Stack direction="row" spacing={1} sx={{
                alignItems: "center",
                mr: 2,
            }}>
                <IconButton>
                    <SearchOutlinedIcon />
                </IconButton>
                <IconButton>
                    <TranslateOutlinedIcon />
                </IconButton>
                {/* <IconButton>
            <LightModeOutlinedIcon />
          </IconButton> */}
                <IconButton>
                    <DarkModeOutlinedIcon />
                </IconButton>
                <IconButton>
                    <NotificationsNoneIcon />
                </IconButton>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </StyledBadge>
            </Stack>
        </AppBar>
    )
}
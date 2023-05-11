import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, Badge, IconButton, Stack, Typography, styled } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { NavbarColor } from '../../utils/types';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CustomMenu } from '../../components/shared/Menu';

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
    handleDrawerOpen?: () => void;
    color?: NavbarColor;
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    position: 'relative',
    width: "100%",
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

export const Navbar = ({ open, handleDrawerOpen, color = "inherit" }: AppBarProps) => {
    let isLoggedIn = localStorage.getItem('user');
    const [openMenu, setOpenMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setOpenMenu(false);
    };
    const handleLogout = () => {
        localStorage.clear()
        setAnchorEl(null);
        navigate('/');
    }
    const navigate = useNavigate()
    return (
        <AppBar position="fixed" open={open} color={color}
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
            <Toolbar>
                {localStorage.getItem("user") && <IconButton
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
                </IconButton>}
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
                {isLoggedIn && <IconButton>
                    <NotificationsNoneIcon />
                </IconButton>}
                {isLoggedIn ?
                    <IconButton>
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                                setAnchorEl(event.currentTarget)
                                setOpenMenu(true)
                            }}
                        >
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                            />
                        </StyledBadge>
                    </IconButton> :
                    <IconButton onClick={() => navigate("/login")}>
                        <AccountCircleOutlinedIcon />
                    </IconButton>
                }
                <CustomMenu
                    open={openMenu}
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                    logout={handleLogout}
                />
            </Stack>
        </AppBar>
    )
}
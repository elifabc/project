import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../images/logo.png';
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const settings = [
        { label: 'Profil', path: '/Profile' },
        { label: 'Çıkış', path: '/' },
    ];

    const pages = [
        { label: 'Anasayfa', path: '/Home' },
        { label: 'Dolabım', path: '/Pantry' },
        { label: 'Tarifler', path: '/Recipes' },
        { label: 'Puan Durumu', path: '/Score' },
        { label: 'Saklama Koşulları', path: '/Storage' },
        { label: 'Hakkımızda', path: '/About' },
    ];

    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);
    const handleCloseUserMenu = () => setAnchorElUser(null);

    const [name, setName] = useState("");
    useEffect(() => { setName("EA"); }, []);

    const navigate = useNavigate();
    const go = (path) => {
        navigate(path);
        handleCloseNavMenu();
    };
    const goSettings = (path) => {
        navigate(path);
        handleCloseUserMenu();
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [arrowRef, setArrowRef] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'expiry-popper' : undefined;

    const handleNotifClick = (event) => {
        setAnchorEl((prev) => (prev ? null : event.currentTarget));
    };

    const items = ['Maydonoz', 'Süt'];

    return (
        <AppBar position="static" color="success">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img
                        style={{ height: '50px', borderRadius: '12px' }}
                        className="logo"
                        src={logo}
                        alt="logo"
                    />

                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/Home
                        "
                        sx={{
                            ml: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        YeşilDolap
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { md: 'flex', lg: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{ display: { xs: 'flex', md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((p) => (
                                <MenuItem key={p.path} onClick={() => go(p.path)}>
                                    <Typography sx={{ textAlign: 'center' }}>{p.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        YeşilDolap
                    </Typography>

                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            ml: 'auto',
                            mr: 2,
                            gap: 2,
                            alignItems: 'center',
                        }}
                    >
                        {pages.map((p) => (
                            <Button key={p.path} onClick={() => go(p.path)} sx={{ color: 'white', px: 2 }}>
                                {p.label}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ position: 'relative', mr: 1.0 }}>
                        <IconButton
                            aria-describedby={id}
                            color="inherit"
                            onClick={handleNotifClick}
                            size="large"
                        >
                            <NotificationsIcon sx={{ width: 28, height: 28 }} />
                        </IconButton>

                        <Popper
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            placement="bottom-end"
                            transition
                            modifiers={[
                                { name: 'offset', options: { offset: [0, 12] } },
                                { name: 'preventOverflow', options: { padding: 8 } },
                                { name: 'arrow', enabled: true, options: { element: arrowRef } },
                            ]}
                        >
                            {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={180}>
                                    <Box sx={{ position: 'relative' }}>
                                        <span
                                            ref={setArrowRef}
                                            style={{
                                                position: 'absolute',
                                                width: 5,
                                                height: 5,
                                                right: 48,
                                                top: -5,
                                                transform: 'rotate(45deg)',
                                                background: '#ffb300',
                                                boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
                                                borderRadius: 2,
                                                zIndex: -1,
                                            }}
                                        />
                                        <Paper
                                            elevation={6}
                                            sx={{
                                                bgcolor: 'warning.main',
                                                color: 'warning.contrastText',
                                                borderRadius: 2,
                                                minWidth: 360,
                                                maxWidth: 560,
                                                py: 1,
                                            }}
                                        >
                                            <Box sx={{ px: 2, pb: 1, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                <WarningAmberRoundedIcon fontSize="small" />
                                                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                                    Son kullanma tarihi yaklaşan ürünler
                                                </Typography>
                                                <Box sx={{ ml: 'auto' }}>
                                                    <IconButton
                                                        size="small"
                                                        aria-label="Kapat"
                                                        onClick={() => setAnchorEl(null)}
                                                        sx={{ color: 'warning.contrastText' }}
                                                    >
                                                        <CloseRoundedIcon fontSize="small" />
                                                    </IconButton>
                                                </Box>
                                            </Box>

                                            <Box sx={{ bgcolor: 'background.paper', color: 'text.primary', maxHeight: 300, overflowY: 'auto' }}>
                                                {items.map((name, i) => (
                                                    <Box
                                                        key={i}
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 1,
                                                            px: 2,
                                                            py: 1,
                                                            borderTop: i === 0 ? 'none' : '1px solid',
                                                            borderColor: 'divider',
                                                        }}
                                                    >
                                                        <WarningAmberRoundedIcon fontSize="small" />
                                                        <Typography sx={{ fontWeight: 600, flex: 1 }}>{name}</Typography>
                                                        <Button
                                                            size="small"
                                                            variant="outlined"
                                                            onClick={() => navigate('/pantry')}
                                                        >
                                                            Göz at
                                                        </Button>
                                                    </Box>
                                                ))}

                                                {items.length === 0 && (
                                                    <Typography sx={{ px: 5, py: 2.5 }} color="black">
                                                        Son Kullanma Tarihi Yaklaşan Ürün Yok.
                                                    </Typography>
                                                )}
                                            </Box>
                                        </Paper>
                                    </Box>
                                </Fade>
                            )}
                        </Popper>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Profil">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar sx={{ height: 40, width: 40 }}>{name}</Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((s) => (
                                <MenuItem key={s.path} onClick={() => goSettings(s.path)}>
                                    <Typography sx={{ textAlign: 'center' }}>{s.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;

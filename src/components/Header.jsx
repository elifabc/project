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


function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const settings = [
        { label: 'Profil', path: '/' },
        { label: 'Çıkış', path: '/login' },
    ];

    const pages = [
        { label: 'Anasayfa', path: '/' },
        { label: 'Dolabım', path: '/pantry' },
        { label: 'Tarifler', path: '/recipes' },
        { label: 'Saklama Koşulları', path: '/storage' },
        { label: 'Hakkımızda', path: '/about' },
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


    return (
        <AppBar position="static" color="success">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img style={{
                        height:'50px',
                        borderRadius: '12px'
                    }} className="logo" src={logo} alt="logo" />

                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
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
                            <Button
                                key={p.path}
                                onClick={() => go(p.path)}
                                sx={{ color: 'white', px: 2 }}
                            >
                                {p.label}
                            </Button>
                        ))}
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

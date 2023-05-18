import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import {AiOutlineUser} from "react-icons/ai";
import {BiSearch} from "react-icons/bi";
import {VscBell} from "react-icons/vsc";
import s from "./Header.module.scss"
import logo from "../../assets/icon/logoIvi.svg"
import {addWidth} from "../../redux/styleSlice"

import {useElementWidth} from "../../hooks/currentWidth";
import {useEffect} from "react";
import {useAppDispatch} from "../../hooks/hooks";
import {ColorButton} from "../Button/CustomButton";
import {Popover, SpeedDial, SpeedDialIcon} from "@mui/material";

const pages = ['Мой Иви', 'Что нового', 'Фильмы', 'Сериалы', 'Мультфильмы'];

const navTitle = {
    fontSize: "15px",
    lineHeight: "20px",
    fontFamily: 'Inter',
    fontWeight: 500,
    color: 'rgba(255, 255, 255, 0.48)',

    textTransform: "Capitalize",
}

function ResponsiveAppBar() {
    const dispatch = useAppDispatch()
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };


    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick:T = (event: T) => {
        if (event.currentTarget.id === 'Фильмы') {
            setAnchorEl(event.currentTarget);
        }
        if (event.currentTarget.id === 'Сериалы') {
            setAnchorEl(event.currentTarget);
        }
        if (event.currentTarget.id === 'Мультфильмы') {
            setAnchorEl(event.currentTarget);
        }

    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);


    return (
        <AppBar position="static" color={'transparent'} className={s.appBar}>
            <Container maxWidth={"lg"} className={s.container}>
                <Toolbar disableGutters>
                    <div className={s.logo}>
                        <img src={logo} alt=""/>
                    </div>
                    <Box sx={{flexGrow: 1, display: {xs: 'block', md: 'none'},}}>
                    </Box>
                    <Box sx={{flexGrow: 1, ml: 3, display: {xs: 'none', md: 'flex'},}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                id={page}
                                sx={{py: 3, display: 'block'}}
                                aria-owns={open ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handleClick}
                                onMouseLeave={handleClose}
                            >
                                <Typography
                                    key={page}
                                    variant="h5"
                                    noWrap
                                    component="a"
                                    href=''
                                    className={s.navText}
                                    sx={{
                                        ...navTitle,
                                        my: 1,
                                        textDecoration: 'none',

                                    }}
                                >
                                    {page}
                                </Typography>
                            </Button>

                        ))}
                    </Box>
                    <ColorButton variant="contained">Смотреть 30 дней <br/> бесплатно</ColorButton>


                    <Box sx={{flexGrow: 0, display: {xs: 'none', sm: 'flex'}, gap: "1rem"}}>
                        <IconButton onClick={handleOpenUserMenu}

                                    sx={{
                                        ...navTitle,
                                        color: 'rgba(255, 255, 255, 0.48)',
                                    }}>
                            <BiSearch size={21} style={{marginRight: "8%"}}/>
                            Поиск
                        </IconButton>
                        <IconButton onClick={handleOpenUserMenu}
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.48)',
                                    }}>
                            <VscBell size={19}/>
                        </IconButton>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu}

                                        sx={{
                                            p: 1,
                                            color: 'rgba(255, 255, 255, 0.48)',
                                            border: "2px solid rgba(255, 255, 255, 0.48)",
                                            borderRadius: '8px'
                                        }}>
                                <AiOutlineUser/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>

                {open && <div onMouseEnter={handleClick}
                              onMouseLeave={handleClose}
                              style={{maxWidth: "1200px", width: "100%", background: "red"}}> hello
                </div>}
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;

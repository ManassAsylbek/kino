import * as React from 'react';
import s from "./Navigation.module.scss"
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from "@mui/material/Box";
import {BiHomeAlt, BiSearch} from "react-icons/bi";
import {FiFolderPlus} from "react-icons/fi";
import {AiOutlineUser, AiOutlineEllipsis} from "react-icons/ai";


export default function LabelBottomNavigation() {
    const [value, setValue] = React.useState('Мой иви');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box className={s.navigation} sx={{
            display: {xs: 'flex', md: 'none' , zIndex:100,}
        }}>
            <BottomNavigation className={s.box}
                              value={value}
                              onChange={(event, newValue) => {
                                  setValue(newValue);
                              }}

                              sx={{

                                  width: 500,
                                  backgroundColor: 'transparent'
                              }}>
                <BottomNavigationAction
                    sx={{
                        minWidth: "10px",
                        "&.Mui-selected": {
                            color: "white"
                        }
                    }}
                    label="Мой иви"
                    value="Мой иви"
                    icon={<BiHomeAlt size={"50%"}/>}
                />
                <BottomNavigationAction
                    sx={{
                        minWidth: "10px",
                        "&.Mui-selected": {
                            color: "white"
                        }
                    }}
                    label="Каталог"
                    value="Каталог"
                    icon={<FiFolderPlus size={"50%"}/>}
                />
                <BottomNavigationAction
                    sx={{
                        minWidth: "10px",
                        "&.Mui-selected": {
                            color: "white"
                        }
                    }}
                    label="Поиск"
                    value="Поиск"
                    icon={<BiSearch size={"50%"}/>}
                />
                <BottomNavigationAction
                    sx={{
                        minWidth: "10px",
                        "&.Mui-selected": {
                            color: "white"
                        }
                    }}
                    label="Профиль"
                    value="Профиль"
                    icon={<AiOutlineUser size={24}/>}
                />
                <BottomNavigationAction
                    sx={{
                        minWidth: "10px",
                        "&.Mui-selected": {
                            color: "white"
                        }
                    }}
                    label="Еще"
                    value="Еще"
                    icon={<AiOutlineEllipsis size={24}/>}
                />
            </BottomNavigation>
        </Box>
    );
}

import * as React from 'react';
import {styled} from '@mui/material/styles';
import Button, {ButtonProps} from '@mui/material/Button';
import {red,pink} from '@mui/material/colors';

export const ColorButton = styled(Button)<ButtonProps>(({theme}) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "13px",
    lineHeight: "16px",
    padding:"1px 24px",
    borderRadius:"10px",
    textTransform:"capitalize",
    '&:hover': {
        backgroundColor: pink[700],
    },
}));
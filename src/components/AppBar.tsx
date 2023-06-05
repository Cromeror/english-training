import {AppBar as MuiAppBar, IconButton, Toolbar, Typography} from "@mui/material";
import Link from "next/link";
import SettingsIcon from '@mui/icons-material/Settings';
import * as React from "react";

export const AppBar = () => {
    return (
        <MuiAppBar position="fixed">
            <Toolbar sx={{
                display: "flex",
                justifyContent: "space-between"
            }
            }>
                <Typography variant="h6">
                    <Link href="/">HOME</Link>
                </Typography>
                <IconButton>
                    <Link href="settings">
                        <SettingsIcon/>
                    </Link>
                </IconButton>
            </Toolbar>
        </MuiAppBar>
    )
}

import Grid from "@mui/material/Unstable_Grid2";
import {List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import * as React from "react";

export const Topics = () => {
    return (
        <Grid xs={2}>
            <Typography>Elige un tema</Typography>
            <nav>
                <List>
                    <ListItem>
                        <ListItemButton component="a" href="/irregular-verbs">
                            <ListItemText primary="Irregular verbs"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component="a" href="/irregular-verbs/write-the-correct-time">
                            <ListItemText primary="PRACTICE: Irregular verbs"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component="a" href="/past-perfect">
                            <ListItemText primary="Past Perfect"/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Grid>
    )
}

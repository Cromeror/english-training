import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {List, ListItem, Typography} from "@mui/material";
import Link from "next/link";

export default function Home() {
    return (
        <Grid container direction={"column"} spacing={4}>
            <Grid>
                <Typography>Elige un tema</Typography>
            </Grid>
            <Grid>
                <List>
                    <ListItem>
                        <Link href="irregular-verbs">Irregular verbs</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="past-perfect">Past Perfect</Link>
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
}

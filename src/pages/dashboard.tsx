import React from "react"
import {Button} from "@mui/material";

export default function Home({children}: any) {
    return (
        <div>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            {children}
        </div>
    )
}

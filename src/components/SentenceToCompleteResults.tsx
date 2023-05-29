import {Typography} from "@mui/material";
import * as React from "react";
import {QuestionAnswered} from "./SentenceToCompleteForm";
import Grid2 from "@mui/material/Unstable_Grid2";

interface SentenceToCompleteResultProps {
    answers: QuestionAnswered[]
}

export const SentenceToCompleteResult = ({answers}: SentenceToCompleteResultProps) => {
    return (
        <Grid2 container justifyContent={"center"} alignItems={"center"} sx={{height: "100vh"}}>
            <Grid2 container direction={"column"} spacing={1}>
                <Typography>
                    Resultados
                </Typography>
                {
                    answers.map((result, index) => {

                        return (
                            <Grid2>
                                <Typography key={index} sx={
                                    {
                                        border: "2px solid",
                                        borderColor: result.correct ? "green" : "red",
                                        borderRadius: 2,
                                        py: 1,
                                        px: 2,
                                    }
                                }>
                                    {result.text}
                                </Typography>
                            </Grid2>
                        )
                    })
                }
            </Grid2>
        </Grid2>)
}

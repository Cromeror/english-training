import {Typography} from "@mui/material";
import * as React from "react";
import {SentenceToCompleteResult} from "./SentenceToCompleteForm";
import Grid2 from "@mui/material/Unstable_Grid2";
import {AnswerFromArray} from "./AnswerFromArray";

interface SentenceToCompleteResultProps {
    results: SentenceToCompleteResult[]
}

export const ListSentenceToCompleteResult = ({results}: SentenceToCompleteResultProps) => {
    return (
        <Grid2 container justifyContent={"center"} alignItems={"center"} sx={{height: "100vh"}}>
            <Grid2 container direction={"column"} spacing={1}>
                <Typography>
                    Resultados
                </Typography>
                {
                    results.map((result, index) => (
                        <Grid2 key={index}>
                            <Typography sx={
                                {
                                    border: "2px solid",
                                    borderColor: result.isCorrect ? "green" : "red",
                                    borderRadius: 2,
                                    py: 1,
                                    px: 2,
                                }
                            }>
                                <AnswerFromArray sentence={result.sentence} answers={result.userAnswers}
                                                 highlight={true}/>
                            </Typography>
                        </Grid2>
                    ))
                }
            </Grid2>
        </Grid2>)
}

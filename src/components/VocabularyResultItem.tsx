import * as React from "react";
import {Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Question} from "../domine/Question";

interface VocabularyResultItemProps {
    result: VocabularyResponse
}

export interface VocabularyResponse extends Question {
    answer: string;
    isCorrect: boolean;
}

export const VocabularyResultItem = ({result}: VocabularyResultItemProps) => {
    const answerToString = result.answer !== "" && result.answer || "--"
    return (
        <Grid2 flexDirection={"column"}
               sx={{
                   backgroundColor: "#96d990",
                   borderRadius: 2,
                   padding: 2
               }}>
            <Typography dangerouslySetInnerHTML={{__html: result.text}}/>
            <Typography variant={"h3"}>{answerToString}</Typography>
            <Typography>
                {result.isCorrect ? "Great answer!"
                    : <>The correct answer is <b>{result.correctAnswer}</b></>}
            </Typography>
        </Grid2>
    )
}

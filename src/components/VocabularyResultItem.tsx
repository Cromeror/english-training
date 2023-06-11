import * as React from "react";
import {Card, CardContent, Typography} from "@mui/material";
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
        <Card>
            <CardContent>
                <Grid2 flexDirection={"column"}>
                    <Typography dangerouslySetInnerHTML={{__html: result.text}}/>
                    <Typography color={result.isCorrect ? "lightgreen" : "orangered"}
                                variant={"h3"}>
                        {answerToString}
                    </Typography>
                    <Typography>
                        {result.isCorrect ? "Great answer!"
                            : <>The correct answer is <b>{result.correctAnswer}</b></>}
                    </Typography>
                </Grid2>
            </CardContent>
        </Card>
    )
}

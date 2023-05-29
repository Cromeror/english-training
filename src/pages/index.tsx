import * as React from 'react';
import {useState} from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import {Typography} from "@mui/material";
import {UncompletedSentence} from "../domine/UncompletedSentence";
import {dataSentencesToComplete} from "../dataSource/dataSentencesToComplete";
import {SentenceToCompleteForm} from "../components/SentenceToCompleteForm";
import {SentenceToCompleteResult} from "../components/SentenceToCompleteResults";

interface QuestionAnswered extends UncompletedSentence {
    correct: boolean
}

export default function Home() {
    const [testResults, setTestResults] = useState<QuestionAnswered[]>([])

    if (testResults.length > 0) {
        return (<SentenceToCompleteResult answers={testResults}/>)
    }

    return (
        <Grid2 container justifyContent={"center"} alignItems={"center"} sx={{height: "100vh"}}>
            <Grid2 container direction={"column"} spacing={4}>
                <Grid2>
                    <Typography>
                        Completa las frases con la forma correcta del verbo que se encuentra entre paréntesis.
                    </Typography>
                </Grid2>

                <SentenceToCompleteForm sentences={dataSentencesToComplete}
                                        onSubmit={results => setTestResults(results)}/>
            </Grid2>
        </Grid2>
    );
}

import * as React from 'react';
import {useState} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {Typography} from "@mui/material";
import {dataSentencesToComplete} from "../dataSource/dataSentencesToComplete";
import {SentenceToCompleteForm, SentenceToCompleteResult} from "../components/SentenceToCompleteForm";
import {ListSentenceToCompleteResult} from "../components/SentenceToCompleteResults";

export default function PastPerfect() {
    const [testResults, setTestResults] = useState<SentenceToCompleteResult[]>([])

    if (testResults.length > 0) {
        return (<ListSentenceToCompleteResult results={testResults}/>)
    }

    return (
        <Grid container justifyContent={"center"} alignItems={"center"} sx={{height: "100vh"}}>
            <Grid container direction={"column"} spacing={4}>
                <Grid>
                    <Typography>
                        Perfect Past:
                        Completa las frases con la forma correcta del verbo que se encuentra entre paréntesis.
                    </Typography>
                </Grid>

                <Grid>
                    <SentenceToCompleteForm sentences={dataSentencesToComplete}
                                            onSubmit={results => setTestResults(results)}/>
                </Grid>

            </Grid>
        </Grid>
    );
}

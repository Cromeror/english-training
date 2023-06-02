import React, {useRef, useState} from "react"
import {Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {SentenceToCompleteForm} from "../components/SentenceToCompleteForm";
import {ListSentenceToCompleteResult} from "../components/SentenceToCompleteResults";
import {dataIrregularSentencesToComplete} from "../dataSource/dataIrregularVerbsToComplete";

export default function Dashboard() {
    const [testResults, setTestResults] = useState<ListSentenceToCompleteResult[]>([])
    const [started, setStarted] = useState(false)
    const dataSet = useRef([])

    if (testResults.length > 0) {
        return (<ListSentenceToCompleteResult results={testResults}/>)
    }

    const startTest = () => {
        const randomSelection = Math.floor(Math.random() * dataIrregularSentencesToComplete.length)
        if (randomSelection > dataIrregularSentencesToComplete.length - 10) {
            return dataIrregularSentencesToComplete.slice(randomSelection - 10, randomSelection)
        }
        dataSet.current = dataIrregularSentencesToComplete.slice(randomSelection, randomSelection + 10)
        setStarted(true)
    }

    return (
        <Grid container justifyContent={"center"} alignItems={"center"} sx={{height: "100vh"}}>
            <Grid container direction={"column"} spacing={4}>
                {!started && <button onClick={() => startTest()}>Start</button>}
                {started &&
                <>
                    <Grid>
                        <Typography>
                            Perfect Past:
                            Completa las frases con la forma correcta del verbo que se encuentra entre paréntesis.
                        </Typography>
                    </Grid>

                    <Grid>
                        <SentenceToCompleteForm sentences={dataSet.current}
                                                onSubmit={results => setTestResults(results)}/>
                    </Grid>
                </>}
            </Grid>
        </Grid>
    )
}

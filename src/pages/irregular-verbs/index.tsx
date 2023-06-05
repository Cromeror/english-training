import React, {useRef, useState} from "react"
import {Button, List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import {SentenceToCompleteForm} from "../../components/SentenceToCompleteForm";
import {ListSentenceToCompleteResult} from "../../components/ListSentenceToCompleteResults";
import {dataIrregularSentencesToComplete} from "../../dataSource/dataIrregularVerbsToComplete";
import Grid2 from "@mui/material/Unstable_Grid2";

interface StartButtonProps {
    children: string | React.ReactNode
}

const StartButton = ({children, ...otherProps}: StartButtonProps) => {
    return <Button color={"secondary"} sx={{
        margin: "auto",
        fontSize: "2rem",
        padding: "4px 32px"
    }} {...otherProps}>
        {children}
    </Button>
}

export default function Index() {
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
        <Grid2 xs={10} sx={{
            minHeight: 500
        }}>
            <Typography>
                Perfect Past:
                Completa las frases con la forma correcta del verbo que se encuentra entre paréntesis.
            </Typography>
            <Grid2 sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                margin: "auto"
            }} md={8}>
                {!started && <StartButton onClick={() => startTest()}>Start</StartButton>}
                {started &&
                <SentenceToCompleteForm sentences={dataSet.current.slice(0, 5)}
                                        onSubmit={results => setTestResults(results)}
                                        wrapperQuestions={({children})=>{
                                            return <>asda</>
                                        }}
                />}
            </Grid2>
        </Grid2>
    )
}

import React, {useRef, useState} from "react";
import {dataSourceIrregularVerbs} from "../../dataSource/dataIrregularVerbsToComplete";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Box, Button, Typography} from "@mui/material";
import {VocabularyResponse, VocabularyResultItem} from "../../components/VocabularyResultItem";
import {VocabularyForm} from "../../components/VocabularyForm";

interface StartButtonProps {
    children: string | React.ReactNode
}

const StartButton = ({children, ...otherProps}: StartButtonProps) => {
    return <Button color={"secondary"} sx={{
        margin: "auto",
        fontSize: "2rem",
        padding: "4px 32px",
        animation: "pulse 2s infinite",
        "@keyframes pulse": {
            "0%": {
                boxShadow: "0 0 0 0 rgba(25, 133, 123, 0.5)"
            },
            "70%": {
                boxShadow: "0 0 2px 10px rgba(25, 133, 123, 0)"
            },
            "100%": {
                boxShadow: "0 0 2px 0 rgba(25, 133, 123, 0)"
            }
        }
    }} {...otherProps}>
        {children}
    </Button>
}

export default () => {
    const [testResults, setTestResults] = useState<VocabularyResponse[]>([])
    const [started, setStarted] = useState(false)
    const dataSet = useRef([])

    if (testResults.length > 0) {
        return (
            <Box container sx={{alignItems: "center", height: "100%", display: "flex"}}>
                <Grid2 container spacing={4} sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    {testResults.map((result, index) => (
                        <Grid2 key={index} mdOffset={0}>
                            <VocabularyResultItem result={result}/>
                        </Grid2>
                    ))
                    }
                </Grid2>
            </Box>
        )
    }

    const startTest = () => {
        const randomSelection = Math.floor(Math.random() * dataSourceIrregularVerbs.length)
        if (randomSelection > dataSourceIrregularVerbs.length - 10) {
            return dataSourceIrregularVerbs.slice(randomSelection - 10, randomSelection)
        }
        dataSet.current = dataSourceIrregularVerbs.slice(randomSelection, randomSelection + 10)
        setStarted(true)
    }

    return (
        <Grid2 container
               sx={{
                   gap: 4,
                   height: "100%",
                   justifyContent: "center",
                   alignItems: "center",
                   margin: "auto"
               }}
               md={8}>
            {!started
                ? <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <Typography variant={"h3"}>
                        Practice
                    </Typography>
                    <Typography sx={{
                        fontSize: 24,
                        marginBottom: 4
                    }}>
                        Write the verb past time or the participle, pay attention to the verb
                    </Typography>
                    <StartButton onClick={() => startTest()}>Start</StartButton>
                </Box>
                : <VocabularyForm questions={dataSet.current.slice(0, 5)}
                                  onSubmit={results => setTestResults(results)}
                />}
        </Grid2>
    )
}

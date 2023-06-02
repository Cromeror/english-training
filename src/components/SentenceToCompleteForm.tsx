import {Form, Formik} from "formik";
import {SentenceToComplete} from "./SentenceToComplete";
import {Button} from "@mui/material";
import * as React from "react";
import {useMemo} from "react";
import {countInputsQuestions} from "../utils";
import {UncompletedSentence} from "../domine/UncompletedSentence";

export interface SentenceToCompleteResult extends UncompletedSentence {
    userAnswers: string[];
    isCorrect: boolean;
}

interface SentenceToCompleteFormProps {
    sentences: UncompletedSentence[];
    onSubmit: (results: SentenceToCompleteResult[]) => void;
}

export const SentenceToCompleteForm = ({sentences, onSubmit}: SentenceToCompleteFormProps) => {
    const initialValues = useMemo(() => {
        let defaultInputValues = {}
        sentences.forEach((question, indexQuestion) => {
            const count = countInputsQuestions(question.sentence)
            defaultInputValues[`question-${indexQuestion}`] = Array.apply(null, Array(count)).map(() => "")

        })
        return defaultInputValues
    }, [])

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                const valuesAsArray = Object.values(values);
                const evaluated: SentenceToCompleteResult[] = valuesAsArray.map((userAnswers, index) => {
                    const {answers} = sentences[index] as UncompletedSentence
                    const matchAnswer = userAnswers.filter((userAnswer, index) => (answers[`{${index}}`].find((option) => option === userAnswer)))

                    return {
                        ...sentences[index],
                        userAnswers,
                        isCorrect: matchAnswer.length === userAnswers.length
                    }
                })

                onSubmit(evaluated)
            }}
        >
            <Form
                style={
                    {
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                    }
                }>
                {
                    sentences.map((data, index) => {
                        return (
                            <SentenceToComplete question={data} key={index} id={`question-${index}`}/>
                        )
                    })
                }
                <Button type="submit">Submit</Button>
            </Form>
        </Formik>)
}
